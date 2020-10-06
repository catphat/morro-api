const { ApiClient } = require("twitch");
const { RefreshableAuthProvider, StaticAuthProvider } = require("twitch-auth");
const sequelize = require("../db");
const { Token } = sequelize.models;
const axios = require("axios");

const {
  TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET,
  TWITCH_USER_ID,
  TWITCH_TOKEN_SCOPES,
  SE_TOKEN,
  SE_BASEURL,
  SE_CHANNEL_ID,
} = require("../config");
var apiClient;

(async function () {
  //Id 2 = morrolan.tv token, id == 1 local testing
  const token = await Token.findOne({
    where: { id: 2 },
  });
  const authProvider = new RefreshableAuthProvider(
    new StaticAuthProvider(
      TWITCH_CLIENT_ID,
      token.accessToken,
      TWITCH_TOKEN_SCOPES
    ),
    {
      clientSecret: TWITCH_CLIENT_SECRET,
      refreshToken: token.refreshToken,
      expiry:
        token.expiryTimestamp === null
          ? null
          : new Date(parseInt(token.expiryTimestamp)),
      onRefresh: async ({ accessToken, refreshToken, expiryDate }) => {
        console.log("Refresh");
        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
        token.expiryTimestamp =
          expiryDate === null ? null : expiryDate.getTime();
        await token.save();
      },
    }
  );
  apiClient = new ApiClient({ authProvider });
})();

async function isLive(req, res) {
  try {
    const live =
      (await apiClient.helix.streams.getStreamByUserId(TWITCH_USER_ID)) !==
      null;
    res.status(200).json({ live: live });
  } catch (e) {
    console.log(e);
    res.status(404).end();
  }
}

async function getBits(req, res) {
  try {
    //Enable for cache testing
    //console.log("GET BITS FROM API");
    const leaderboard = await apiClient.helix.bits.getLeaderboard({
      period: "all",
      count: 50,
    });
    res.status(200).json(leaderboard.entries);
  } catch (e) {
    console.log(e);
    res.status(404).send();
  }
}

async function getSubs(req, res) {
  try {
    //Enable for cache testing
    //console.log("GET BITS FROM API");
    const subs = await apiClient.helix.subscriptions.getSubscriptions(
      TWITCH_USER_ID
    );
    res.status(200).json(subs);
  } catch (e) {
    console.log(e);
    res.status(404).send();
  }
}

async function getDonations(req, res) {
  try {
    //Enable for cache testing
    //console.log("GET BITS FROM API");
    const tips = await axios
      .get(SE_BASEURL + "tips/" + SE_CHANNEL_ID + "/top", {
        headers: {
          Authorization: `Bearer ${SE_TOKEN}`,
        },
      })
      .then((res) => res.data);
    let combinedTips = tips.reduce((a, c) => {
      let filtered = a.filter(
        (el) => el.username.toLowerCase() == c.username.toLowerCase()
      );
      if (filtered.length > 0) {
        a[a.indexOf(filtered[0])].total += c.total;
        delete a.email;
      } else {
        delete c.email;
        if (c.username !== "Anonymoz") {
          a.push(c);
        }
      }
      return a;
    }, []);

    res.status(200).json(combinedTips);
  } catch (e) {
    console.log(e);
    res.status(404).send();
  }
}

module.exports = {
  isLive,
  getBits,
  getDonations,
  getSubs,
};
