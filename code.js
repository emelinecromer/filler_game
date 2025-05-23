// screen setup
// create 8x8 grid of squares with 5 random colors
var colors = [[255,119,179], [255,166,98], [255,251,113], [136,255,57], [71,194,255]];
var singleplayer = true;

for (var x = 0; x < 8; x++) {
  for (var y = 0; y < 8; y++) {
    textArea("s"+x+y, "");
    setPosition("s"+x+y, 20+35*x, 85+35*y, 35, 35);
    setProperty("s"+x+y, "readonly", true);
    var c = colors[randomNumber(0,4)];
    setProperty("s"+x+y, "background-color", rgb(c[0], c[1], c[2]));
  }
}

while (getProperty("s07", "background-color") == getProperty("s70", "background-color")) {
  var c = colors[randomNumber(0,4)];
    setProperty("s70", "background-color", rgb(c[0], c[1], c[2]));
}

// create five buttons on each side of the screen for two players
// player 1 buttons
for (var i = 0; i < 5; i++) {
  button("p1b"+i, "");
  setPosition("p1b"+i, 20+59.5*i, 380, 40, 40);
  setProperty("p1b"+i, "background-color", rgb(colors[i][0], colors[i][1], colors[i][2]));
  setProperty("p1b"+i, "border-width", 1);
  setProperty("p1b"+i, "border-color", rgb(colors[i][0]/1.5, colors[i][1]/1.5, colors[i][2]/1.5));
}
// player 2 buttons
for (var i = 0; i < 5; i++) {
  button("p2b"+i, "");
  setPosition("p2b"+i, 20+59.5*i, 30, 40, 40);
  setProperty("p2b"+i, "background-color", rgb(colors[i][0], colors[i][1], colors[i][2]));
  setProperty("p2b"+i, "border-width", 1);
  setProperty("p2b"+i, "border-color", rgb(colors[i][0]/1.5, colors[i][1]/1.5, colors[i][2]/1.5));
}


// go to choice screen and hide player 2 buttons if they chose single player
setScreen("choiceScreen");

onEvent("vsComputerButton", "click", function() {
  setScreen("mainScreen");
  for (var i = 0; i < 5; i++) {
    setProperty("p2b"+i, "hidden", true);
  }
});

onEvent("vsHumanButton", "click", function() {
  setScreen("mainScreen");
  singleplayer = false;
});


// gameplay
var p1Blocks = ["s07"];
var p2Blocks = ["s70"];
var turn = "p1";
var p1Color = getProperty("s07", "background-color");
var p2Color = getProperty("s70", "background-color");

// set up the starting areas
p1Blocks = takeSquares(p1Blocks, p2Blocks, p1Color);
p2Blocks = takeSquares(p2Blocks, p1Blocks, p2Color);
updateScreen();

// buttons change the squares' colors
onEvent("p1b0", "click", function() {
  if (turn == "p1") {
    for (var i = 0; i < p1Blocks.length; i++) {
      setProperty(p1Blocks[i], "background-color", rgb(colors[0][0], colors[0][1], colors[0][2]));
    }
    p1Color = getProperty("s07", "background-color");
    p1Blocks = takeSquares(p1Blocks, p2Blocks, p1Color);
    
    if (!singleplayer) {
      setProperty("p2b0", "hidden", true);
      setProperty("p2b1", "hidden", false);
      setProperty("p2b2", "hidden", false);
      setProperty("p2b3", "hidden", false);
      setProperty("p2b4", "hidden", false);
    }
    
    turn = "p2";
    
    updateScreen();
  }
});
onEvent("p1b1", "click", function() {
  if (turn == "p1") {
    for (var i = 0; i < p1Blocks.length; i++) {
      setProperty(p1Blocks[i], "background-color", rgb(colors[1][0], colors[1][1], colors[1][2]));
    }
    p1Color = getProperty("s07", "background-color");
    p1Blocks = takeSquares(p1Blocks, p2Blocks, p1Color);
    
    if (!singleplayer) {
      setProperty("p2b0", "hidden", false);
      setProperty("p2b1", "hidden", true);
      setProperty("p2b2", "hidden", false);
      setProperty("p2b3", "hidden", false);
      setProperty("p2b4", "hidden", false);
    }
    
    turn = "p2";
    
    updateScreen();
  }
});
onEvent("p1b2", "click", function() {
  if (turn == "p1") {
    for (var i = 0; i < p1Blocks.length; i++) {
      setProperty(p1Blocks[i], "background-color", rgb(colors[2][0], colors[2][1], colors[2][2]));
    }
    p1Color = getProperty("s07", "background-color");
    p1Blocks = takeSquares(p1Blocks, p2Blocks, p1Color);
    
    if (!singleplayer) {
      setProperty("p2b0", "hidden", false);
      setProperty("p2b1", "hidden", false);
      setProperty("p2b2", "hidden", true);
      setProperty("p2b3", "hidden", false);
      setProperty("p2b4", "hidden", false);
    }
    
    turn = "p2";
    
    updateScreen();
  }
});
onEvent("p1b3", "click", function() {
  if (turn == "p1") {
    for (var i = 0; i < p1Blocks.length; i++) {
      setProperty(p1Blocks[i], "background-color", rgb(colors[3][0], colors[3][1], colors[3][2]));
    }
    p1Color = getProperty("s07", "background-color");
    p1Blocks = takeSquares(p1Blocks, p2Blocks, p1Color);
    
    if (!singleplayer) {
      setProperty("p2b0", "hidden", false);
      setProperty("p2b1", "hidden", false);
      setProperty("p2b2", "hidden", false);
      setProperty("p2b3", "hidden", true);
      setProperty("p2b4", "hidden", false);
    }
    
    turn = "p2";
    
    updateScreen();
  }
});
onEvent("p1b4", "click", function() {
  if (turn == "p1") {
    for (var i = 0; i < p1Blocks.length; i++) {
      setProperty(p1Blocks[i], "background-color", rgb(colors[4][0], colors[4][1], colors[4][2]));
    }
    p1Color = getProperty("s07", "background-color");
    p1Blocks = takeSquares(p1Blocks, p2Blocks, p1Color);
    
    if (!singleplayer) {
      setProperty("p2b0", "hidden", false);
      setProperty("p2b1", "hidden", false);
      setProperty("p2b2", "hidden", false);
      setProperty("p2b3", "hidden", false);
      setProperty("p2b4", "hidden", true);
    }
    
    turn = "p2";
    
    updateScreen();
  }
});

