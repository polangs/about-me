'use strict';

var userName = prompt ('Hi! Welcome! I\'m Paula! What is your name?');
alert('Hi ' + userName + ' I\'m glad you are here! Let\'s play a guessing game so that you can learn more about me.');
console.log ('The user\'s name is ' + userName );


var questionOne = prompt ('Did I grew up in the Philippines? Sure is a warm country!').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes' ){
  alert ('You nailed it! ' + userName + ' I kinda miss the weather especially during winter season!');
  console.log ('Users answer is' + questionOne);

}else {
  alert('Sorry ' + userName + ' That is a NO noes!');
  console.log('Users answer is ' + questionOne);
}


////////////////////////////////////////////////////////////////////////////
// q2

var questionTwo = prompt ('Do I like cats?').toLowerCase();

if(questionTwo === 'n' || questionTwo === 'no'){
  alert ('You nailed it! ' + userName + ' Actually if I will get one, she will be a Serval!!!!');
  console.log ('Users answer is ' + questionTwo);

}else {
  alert('Sorry ' + userName + ' That is a NO noes!');
  console.log('User answer is' + questionTwo);
}



/////////////////////////////////////////////////////////////////////////
//q3

var questionThree = prompt ('Do I have a Princess or a Prince?').toLowerCase();

if(questionThree === 'p' || questionThree=== 'princess' ){
  alert ('You nailed it! ' + userName + ' She is a handful!');
  console.log ('Users answer is ' + questionThree);

}else {
  alert('Sorry ' + userName + ' That is a NO noes!');
  console.log('Users answer is' + questionThree);
}

/////////////////////////////////////////////////////////////////////////
//q4

var questionFour = prompt ('Do I love teal color?').toLowerCase();
if(questionFour === 'y' || questionFour=== 'yes' ){
  alert ('Way to go! ' + userName + ' I am addicted to teal!');
  console.log ('Users answer is '+ questionFour);

}else {
  alert('Sorry ' + userName + ' That is a NO noes!');
  console.log('Users answer is' + questionFour);
}

/////////////////////////////////////////////////////////////////////////
//q5

var questionFive = prompt ('Do I love to giggle??? Be careful with your answer!!!! I am watching you!').toLowerCase();
if(questionFive === 'y' || questionFive === 'yes' ){
  alert ('Bet you are too!!!! ' + userName + 'That\'s why I tend to be gassy!!! LOL');
  console.log ('Users answer is' + questionFive);

}else {
  alert('Sorry ' + userName + ' I giggle with everything!');
  console.log('Users answer is' + questionFive);
}

///////////////////////////////////////////////////////////////////////////
// // //q 6


// var attemptOne = 0;


// while (attemptOne < 2){

//   var attemptGuess= prompt ('Am I 23 or 33 years old?');
//   attemptOne++;
//   console.log (attemptGuess);

//   if (attemptGuess > 33){
//     alert (' Nice one! Hgher!');
//   } else if (attemptGuess >30 ){
//     alert('Higher!');
//   } else if (attemptGuess > 33){
//     alert('Oopsie, you got it wrong!');
//   }
// }

///////////////////////////////////////////////////////////////////////////
//q 7

var attemptTwo = 0;

while (attemptTwo > 3){

  var attemptAnswer = prompt ('How many years do we have to keep our medical records? Choices is from 1-10 years!');
  attemptTwo++;
  console.log (typeof attemptAnswer);

  // if ('If the guess is too high'){

  if (attemptAnswer > 5){
    alert ('You got it, you got it right!');
  } else if (attemptAnswer < 5){
    alert ('You got one more chance to guess!');
  } else if (attemptAnswer >=5 ){
    alert ('Peace Out! ' + userName);
  }
}


