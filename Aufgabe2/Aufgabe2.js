//Aufgabe: 2 (neu)
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 28.10.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var UNO;
(function (UNO) {
    //Arrays
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let other = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }];
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[i], value: values[a] };
                other.push(card);
            }
        }
    }
    console.log(other);
    let displayhand = [];
    function Anzahl() {
        var kartenanzahl = prompt("Mit wie vielen Karten willst du spielen?");
        let n = parseInt(kartenanzahl);
        for (let random = n; random > 0; random--) {
            let r = Math.floor(Math.random() * (other.length - 1));
            displayhand.push(other[r]);
            other.splice(r, 1);
        }
        for (let d = 0; d < displayhand.length; d++) {
            let div = document.createElement("div");
            document.getElementById("displayhand").appendChild(div);
            div.innerHTML = displayhand[d].value;
            div.classList.add(displayhand[d].color);
        }
    }
    document.addEventListener("DOMContentLoaded", Anzahl);
})(UNO || (UNO = {}));
//# sourceMappingURL=Aufgabe2.js.map