var db = firebase.database();


init_db() 

function init_db() 
{
    db.ref('judger').set(
    {
        start: false                                                                   
        
    });
}