var db = firebase.database();
var btn = document.getElementById('btn');

function savePlayer() {
    var userName = document.getElementById('player').value;

    if(userName != "") 
    {
        db.ref('player/' + userName).set({
            score: 0
        });
        window.location.href = "http://localhost:8000/wait" + userName;
        //window.location.href = "http://localhost:8000/quiz" + userName;
    } else {
        window.location.href = "http://localhost:8000/player"
    }
}