onEvent("p2b0", "click", function() {
  if (turn == "p2") {
    for (var i = 0; i < p2Blocks.length; i++) {
      setProperty(p2Blocks[i], "background-color", rgb(colors[0][0], colors[0][1], colors[0][2]));
    }
    p2Color = getProperty("s70", "background-color");
    p2Blocks = takeSquares(p2Blocks, p1Blocks, p2Color);
    
    setProperty("p1b0", "hidden", true);
    setProperty("p1b1", "hidden", false);
    setProperty("p1b2", "hidden", false);
    setProperty("p1b3", "hidden", false);
    setProperty("p1b4", "hidden", false);
    
    updateScreen();
    
    turn = "p1";
  }
});
onEvent("p2b1", "click", function() {
  if (turn == "p2") {
    for (var i = 0; i < p2Blocks.length; i++) {
      setProperty(p2Blocks[i], "background-color", rgb(colors[1][0], colors[1][1], colors[1][2]));
    }
    p2Color = getProperty("s70", "background-color");
    p2Blocks = takeSquares(p2Blocks, p1Blocks, p2Color);
    
    setProperty("p1b0", "hidden", false);
    setProperty("p1b1", "hidden", true);
    setProperty("p1b2", "hidden", false);
    setProperty("p1b3", "hidden", false);
    setProperty("p1b4", "hidden", false);
    
    updateScreen();
    
    turn = "p1";
  }
});
onEvent("p2b2", "click", function() {
  if (turn == "p2") {
    for (var i = 0; i < p2Blocks.length; i++) {
      setProperty(p2Blocks[i], "background-color", rgb(colors[2][0], colors[2][1], colors[2][2]));
    }
    p2Color = getProperty("s70", "background-color");
    p2Blocks = takeSquares(p2Blocks, p1Blocks, p2Color);
    
    setProperty("p1b0", "hidden", false);
    setProperty("p1b1", "hidden", false);
    setProperty("p1b2", "hidden", true);
    setProperty("p1b3", "hidden", false);
    setProperty("p1b4", "hidden", false);
    
    updateScreen();
    
    turn = "p1";
  }
});
onEvent("p2b3", "click", function() {
  if (turn == "p2") {
    for (var i = 0; i < p2Blocks.length; i++) {
      setProperty(p2Blocks[i], "background-color", rgb(colors[3][0], colors[3][1], colors[3][2]));
    }
    p2Color = getProperty("s70", "background-color");
    p2Blocks = takeSquares(p2Blocks, p1Blocks, p2Color);
    
    setProperty("p1b0", "hidden", false);
    setProperty("p1b1", "hidden", false);
    setProperty("p1b2", "hidden", false);
    setProperty("p1b3", "hidden", true);
    setProperty("p1b4", "hidden", false);
    
    updateScreen();
    
    turn = "p1";
  }
});
onEvent("p2b4", "click", function() {
  if (turn == "p2") {
    for (var i = 0; i < p2Blocks.length; i++) {
      setProperty(p2Blocks[i], "background-color", rgb(colors[4][0], colors[4][1], colors[4][2]));
    }
    p2Color = getProperty("s70", "background-color");
    p2Blocks = takeSquares(p2Blocks, p1Blocks, p2Color);
    
    setProperty("p1b0", "hidden", false);
    setProperty("p1b1", "hidden", false);
    setProperty("p1b2", "hidden", false);
    setProperty("p1b3", "hidden", false);
    setProperty("p1b4", "hidden", true);
    
    updateScreen();
    
    turn = "p1";
  }
});

