//Aufgabe: 2 (neu)
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 28.10.2018
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace UNO {
    interface card {
        color: string;
        value: string;
    }
//Arrays
    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck: card[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }];

    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let z: number = 0; z < 2; z++) {
                let card: card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }

    let displayhand: card[] = [];

    function Anzahl(): void {
        var kartenanzahl: string = prompt("Mit wie vielen Karten willst du spielen?");
        let n: number = parseInt(kartenanzahl);


        for (let random: number = n; random > 0; random--) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            displayhand.push(deck[r]);
            deck.splice(r, 1);
        }

        for (let d: number = 0; d < displayhand.length; d++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("displayhand").appendChild(div);
            div.innerHTML = displayhand[d].value;
            div.classList.add(displayhand[d].color);
        }

    }

    document.addEventListener("DOMContentLoaded", Anzahl);
}