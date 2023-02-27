const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");
const scoreCont = document.getElementById("scoreContainer");
const end = document.getElementById("end");


let questions = [
    {
        question: "What was the name of Lucifer's son?",
        optionA: "Michael",
        optionB: "Jack",
        optionC: "Sam",
        optionD: "Azazel",
        correct: "B"
    },
    {
        question: "What was the name of God's sister?",
        optionA: "Eve",
        optionB: "Rowena",
        optionC: "Amara",
        optionD: "Mary",
        correct: "C"
    },
    {
        question: "Which angel takes over Dean's body??",
        optionA: "Michael",
        optionB: "Gabriel",
        optionC: "Castiel",
        optionD: "Gadreel",
        correct: "A"
    },
    {
        question: "How many trials had to be completed in order to lock the Gates of Hell for good?",
        optionA: "Six",
        optionB: "Four",
        optionC: "Ten",
        optionD: "Three",
        correct: "D"
    },
    {
        question: "Breaking the 66 seals would allow what event to happen?",
        optionA: "Demons to roam Earth",
        optionB: "Lucifer to walk the Earth",
        optionC: "Angels to descend from heaven",
        optionD: "Sam and Dean's parents to come back to life",
        correct: "B"
    },
    {
        question: "What nickname did Crowley give Sam Winchester ?",
        optionA: "Squirrel",
        optionB: "Hamster",
        optionC: "Moose",
        optionD: "Spongebob",
        correct: "C"
    },
    {
        question: "What was the name of the 'vessel' of Castiel?",
        optionA: "James Ness",
        optionB: "Jack Kline",
        optionC: "John Winchester",
        optionD: "Jimmy Novack",
        correct: "D"
    },
    {
        question: "What relation was Crowley to Rowena?",
        optionA: "Husband",
        optionB: "Son",
        optionC: "Brother",
        optionD: "Cousin",
        correct: "B"
    },
    {
        question: "Sam and Dean had a half-brother, what was his name?",
        optionA: "Michael",
        optionB: "Jack",
        optionC: "Adam",
        optionD: "Sean",
        correct: "C"
    },
    {
        question: "Which character was the bearer of the Mark of Cain?",
        optionA: "Bobby",
        optionB: "Dean",
        optionC: "Sam",
        optionD: "Adam",
        correct: "B"
    },
    {
    question: "Which angel was given the responsibility to record the word of God?",
    optionA: "Gabriel",
    optionB: "Metatron",
    optionC: "Ezekial",
    optionD: "Castiel",
    correct: "B"
},
{
    question: "Who was the King Of Hell?",
    optionA: "Lucifer",
    optionB: "Azazel",
    optionC: "Ezekial",
    optionD: "Crowley",
    correct: "D"
},
{
    question: "What is used to repel ghosts?",
    optionA: "Holy water",
    optionB: "Pepper",
    optionC: "Salt",
    optionD: "Garlic",
    correct: "C"
},
{
    question: "Who controls the Hell Hounds?",
    optionA: "Crowley",
    optionB: "Rowena",
    optionC: "Dean",
    optionD: "Lucifer",
    correct: "A"
},
{
    question: "What colour eyes did Azazel have?",
    optionA: "White",
    optionB: "Red",
    optionC: "Black",
    optionD: "Yellow",
    correct: "D"
},
{
    question: "If an angel wanted to possess a 'vessel', would they would need consent?",
    optionA: "Depends on their age",
    optionB: "Yes",
    optionC: "Depends on their religion",
    optionD: "No",
    correct: "B"
},
]

function shuffle(questions) {
    questions.sort(()=> Math.random() -0.5);
}
shuffle(questions);

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
start.style.display = "none";
renderQuestion(); 
quiz.style.display = "block"; 
}


const lastQuestion = questions.length - 1;

let runningQuestion = 0;
function renderQuestion(){

    let q = questions[runningQuestion];
    question.innerHTML = "<h2>"+ q.question +"</h2>";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
}



function scoreRender(){
    const score1 = Math.round(100*score/questions.length);
    alert(`You have scored ${score1}% `)
}
// check answer
let score = 0;
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        score++ 
        alert("Correct")
    }else{
        alert("Incorrect")
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++
        renderQuestion();
        shuffle();
    }else{
        scoreRender();
        endQuiz();
    }
}

document.querySelector("#end").addEventListener("click", function(){
    window.location.reload();
    return false;
});
// end.addEventListener("click",endQuiz);
function endQuiz(){
    end.style.display = "block";
    quiz.style.display = "none"; 
    }








