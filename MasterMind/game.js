const gameState = {
    width: 800,
    height: 900,
    orange: 0xfc8803
};



const orange = 0xfc8803;
const green = 0x79f600;
const blue = 0x00338f;
const yellow = 0xfff300;
const red = 0xff0000;
const purple = 0xb800ff;
const black = 0x000000;
const white = 0xffffff

let guess = [];
let numberOfGuesses = 0;
let colors = [orange, green, blue, yellow, red, purple];
let xVal = 100;
let yVal = 50;
let smallXVal = 625;
let smallYVal = 50;
let colorsPicked = [];
let correct = 0;
let colorsChecked = [0, 1, 2, 3];
const screenCenterX = gameState.width / 2;
const screenCenterY = gameState.height / 2;

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 900,
    backgroundColor: "#3d3f42",
    scene: [ StartScene, GameScene, Rules, ]
};

const game = new Phaser.Game(config);