
var username = prompt('What is your name?');

console.log('User entered ' + username + 'as their user name.');

alert('Look at me ' + username + '! \n Do you like guessing games? I guess you do...');

var qu1 = prompt('Do I have a Minor in English? Please answer yes or no.');

console.log('user entered ' + qu1 + ' for qu1 variable.');

var qu2 = prompt('Am I a football player? Please answer yes or no.');

console.log('user entered ' + qu2 + ' for qu2 variable.');

var qu3 = prompt('Did I grow up in Auburn? Please answer yes or no.');

console.log('user entered ' + qu3 + ' for qu3 variable.');

var resQ1 = true;
var resQ2 = true;
var resQ3 = true;

qu1 = qu1.toUpperCase();
qu2 = qu2.toUpperCase();
qu3 = qu3.toUpperCase();


if ((qu1=='YES') || (qu1=='Y'))
   {resQ1=true;}
 else
  {resQ1=false;};
if ((qu2=='NO')||(qu2=='N'))
    {resQ2=true;}
  else
    {resQ2=false;};
if ((qu3=='YES')||(qu3=='Y'))
  {resQ3=true;}
  else
    {resQ3=false;};


console.log('logic results: ' + resQ1 + ', ' + resQ2 + ', ' + resQ3);

var textFeedbackq1 = 'Incorrect';
var textFeedbackq2 = 'Incorrect';
var textFeedbackq3 = 'Incorrect';

if (resQ1) {textFeedbackq1 = 'Correct!';}
if (resQ2) {textFeedbackq2 = 'Correct!';}
if (resQ3) {textFeedbackq3 = 'Correct!';}

alert('Thanks for playing my game, ' + username +
  '. The results are ... \n  Q1: ' + textFeedbackq1 + '\n Q2: '
  + textFeedbackq2 + '\n Q3: ' + textFeedbackq3 + ' \n \nPlease reload to play again.'
  );

//EOF
