var quiz = ["1 + 1" , "2 + 2" , "3 + 3" , "4 + 4"];
var answer = [ 2 , 4 , 6 , 8];
var i = Math.floor(Math.random() * 4);
var k = 1;
var prev = [];
var score = 0;
var name = document.getElementById('player').value;

console.log(name);

document.getElementById('question').innerHTML = "Q" + k;
document.getElementById('quiz').innerHTML = quiz[i];
prev.push(i);

function checkAnswer() {
    var check = 0;
    var ans = document.getElementById('AnswerFill').value;

    if(k <= 4) {
        if(ans == answer[i]){
            console.log("Correct");
            k++;
            document.getElementById('question').innerHTML = "Q" + k;
            score += 20;

            firebase.database().ref('player/' + name).set({
                score : score
            })
    
            i = Math.floor(Math.random() * 4)
    
            while(check != 0) {
                prev.forEach(function(e) {
                    if(e == i) check++;
                });
            }
            document.getElementById('quiz').innerHTML = quiz[i];
        } else {
            console.log("Wrong");
        }
    } else {
        
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
    } else {
        //document.getElementById('AnswerFill').classList.add('hide');
    }
});