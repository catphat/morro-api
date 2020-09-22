const { ApiClient } = require("twitch");
const { RefreshableAuthProvider, StaticAuthProvider } = require("twitch-auth");
const sequelize = require("../db");
const { Token } = sequelize.models;
const {
  TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET,
  TWITCH_USER_ID,
} = require("../config");
var apiClient;

(async function () {
  const token = await Token.findOne({
    where: { id: 1 },
  });
  const authProvider = new RefreshableAuthProvider(
    new StaticAuthProvider(TWITCH_CLIENT_ID, token.access),
    {
      TWITCH_CLIENT_SECRET,
      refreshToken: token.refreshToken,
      expiry:
        token.expiryTimestamp === null
          ? null
          : new Date(tokenData.expiryTimestamp),
      onRefresh: async ({ accessToken, refreshToken, expiryDate }) => {
        const newTokenData = {
          accessToken,
          refreshToken,
          expiryTimestamp: expiryDate === null ? null : expiryDate.getTime(),
        };
        await Token.sync({ force: true });
        await Token.create(newTokenData);
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
  } catch {
    res.status(404).send();
  }
}

async function getBits(req, res) {
  try {
    const leaderboard = await apiClient.helix.bits.getLeaderboard({
      period: "all",
    });
    res.status(200).json({ leaderboard: leaderboard.entries });
  } catch {
    res.status(404).send();
  }
}

module.exports = {
  isLive,
  getBits,
};
