// Design an algorithm to  gure out if someone has won in a game of tic-tac-toe.

var gameExampleO = [['o','x','o'],
				    ['x','o','o'],
				    ['o','x','x']];

var gameExampleX = [['o','x','o'],
				    ['x','x','o'],
				    ['o','x','x']];

var gameExampleNA = [['o','x','o'],
				     ['x','o','o'],
				     ['x','o','x']];

// Possible ways to win
// Vertical for i = 0, i = 1, i = 2
// Horizental for j = 0, j = 1, j = 2
// Diagonal Left for i,j = 0,0 , i,j = 1,1 , i,j = 2,2
// DiagonalRight for i,j = 0,2 , i,j = 1,1 , i,j = 2,0

var didIWin = (game, player = 'o') => {
  if (player === 'o') {
  	var oppPlayer = 'x';
  } else {
  	var oppPlayer = 'o';
  }
  var vertical   = false;
  var horizental = false;
  var leftDiag   = true;
  var rightDiag  = true;

  // Vertical
  var temp = true;
  var verticalCombo = [[],[],[]];
  for (var i = 0; i < 3; i++) {
  	for (var j = 0; j < 3; j++) {
  	  verticalCombo[i].push(game[j][i])
  	  if (game[j][i] === oppPlayer) {
  	  	temp = false;
  	  }
  	}
  	if (temp) {
  	  vertical = true;
  	}
  	temp = true;
  }

  // Horizontal
  var horizentalCombo = [[],[],[]];
  for (var i = 0; i < 3; i++) {
  	for (var j = 0; j < 3; j++) {
  	  horizentalCombo[i].push(game[i][j])
  	  if (game[i][j] === oppPlayer) {
  	  	temp = false;
  	  }
  	}
  	if (temp) {
  	  horizental = true;
  	}
  	temp = true;
  }

  // Diagonal Left
  var diagLeftCombo = [game[0][0], game[1][1], game[2][2]]
  if (game[0][0] === oppPlayer || game[1][1] === oppPlayer || game[2][2] === oppPlayer) {
  	leftDiag = false
  }

  // Diagonal Right
  var diagRightCombo = [game[0][2], game[1][1], game[2][0]]
  if (game[0][2] === oppPlayer || game[1][1] === oppPlayer || game[2][0] === oppPlayer) {
  	rightDiag = false
  }

  return (vertical || horizental || leftDiag || rightDiag);
}












