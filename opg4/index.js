document.getElementById("btnred").addEventListener("click", function() {
   var farge = document.getElementById("redback");
   farge.style.backgroundColor = "red";
})

document.getElementById("btnblue").addEventListener("click", function() {
    var farge = document.getElementById("blueback");
    farge.style.backgroundColor = "blue";
 })

 document.getElementById("rng").addEventListener("click", function() {
    var farge = document.getElementById("randomback");
    farge.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
 })