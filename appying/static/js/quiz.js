/*
var num1=Math.floor(Math.random() * 4);
var num2=Math.floor(Math.random() * 4);
var num3=Math.floor(Math.random() * 4);
var num4=Math.floor(Math.random() * 4);

var sign1="+"
var sign2="-"
var sign3="*"

var que=num1+sign1+num2+sign2+num3;
console.log(que);*/
var db = firebase.database();
var btn = document.getElementById('btn');


var quiz = ["4 x 8 + (5 x 7 x 2)" ,
            "(25 + 256) x 2" ,
            "12 x 12 + (12 + 12)" ,
            "198 - 21 + 52 + 158",
            "(45 x 2) + (152 - 45)",
            "(78 ÷ 2) x 3 + 15",
            "(788 ÷ 4) + (88 x 2)"
           ];

var arAnswer = [102 , 562, 168, 387,197,132,373];
var rdQuiz; //random ข้อ
var answer; //คำตอบของข้อที่แรนดอมมา

var i = Math.floor(Math.random() * 4);
var item = 1; //ข้อที่..
var prev = [];
var score = 0;
var name = document.getElementById('player').value;
var index;

console.log(name);

//document.getElementById('quiz').innerHTML = quiz[i];
prev.push(i);

randomQuiz()

function randomQuiz()
{
    rdQuiz= Math.floor(Math.random() * quiz.length);

    document.getElementById('question').innerHTML = "Q" + item;
    document.getElementById('quiz').innerHTML = quiz[rdQuiz];
    document.getElementById('AnswerFill').value="";

    answer=arAnswer[rdQuiz];

    indexQuiz = quiz.indexOf(quiz[rdQuiz]);
    indexAns = arAnswer.indexOf(arAnswer[rdQuiz]);

    if(i != -1)
     {
        quiz.splice(indexQuiz, 1);
        arAnswer.splice(indexAns, 1);
    }
    
    console.log("answer "+answer)
}

function checkAnswer() 
{
    var check = 0;
    var ansfill = document.getElementById('AnswerFill').value;

    if(item <= 2) 
    {
        if(ansfill == answer)
        {
            console.log("Correct");
            item++;
            document.getElementById('question').innerHTML = "Q" + item;
            score += 20;

            firebase.database().ref('player/' + name).set({
                score : score
            })
    
            i = Math.floor(Math.random() * 4)
    
            while(check != 0)
             {
                prev.forEach(function(e) 
                {
                    if(e == i) check++;
                });
            }

            randomQuiz();
           // document.getElementById('quiz').innerHTML = quiz[i];
        } 
        
        else 
        {
            console.log("Wrong");
        }
    } 
    
    else 
    {
        window.location.href = "http://localhost:8000/score" + name;
     
    }
    
}

firebase.database().ref().child('judger/start').on('value' , snap => {
    if( snap.val() == true ) {
        document.getElementById('AnswerFill').removeAttribute('disabled');

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes + " " : minutes + " ";
                seconds = seconds < 10 ? " 0" + seconds  : " " + seconds;
        
                display.textContent = minutes + ":" + seconds;
        
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
        
        var fiveMinutes = 60 * 1.5,
        display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    } 
    
    else 
    {
        //document.getElementById('AnswerFill').classList.add('hide');
    }
});