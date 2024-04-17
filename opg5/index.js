

document.getElementById("btn").addEventListener("click", function () {
    let høyde = document.getElementById("hight").value;
    let bredde = document.getElementById("length").value;
    function skrivUtrektangel(bredde, høyde) {
        for(let i = 0; i < høyde; i++) {
            let rad = '';
            for(let j = 0; j < bredde; j++) {
                rad += '*';
            }
            console.log(rad);
            document.write(rad+"<br>");
        }
    }
    function lesInput() {
        if (isNaN(høyde) || isNaN(bredde)) {
            console.log("det er ikke et tall");
            return
    }
    
        skrivUtrektangel(bredde, høyde);
    }
    
    lesInput();

})
