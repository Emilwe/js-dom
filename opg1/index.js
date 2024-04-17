document.getElementById("ftoc").addEventListener("click", function() {
    var temp = document.getElementById("temp").value;
    var c = (temp - 32) * 5 / 9;
    document.write(c + " °C")
})

document.getElementById("ctof").addEventListener("click", function() {
    var temp = document.getElementById("temp").value;
    var f = temp * 9 / 5 + 32;
    document.write(f + " °F")
})