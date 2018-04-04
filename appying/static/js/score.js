var db = firebase.database();
var btn = document.getElementById('btn');

var name = document.getElementById('player').value;
var score ;

var ref = firebase.database().ref().child('player/'+name+'/score');



//ref.on("player/"+name+"/score".value, function(snapshot) 
ref.on('value', function(snapshot) 
{
    console.log(snapshot.val());
    score=snapshot.val();
    document.getElementById('Score').innerHTML = score
});


document.getElementById('Username').innerHTML = name

console.log(name)
console.log(score)