// goes through all the blocks that have the same color as the color parameter and takes the chunks that are
// bordering using getSquaresChunk, then returns newplayerBlocks which includes the current plus new blocks
function takeSquares(playerBlocks, enemyBlocks, color) {
  var newPlayerBlocks = playerBlocks.slice();
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (getProperty("s"+i+j, "background-color") == color) {
        var up = "s"+i+(j - 1);
        var down = "s"+i+(j + 1);
        var left = "s"+(i - 1)+j;
        var right = "s"+(i + 1)+j;
        
        if (newPlayerBlocks.indexOf("s"+i+j) == -1 && enemyBlocks.indexOf("s"+i+j) == -1) {
          if (newPlayerBlocks.indexOf(up)!= -1
              || newPlayerBlocks.indexOf(down)!= -1
              || newPlayerBlocks.indexOf(left)!= -1
              || newPlayerBlocks.indexOf(right)!= -1) {
            var x = newPlayerBlocks.slice();
            newPlayerBlocks = x.concat(getSquaresChunk("s"+i+j, x));
          }
        }
      }
    }
  }
  return newPlayerBlocks;
}

// given a square and list, gather a chunk of squares that are the same color and are connected to the given square.
// the list given is to make sure no blocks that the player already has are added to the chunk of squares
function getSquaresChunk(square, list) {
  var chunk = [];
  var toCheck = [square];
  var checked = list.slice();
  
  var color = getProperty(square, "background-color");
  
  while (toCheck.length > 0) {
    var newSquare = toCheck.pop();
    
    if (checked.indexOf(newSquare) != -1) {
      continue;
    }
    
    appendItem(checked, newSquare);

    if (!(newSquare[1] >= 0 && newSquare[1] <= 7 && newSquare[2] >= 0 && newSquare[2] <= 7) || newSquare.indexOf("-") != -1) {
      continue;
    }
    if (getProperty(newSquare, "background-color") != color) {
      continue;
    }
    
    var i = parseInt(newSquare[1]);
    var j = parseInt(newSquare[2]);
    
    var up = "s"+i+(j - 1);
    var down = "s"+i+(j + 1);
    var left = "s"+(i - 1)+j;
    var right = "s"+(i + 1)+j;
    
    appendItem(chunk, newSquare);

    appendItem(toCheck, up);
    appendItem(toCheck, down);
    appendItem(toCheck, left);
    appendItem(toCheck, right);

  }
  return chunk;
}

// run the computer's turn if in singleplayer, then update the block amount labels
// if all the blocks on the screen have been taken, go to the end screen and announce the winner
function updateScreen() {
  if (singleplayer && turn == "p2") {
    setProperty("p2b0", "hidden", true);
    setProperty("p2b1", "hidden", true);
    setProperty("p2b2", "hidden", true);
    setProperty("p2b3", "hidden", true);
    setProperty("p2b4", "hidden", true);
    
    // computer playing here
    var c = randomNumber(0, 4);
    var x = getProperty("s70", "background-color");
    
    for (var i = 0; i < p2Blocks.length; i++) {
      setProperty(p2Blocks[i], "background-color", rgb(colors[c][0], colors[c][1], colors[c][2]));
    }
    p2Color = getProperty("s70", "background-color");
    
    while (p1Color == p2Color || p2Color == x) {
      c = randomNumber(0, 4);
      for (var j = 0; j < p2Blocks.length; j++) {
        setProperty(p2Blocks[j], "background-color", rgb(colors[c][0], colors[c][1], colors[c][2]));
      }
      p2Color = getProperty("s70", "background-color");
    }
    
    p2Blocks = takeSquares(p2Blocks, p1Blocks, p2Color);
    
    turn = "p1";

    setProperty("p1b0", "hidden", false);
    setProperty("p1b1", "hidden", false);
    setProperty("p1b2", "hidden", false);
    setProperty("p1b3", "hidden", false);
    setProperty("p1b4", "hidden", false);
    
    setProperty("p1b"+c, "hidden", true);
    
  }
  
  setText("p1ScoreLabel", "Blocks: "+p1Blocks.length);
  setText("p2ScoreLabel", "Blocks: "+p2Blocks.length);
  
  if (p1Blocks.length + p2Blocks.length == 64) {
    setScreen("endScreen");
    if (p1Blocks.length > p2Blocks.length) {
      setText("winText", "\n\n\nPlayer 1 won!!!");
    } else if (p2Blocks.length > p1Blocks.length) {
      setText("winText", "\n\n\nPlayer 2 won!!!");
    } else {
      setText("winText", "\n\n\nTie!!!");
    }
  }
}
