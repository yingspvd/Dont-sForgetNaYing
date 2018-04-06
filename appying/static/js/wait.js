var userName = document.getElementById('player').value;

firebase.database().ref().child('judger/start').on('value' , snap => 
{
    if( snap.val() == true ) 
    {
        window.location.href = "http://localhost:8000/quiz" + userName;
    }
})