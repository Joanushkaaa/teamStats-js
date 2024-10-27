const team = {
    _players: [
      {
        firstName: "Ronie", lastName: "Saleh", age: 37,
      },
      {
        firstName: "Ronald", lastName: "Pantolini", age: 38,
      },
      {
        firstName: "Dan", lastName: "Saklovski", age: 40,
      },
    ],
  
    _games: [
      {
        opponent: "Solichio", teamPoints: 24, opponentPoints: 23,
      },
      {
        opponent: "Tutoo", teamPoints: 21, opponentPoints: 20,
      },
      {
        opponent: "Salizar", teamPoints: 27, opponentPoints: 29,
      },
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
    
    //Adding a new player
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
  
     //Adding game results
     addGame(newOpponent, newTeamPoints, newOpponentPoints) {
       let game = {
         opponent: newOpponent,
         teamPoints: newTeamPoints,
         opponentPoints: newOpponentPoints
       };
       this.games.push(game);
     },
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);
  