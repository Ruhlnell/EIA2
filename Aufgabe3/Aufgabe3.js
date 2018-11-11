//Aufgabe: 3 (neu)
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 11.11.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var UNO;
(function (UNO) {
    document.addEventListener("DOMContentLoaded", Anzahl);
    document.addEventListener("keypress", pressKeyboard);
    //Arrays
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let cards = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }];
    let place = [];
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[i], value: values[a] };
                cards.push(card);
            }
        }
    }
    console.log(cards);
    let displayhand = [];
    //Popup
    function Anzahl() {
        var kartenanzahl = prompt("Mit wie vielen Karten willst du spielen?");
        let n = parseInt(kartenanzahl);
        randomCard(n);
        handcards();
        let button = document.getElementById("button");
        button.addEventListener("click", sort);
        let pull = document.getElementById("deck");
        pull.addEventListener("click", add);
    }
    //random card
    function randomCard(n) {
        for (let random = n; random > 0; random--) {
            let r = Math.floor(Math.random() * (cards.length - 1));
            displayhand.push(cards[r]);
            cards.splice(r, 1);
        }
    }
    //add
    function add() {
        randomCard(1);
        handcards();
    }
    function pressKeyboard(_event) {
        if (_event.keyCode == 32) {
            add();
        }
    }
    function handcards() {
        document.getElementById("displayhand").innerHTML = "";
        for (let d = 0; d < displayhand.length; d++) {
            let div = document.createElement("div");
            document.getElementById("displayhand").appendChild(div);
            div.innerHTML = displayhand[d].value;
            div.classList.add(displayhand[d].color);
            let id = d.toString();
            div.setAttribute("id", id);
            div.addEventListener("click", playCard);
        }
    }
    function playCard(_event) {
        document.getElementById("ablage").innerHTML = "";
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        place.push(displayhand[index]);
        let div = document.createElement("div");
        document.getElementById("ablage").appendChild(div);
        div.innerHTML = displayhand[index].value;
        div.classList.add(displayhand[index].color);
        displayhand.splice(index, 1);
        handcards();
    }
    function sort() {
        document.getElementById("displayhand").innerHTML = "";
        displayhand.sort(function (a, b) {
            if (a.color > b.color) {
                return 1;
            }
            if (a.color < b.color) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        });
        console.log(displayhand);
        handcards();
    }
})(UNO || (UNO = {}));
//# sourceMappingURL=Aufgabe3.js.map