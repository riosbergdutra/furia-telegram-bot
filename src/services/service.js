const matches = require('../data/matches');
const players = require('../data/players');
const stats = require('../data/stats');

class Service {
  static async getTeamMatches() {
    return matches;
  }
  static async getLivePlayers() {
    const players = await this.getTeamPlayers();
    return players.filter(player => 
      player.isLive && player.twitch  // Filtra só os que estão "ao vivo" no mock
    ).map(player => ({
      nickname: player.nickname,
      title: player.streamTitle || "Transmissão ao vivo",
      url: player.twitch
    }));
  }

  static async getTeamPlayers() {
    return players;
  }

  static async getTeamStats() {
    return {
      overview: stats.overview,
      mapPerformance: stats.mapPerformance,
      headToHead: stats.headToHead
    };
  }

  static async getPlayerStats(playerNickname) {
    return stats.playerStats[playerNickname] || null;
  }

static async getMatchOdds(matchId) {
  return odds.find(o => o.matchId === matchId) || {
    teams: ["FURIA", "TBD"],
    odds: { FURIA: 1.80, TBD: 2.00, Draw: 3.00 },
    source: "https://www.oddsportal.com"
  };
}
}

module.exports = Service;