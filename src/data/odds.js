module.exports = [
    {
      matchId: 1, // Relacionado ao ID em matches.js
      teams: ["FURIA", "NAVI"],
      odds: {
        FURIA: 1.75,
        NAVI: 2.10,
        Draw: 3.25
      },
      lastUpdated: new Date(),
      source: "https://www.oddsportal.com"
    },
    {
      matchId: 2,
      teams: ["FURIA", "Vitality"],
      odds: {
        FURIA: 1.85,
        Vitality: 1.95,
        Draw: 3.50
      },
      lastUpdated: new Date(),
      source: "https://www.bet365.com"
    }
  ];