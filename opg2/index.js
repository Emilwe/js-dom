
document.getElementById("info").addEventListener("click", function () {
    var tall1 = Math.round(Math.random() * 10)
    var tall2 = Math.round(Math.random() * 10)
    document.getElementById("tall1").innerText = tall1;
    document.getElementById("tall2").innerText = tall2
    
    if (tall1 > tall2) {
        document.getElementById("result").innerHTML = (tall1 + " er større enn " + tall2)
    }
    else if(tall1 < tall2){
        document.getElementById("result").innerHTML = (tall1 + " er mindre enn " + tall2)
    }
    else{
        document.getElementById("result").innerHTML = (tall1 + " er like " + tall2)
    }
   
})

