let readlineSync = require ("readline-sync");
let kuler = require("kuler");
let userName = readlineSync.question("What is your name? ");
console.log(kuler(`\nHello ${userName}!, Welcome to Quizify`, "#92400e"))

/* Creating dataset */

const database = {
    data : [
      {
        question : `Let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,

        options : {
          a : "false false",
          b : "false true",
          c : "true false",
          d : "true true"
        },
        correctAnswer : "a"
      },

      {
        question : "Object.assign(targer, source) creates which type of copy?",
        options : {
          a : "Deep Copy",
          b : "Shallow Copy",
          c : "Nested Copy",
          d : "Creates a new reference"
        },
        correctAnswer : "b"
      },
      {
        question : "Is method chaining possible with forEach?",
        options : {
          a : "Yes",
          b : "No",
        },
        correctAnswer : "b"
      }
    ]
}

/* Leaderboard Dataset */

const leaderBoard = {
  data : [
    {
      name : "Saurabh",
      score : 3
    },
    {
      name : "Shubham",
      score : 2
    },
    {
      name : "Sahil",
      score : 1
    }
  ]
}



/* Main Logic */
let score = 0;
function playGame(userAnswer, correctAnswer){
  if(userAnswer === correctAnswer){
    score++;
    console.log(kuler("You are right!", "#16a34a" ));
  }
  else{
    console.log(kuler("You are wrong!", "#b91c1c"));
    console.log(kuler(`Correct answer is ${correctAnswer}`, "#2563eb"));
  }
}


function showQuestionAndOptions(database){
  for(let i=0; i<database.data.length; i++){
    console.log(`\nQ ${i+1} - ${database.data[i].question}\n`)

    for(let key in database.data[i].options){
      console.log(`${key} - ${database.data[i].options[key]}`)
    }

    let userAnswer = readlineSync.question("Enter your answer - (a/b/c/d) - ").toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}


function highScoring(leaderBoard){
  leaderBoard.data.push({name : userName, score : score});
  let sortedLeaderBoard = leaderBoard.data.sort((a,b) => b.score - a.score);
  console.log(kuler("\n Check your position in Leader Board😁😁", "#eab308"));
  for(let leader of sortedLeaderBoard){
    
     console.log(kuler(`${leader.name} - ${leader.score}`, "#c026d3")); 
  }
}

showQuestionAndOptions(database);
console.log(`\nYour score is - ${score}`);
highScoring(leaderBoard);
