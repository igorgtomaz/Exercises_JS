let team = {
  _players: [],
  _games: [],
  
  // Players
  set players(inputPlayer) {
    this._players.push(inputPlayer);
  },
  
  get players() {
    return this._players;
  },
  
  // Games
  set games(inputGames) {
    this._games.push(inputGames);
  },
  
  get games() {
    return this._games;
  },
  
  // Add Players in the team
  addPlayers(fnameP, lnameP, ageP) {
    const player = {
      firstName: fnameP,
      lastName: lnameP,
      age: ageP
    }
    
 		this.players = player;
  },
  
  // Add Games in the historical
  addGames(opponentN, teamP, opponP) {
    const game = {
      opponent: opponentN,
      teamPoints: teamP,
      opponentPoints: opponP
    }
    
    this.games = game
  },
  
  calculePoints() {
    const game = this.games
    let total = 0
    let vitoria = 0
    let derrota = 0
    let empate = 0
    
  		for (let i = 0; i < game.length; i++) {
      if (game[i]['teamPoints'] > game[i]['opponentPoints']) {
        total += 3
        vitoria++
      } else if (game[i]['teamPoints'] === game[i]['opponentPoints']) {
        total += 1
        empate++
      }
        else {
          derrota++
        }
    }
    return ('\nEstatistica\n---------------\nVitorias: ' + vitoria + '\nEmpates: ' + empate + '\nDerrotas: ' + derrota + '\nTotal de Pontos: ' + total + '\n---------------') 
  }
}

team.addPlayers('Steph', 'Curry', 28)
team.addPlayers('Lisa', 'Leslie', 32)
team.addPlayers('Bugs', 'Bunny', 25)

team.addGames('Chubby', 3, 2)
team.addGames('Barca', 0, 1)
team.addGames('Real Madrid', 1, 1)
team.addGames('Corinthians', 3, 1)

console.log(team.players)
console.log(team.calculePoints())
