//game.js
//Written by Aaron Filson, aaronfilson@gmail.com
//Day 5 lab assignment for B34 Bootcamp at Code Fellows Seattle
//October 2nd, 2015

//Declaring variables

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var intro = document.getElementById('intro');
var summary = document.getElementById('summary');
var catPic1 = document.getElementById('catPic1');
var catPic2 = document.getElementById('catPic2');
var catPic3 = document.getElementById('catPic3');

var username;

var qu1;
var qu2;
var qu3;  

var resQ1 = true;
var resQ2 = true;
var resQ3 = true;

var textFeedbackq1 = 'Incorrect';
var textFeedbackq2 = 'Incorrect';
var textFeedbackq3 = 'Incorrect';

var countingRightAnswers = 0;

var promptText = new Array('Do I have a Minor in English? Please answer yes or no.', 'Am I a football player? Please answer yes or no.', 'Did I grow up in Auburn? Please answer yes or no.' );
var answerString = new Array('YES', 'Y', 'NO', 'N');
var linkString = ' <img src = "img/cat_morgan.jpg" alt = "happy cat" title = "Good Job!" />'

//Question 1
function qu1(){
  qu1 = prompt(promptText[0]);
  console.log('User entered ' + qu1 + ' for qu1 variable.');
  qu1 = qu1.toUpperCase();

  if ((qu1 == answerString[0]) || (qu1 == answerString[1])) {
    resQ1 = true;
    one.innerHTML = 'Yes, that is correct ' + username + ', I do have a Minor in English, from UPS.';
    one.className = 'correct';
    catPic1.innerHTML = linkString;
    countingRightAnswers++;
  } else {
    resQ1 = false;
    one.innerHTML = 'No, that is not correct ' + username + ', I do have a Minor in English, from UPS.';
    one.className = 'incorrect';
  }
}

//Question 2
function qu2(){
  qu2 = prompt(promptText[1]);
  console.log('User entered ' + qu2 + ' for qu2 variable.');
  qu2 = qu2.toUpperCase();

  if ((qu2 == answerString[2])||(qu2 == answerString[3])) {
    resQ2 = true;
    two.innerHTML = 'Yes, that is correct ' + username +
    ', I do not play football. But I do cheer for the Hawks. GO SEAHAWKS!!';
    two.className = 'correct';
    catPic2.innerHTML = linkString;
    countingRightAnswers++;
  } else {
    resQ2 = false;
    two.innerHTML = 'No, that is not correct ' + username +
    ', I do not play football. But I do cheer for the Hawks. GO SEAHAWKS!!';
    two.className = 'incorrect';
  }

}
  //Question 3
function qu3 (){
  qu3 = prompt(promptText[2]);
  console.log('User entered ' + qu3 + ' for qu3 variable.');
  qu3 = qu3.toUpperCase();

  if (qu3 == answerString[0] || qu3 == answerString[1]) {
    resQ3 = true;
    three.innerHTML = 'Yes, ' + username + ', I grew up in Auburn and graduated from AHS in 1997.';
    three.className = 'correct';
    catPic3.innerHTML = linkString;
    countingRightAnswers++;
  } else {
    resQ3 = false;
    three.innerHTML = 'No, that is not correct ' + username +
    ', I grew up in Auburn and graduated from AHS in 1997.';
    three.className = 'incorrect';
  }
}

//end of variables declaration
//Get user's name via prompt and store in username variable.
username = prompt('What is your name?');
console.log('User entered ' + username + ' as their user name.');
intro.innerHTML ='Nice to meet you ' + username + '! \n Do you like guessing games? I guess you do...';

//Calling the qu1 functions
qu1();
qu2();
qu3();

//Logic section, resQ1 etc are initialized to Incorrect.
console.log('logic results: ' + resQ1 + ', ' + resQ2 + ', ' + resQ3);

if (resQ1) {
  textFeedbackq1 = 'Correct!';
}
if (resQ2) {
  textFeedbackq2 = 'Correct!';
}
if (resQ3) {
  textFeedbackq3 = 'Correct!';
}

//Summary display for user
summary.innerHTML = 'Thanks for playing my game, ' + username +
  '. The results are ... \n\nQ1: ' + textFeedbackq1 + '\nQ2: '
  + textFeedbackq2 + '\nQ3: ' + textFeedbackq3 +
  '\n\nYou got ' + countingRightAnswers + ' of 3 answers right! ' +
  '\n\nPlease reload to play again.';
//EOF
