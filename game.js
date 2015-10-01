//game.js
//Written by Aaron Filson, aaronfilson@gmail.com
//Day 3 lab assignment for B34 Bootcamp at Code Fellows Seattle
//September 30th, 2015

//Declaring variables


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

//Question 1
function qu1(){
  qu1 = prompt('Do I have a Minor in English? Please answer yes or no.');
console.log('User entered ' + qu1 + ' for qu1 variable.');
qu1 = qu1.toUpperCase();

if ((qu1=='YES') || (qu1=='Y')) {
  resQ1=true;
  alert('Yes, that is correct ' + username + ', I do have a Minor in English, from UPS.');
  countingRightAnswers++;
} else {
  resQ1=false;
  alert('No, that is not correct ' + username + ', I do have a Minor in English, from UPS.');
}
}

//Question 2
function qu2(){
  qu2 = prompt('Am I a football player? Please answer yes or no.');
console.log('User entered ' + qu2 + ' for qu2 variable.');
qu2 = qu2.toUpperCase();

if ((qu2=='NO')||(qu2=='N')) {
  resQ2=true;
  alert('Yes, that is correct ' + username +
  ', I do not play football. But I do cheer for the Hawks. GO SEAHAWKS!!');
  countingRightAnswers++;
} else {
  resQ2=false;
  alert('No, that is not correct ' + username +
  ', I do not play football. But I do cheer for the Hawks. GO SEAHAWKS!!');
}

}

function qu3 (){
  //Question 3
qu3 = prompt('Did I grow up in Auburn? Please answer yes or no.');
console.log('User entered ' + qu3 + ' for qu3 variable.');
qu3 = qu3.toUpperCase();

if ((qu3=='YES')||(qu3=='Y')) {
  resQ3=true;
  alert('Yes, ' + username + ', I grew up in Auburn and graduated from AHS in 1997.');
  countingRightAnswers++;
} else {
  resQ3=false;
  alert('No, that is not correct ' + username +
  ', I grew up in Auburn and graduated from AHS in 1997.');
}
}

//end of variables declaration
//Get user's name via prompt and store in username variable.
username = prompt('What is your name?');
console.log('User entered ' + username + ' as their user name.');
alert('Nice to meet you ' + username + '! \n Do you like guessing games? I guess you do...');


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
alert('Thanks for playing my game, ' + username +
  '. The results are ... \n\nQ1: ' + textFeedbackq1 + '\nQ2: '
  + textFeedbackq2 + '\nQ3: ' + textFeedbackq3 +
  '\n\nYou got ' + countingRightAnswers + ' of 3 answers right! ' +
  '\n\nPlease reload to play again.');
//EOF
