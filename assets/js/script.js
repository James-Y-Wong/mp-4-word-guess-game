var wordBlank = document.querySelector('.word-blanks');
var win = document.querySelector('.win');
var lose = document.querySelector('.lose');
var timerElement = document.querySelector('.timer-count');
var startButton = document.querySelector('.start-button');
var resetButton = document.querySelector('.reset-button');

var chosenWord = '';
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// empty arrays to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// 
var words = ['function', 'method', 'object', 'variable', 'query', 'selector', 'traverse'];