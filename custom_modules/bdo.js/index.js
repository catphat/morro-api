  
const { EventEmitter } = require('events');
const { JSDOM } = require('jsdom');
const { Cookie } = require('tough-cookie');

const createJar = require('request-promise-native').jar;

const defaultParameters = {
    followAllRedirects: true,
    headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/605.1'
    }
}

const uris = {
    login: "https://account.playkakaogames.com",
    market: "https://marketweb-na.blackdesertonline.com"
}

const req = require('request-promise-native');

const checkTask = (clientKey, taskId) => {
    return new Promise(async (resolve, reject) => {
        req({
            uri: 'https://api.anti-captcha.com/getTaskResult',
            method: 'POST',
            body: {
                clientKey,
                taskId
            },
            json: true
        }).then(data => {
            console.log(data);
            if (data.status == "ready") return resolve(data);
            setTimeout(() => checkTask(clientKey, taskId).then(resolve).catch(reject), 2000);
        }).catch(reject);
    });
}

const resolveRecaptcha = async (websiteKey, websiteURL, antiCaptchaKey) => {

    const { taskId } = await req({
        uri: 'https://api.anti-captcha.com/createTask',
        method: 'POST',
        body: {
            clientKey: antiCaptchaKey,
            task: {
                type: "NoCaptchaTaskProxyless",
                websiteURL,
                websiteKey
            },
            softId: 0,
            languagePool: "en"
        },
        json: true
    });

    return checkTask(antiCaptchaKey, taskId).then(data => data.solution.gRecaptchaResponse);
}

function RequestHandler(boundClient) {

    const jar = createJar();
    const request = require('request-promise-native').defaults({...defaultParameters, jar});

    let requestVerificationTokens = [];

    const fetch = (endpoint, formData) => {
        const method = "POST",
              uri = uris.market + endpoint;

        return request({ method, uri, formData });
    }

    const extractRequestTokens = html => {
        const { document } = new JSDOM(html).window;
        const tokens = Array.from(document.querySelectorAll('* > [name="__RequestVerificationToken"]'));
        requestVerificationTokens = tokens.map(x => ({ id: x.parentNode.id.replace(/frm/g, ""), token: x.value })).filter(x => x.id);
    }

    const getRequestToken = endpoint => {
        endpoint = endpoint.replace(/(Home|\/)+/g, "");
        const index = requestVerificationTokens.findIndex(x => x.id == endpoint);
        return requestVerificationTokens[index].token;
    }

    const authorize = () => request(uris.market);

    const csrf = () => request(uris.login + "/bdo/login").then(html => {
        const { document } = new JSDOM(html).window;
        return document.querySelector('[name="_csrf"]').value;
    })

    const otp = async (username, password) => {
        const _csrf = await csrf();
        const gRecaptchaResponse = await resolveRecaptcha("6LfaHiITAAAAAAgZBHl4ZUZAYk5RlOYTr6m2N34X", "https://account.playkakaogames.com/bdo/login", boundClient.antiCaptchaKey);
        return request({
            method: "POST",
            uri: uris.login + "/login/otp",
            formData: {
                performLoginUrl: "perform_login",
                _csrf,
                username,
                password,
                "g-recaptcha-response": gRecaptchaResponse
            }
        }).then(() => _csrf).catch(() => null);
    }
    
    this.marketplace = {
        fetchHotList: () => fetch("/Home/GetWorldMarketHotList"),
        fetchInventory: () => fetch("/Home/GetMyWalletList"),
        fetchListed: () => fetch("/Home/GetMyBiddingList"),
        searchItem: searchText => {
            const endpoint = "/Home/GetWorldMarketSearchList",
                  __RequestVerificationToken = getRequestToken(endpoint);

            const formData = { __RequestVerificationToken, searchText };
            return fetch(endpoint, formData);
        },
        getItemById: mainKey => {
            const endpoint = "/Home/GetWorldMarketSubList",
                  __RequestVerificationToken = getRequestToken(endpoint);

            const formData = { __RequestVerificationToken, mainKey, usingCleint: 0  }
            return fetch(endpoint, formData);
        }
    }

    this.authenticate = async (username, password, imported) => {
        await authorize();
        otp(username, password).then(_csrf => {
            if (!_csrf) return false;
            request({
                method: "POST",
                uri: uris.login + "/bdo/perform_login",
                formData: {
                    bdoLogin: "true",
                    _csrf,
                    username,
                    password,
                    code: ""
                }
            }).then(html => {
                extractRequestTokens(html);
                boundClient.emit("ready");
                return true;
            }).catch(console.error);
        })
    }
    
    this.getSession = () => {
        const { store } = jar._jar;
        return new Promise((resolve, reject) => store.getAllCookies((err, cookies) => resolve(cookies)));
    }

    this.importSession = session => {
        const { store } = jar._jar;
        session.forEach(cookie => store.putCookie(Cookie.fromJSON(cookie), () => undefined));
        return new Promise(async (resolve, reject) => {
            await authorize().then(extractRequestTokens);
            resolve(true);
        });
    }

}

class Client extends EventEmitter {
    constructor(antiCaptchaKey) {
        super();
        this.handler = new RequestHandler(this);
        this.antiCaptchaKey = antiCaptchaKey;
    }

    /**
     * Search the marketplace for an item by name.
     * @param {String} name - The name of the item you'd like to search.
     * @returns {Promise<Array>} - Returns an array of possible items.
     */
    searchItem(name) {
        const { marketplace } = this.handler;
        return marketplace.searchItem(name).then(x => JSON.parse(x).list);
    }

    /**
     * Fetch the item by the ID, can be found by searching
     * the item on BDOCodex, and copying the last digits in the URL.
     * @param {Number|String} id - The BDOCodex ID of the item.
     */
    fetchItemById(id) {
        const { marketplace } = this.handler;
        return marketplace.getItemById(id.toString()).then(x => JSON.parse(x).detailList);
    }

    /**
     * Authenticate into the BDO marketplace using username and password authentication.
     * @param {String} username - The username of the BDO user account.
     * @param {String} password - The password of the corresponding BDO user account.
     * @returns {Promise<Boolean>} - Resolves whether the login was a success. 
     */
    async login(username, password) {
        const { handler } = this;
        return handler.authenticate(username, password);
    }
    
    /**
     * Acquire the session of currently logged in user.
     * NOTE: May return incomplete sessions if called before the "ready" event is emitted.
     * @returns {Promise<Array>} - The cookies for the current session.
     */
    getSession() {
        const { handler } = this;
        return handler.getSession();
    }

    /**
     * Authenticate into the central marketplace via previously exported cookie data.
     * NOTE: Use this method in order to prevent repeated logins, which triggers 
     * an automatic flag in Kakao's security, locking the account being accessed.
     * @param {Array} session - The session data acquired from teh getSession() method
     * of the Client class.
     */
    loadSession(session) {
        const { handler } = this;
        handler.importSession(session).then(() => this.emit("ready"));
    }
    
}

module.exports = { Client };