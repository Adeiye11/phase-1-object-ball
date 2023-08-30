function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

// Call the gameObject function to get the object with the provided data
const gameData = gameObject();

function numPointsScored(playerName) {
  for (const team in gameData) {
    if (gameData[team].players.hasOwnProperty(playerName)) {
      return gameData[team].players[playerName].points;
    }
  }
  return "Player not found";
}

function shoeSize(playerName) {
  for (const team in gameData) {
    if (gameData[team].players.hasOwnProperty(playerName)) {
      return gameData[team].players[playerName].shoe;
    }
  }
  return "Player not found";
}

function teamColors(teamName) {
  for (const team in gameData) {
    if (gameData[team].teamName === teamName) {
      return gameData[team].colors;
    }
  }
  return "Team not found";
}

function teamNames() {
  const teamNamesArray = [];
  for (const team in gameData) {
    teamNamesArray.push(gameData[team].teamName);
  }
  return teamNamesArray;
}

function playerNumbers(teamName) {
  for (const team in gameData) {
    if (gameData[team].teamName === teamName) {
      const jerseyNumbers = [];
      for (const player in gameData[team].players) {
        jerseyNumbers.push(gameData[team].players[player].number);
      }
      return jerseyNumbers;
    }
  }
  return "Team not found";
}

function playerStats(playerName) {
  for (const team in gameData) {
    if (gameData[team].players.hasOwnProperty(playerName)) {
      return gameData[team].players[playerName];
    }
  }
  return "Player not found";
}

function mostPointsScored() {
  let maxPoints = 0;
  let playerWithMostPoints = '';

  for (const team in gameData) {
    for (const player in gameData[team].players) {
      if (gameData[team].players[player].points > maxPoints) {
        maxPoints = gameData[team].players[player].points;
        playerWithMostPoints = player;
      }
    }
  }

  return playerWithMostPoints;
}

function winningTeam() {
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;

  for (const player in gameData.home.players) {
    homeTeamPoints += gameData.home.players[player].points;
  }

  for (const player in gameData.away.players) {
    awayTeamPoints += gameData.away.players[player].points;
  }

  if (homeTeamPoints > awayTeamPoints) {
    return gameData.home.teamName;
  } else if (awayTeamPoints > homeTeamPoints) {
    return gameData.away.teamName;
  } else {
    return "It's a tie!";
  }
}

function playerWithLongestName() {
  let longestName = '';

  for (const team in gameData) {
    for (const player in gameData[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}
function doesLongNameStealATon() {
  let longestName = '';
  let mostSteals = 0;
  let playerWithMostSteals = '';

  for (const team in gameData) {
    for (const player in gameData[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
      if (gameData[team].players[player].steals > mostSteals) {
        mostSteals = gameData[team].players[player].steals;
        playerWithMostSteals = player;
      }
    }
  }

  return longestName === playerWithMostSteals;
}

