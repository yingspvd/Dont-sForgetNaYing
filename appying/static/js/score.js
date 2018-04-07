var db = firebase.database();
var btn = document.getElementById('btn');

var name = document.getElementById('player').value;
var whoWin; //ชื่อคนชนะ
var scoreWin; //คะแนนสูงสุด
var myScore; //คะแนนที่ได้
var score ;

var ref = firebase.database().ref('player/'+name);
ref.once('value').then(function(snapshot)
{
    myScore=snapshot.child('score').val();
    console.log("myScore"+myScore)

    document.getElementById('myScore').innerHTML = "Your Score : "+myScore
})
var fb = firebase.database().ref()

//ShowScore
var scoreBoard = firebase.database().ref('player').once('value').then(function(snapshot) {
var player = snapshot.val()
    data = []

    Object.keys(player).map(a => {
        data.push({
            name: a,
            score: player[a].score
        })
    })

    data = data.sort((a,b) => a.score - b.score).reverse()

    whoWin=data[0].name
    scoreWin=data[0].score

    console.log(data[0].name)
    console.log(data[0].score)

    document.getElementById('Username').innerHTML = whoWin
    document.getElementById('Score').innerHTML = scoreWin
})

function goPlayAgain()
{
    window.location.href = "http://localhost:8000/" ;
    fb.child('player').remove();

    var db = firebase.database();
    function start() 
    {
        db.ref('judger').set(
        {
            start: true
        });
    }
}




