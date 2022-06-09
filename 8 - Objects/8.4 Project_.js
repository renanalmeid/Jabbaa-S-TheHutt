/*
A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special.

 Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!
*/

/*
We want to create, retrieve, and add information about your favorite sports team. 

Basketball, soccer, tennis, or water polo, you pick it. 

It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. 

For example, you might want to get the total number of games your team has played, or the average score of all of their games.



*/

const team ={
    _players: [
      {firstName: 'Pete', lastName: 'Wheeler', age: 54},
      {firstName: 'Kou', lastName: 'Baclk', age: 23},
      {firstName: 'Jahn', lastName: 'Muter', age: 12}
    ],
    _games: [
      {opponent: 'Lakers', teamPoints: 13, opponentPoints: 54},
      {opponent: 'Wizards', teamPoints: 12, opponentPoints: 3},
      {opponent: 'Socks', teamPoints: 434, opponentPoints: 23},
    ], 
    get players(){
      return this._players;
    }, 
    get games(){
      return this._games;
    }, 
    addPlayer(newFirstName, newLastName,newAge){
      let player ={
        firstName:newFirstName,
        lastName: newLastName,
        age:newAge
      };
      this.players.push(player);
    },
  
    addGame (newOpponent, newTeampoints,newOpponentPoins){
      let game = {
        opponent:newOpponent, 
        teamPoints:newTeampoints,
        opponentPoins:newOpponentPoins
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76.);
  console.log(team.players);
  team.addGame('Wicked', 123, 43);
  console.log(team.games);