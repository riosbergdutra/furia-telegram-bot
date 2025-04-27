// data/stats.js
module.exports = {
    // Estatísticas gerais do time
    overview: {
      worldRanking: 7,
      winRate: "68%",
      mapsPlayed: 127,
      winStreak: 5,
      lastTournament: "IEM Rio 2025",
      currentForm: ["W", "W", "L", "W", "W"] // Últimos 5 resultados (V=Vitória, D=Derrota)
    },
  
    // Performance por mapa
    mapPerformance: {
      Mirage: {
        winRate: "75%",
        played: 32,
        favoriteSide: "CT (62%)"
      },
      Inferno: {
        winRate: "68%",
        played: 28,
        favoriteSide: "T (55%)"
      },
      Nuke: {
        winRate: "60%",
        played: 22,
        favoriteSide: "CT (70%)"
      },
      Overpass: {
        winRate: "72%",
        played: 18,
        favoriteSide: "CT (58%)"
      },
      Ancient: {
        winRate: "65%",
        played: 15,
        favoriteSide: "T (53%)"
      }
    },
  
    // Estatísticas dos jogadores
    playerStats: {
      KSCERATO: {
        rating: 1.18,
        killsPerRound: 0.78,
        headshotPercentage: "62%",
        clutchSuccess: "45%"
      },
      arT: {
        rating: 0.97,
        killsPerRound: 0.68,
        headshotPercentage: "49%",
        utilityDamagePerRound: 8.2
      },
      FalleN: {
        rating: 1.05,
        awpKillsPerRound: 0.32,
        firstKillPercentage: "18%"
      },
      chelo: {
        rating: 1.08,
        killsPerRound: 0.72,
        survivalRate: "42%"
      },
      insani: {
        rating: 1.12,
        killsPerRound: 0.75,
        openingKillSuccess: "53%"
      }
    },
  
    // Histórico contra times principais
    headToHead: {
      NAVI: {
        wins: 8,
        losses: 5,
        lastMatch: "2-1 (Inferno, Mirage, Nuke)"
      },
      Vitality: {
        wins: 5,
        losses: 7,
        lastMatch: "1-2 (Overpass, Ancient, Mirage)"
      },
      FaZe: {
        wins: 6,
        losses: 6,
        lastMatch: "2-0 (Mirage, Inferno)"
      }
    },
  
    lastUpdated: new Date("2025-04-28")
  };