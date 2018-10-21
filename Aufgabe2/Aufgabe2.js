var UNO;
(function (UNO) {
    function main() {
        let c0 = {
            name: "0",
            red: 1,
            blue: 1,
            green: 1,
            yellow: 1,
            black: 0,
        };
        let c1 = {
            name: "1",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c2 = {
            name: "2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c3 = {
            name: "3",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c4 = {
            name: "4",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c5 = {
            name: "5",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c6 = {
            name: "6",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c7 = {
            name: "7",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c8 = {
            name: "8",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c9 = {
            name: "9",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c10 = {
            name: "Retour",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c11 = {
            name: "+2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c12 = {
            name: "Aussetzen",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2,
            black: 0,
        };
        let c13 = {
            name: "+4",
            red: 0,
            blue: 0,
            green: 0,
            yellow: 0,
            black: 4,
        };
        let c14 = {
            name: "Wish",
            red: 0,
            blue: 0,
            green: 0,
            yellow: 0,
            black: 4,
        };
        let c = ""; //Farbe
        let allCards = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];
        function random(_n) {
            return Math.floor(Math.random() * Math.floor(_n));
        }
        function placeDiv(_color, card, Eingabe) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + Eingabe);
            document.getElementById("a" + Eingabe).innerHTML += card;
            //CSS 
            let s = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 100 + "px";
            s.height = 150 + "px";
            s.left = (Eingabe + 1) * 150 + "px";
            s.bottom = 50 + "px";
            s.textAlign = "center";
            s.borderRadius = 20 + "px";
            if (_color == "#000000") {
                s.color = "white";
            }
        }
        //Pop up
        let Anzahl;
        let Kartenauswahl = prompt("Mit wie vielen Karten spielst du?");
        Anzahl = Number(Kartenauswahl);
        for (let i = 0; i < Anzahl; i++) {
            let l = random(15);
            let farben = random(5);
            switch (farben) {
                case 0:
                    c = "#FF0000";
                    if (allCards[l].red > 0) {
                        placeDiv(c, allCards[l].name, i);
                        allCards[l].red--;
                        continue;
                    }
                case 1:
                    c = "#00FF00";
                    if (allCards[l].green > 0) {
                        placeDiv(c, allCards[l].name, i);
                        allCards[l].green--;
                        continue;
                    }
                case 2:
                    c = "#0000FF";
                    if (allCards[l].blue > 0) {
                        placeDiv(c, allCards[l].name, i);
                        allCards[l].blue--;
                        continue;
                    }
                case 3:
                    c = "#F0000F";
                    if (allCards[l].yellow > 0) {
                        placeDiv(c, allCards[l].name, i);
                        allCards[l].yellow--;
                        continue;
                    }
                case 4:
                    c = "black";
                    if (allCards[l].black > 0) {
                        placeDiv(c, allCards[l].name, i);
                        allCards[l].black--;
                        continue;
                    }
                    else {
                        i--;
                        continue;
                    }
            }
        }
        function ablage() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "white";
            s.width = 100 + "px";
            s.height = 150 + "px";
            s.right = 200 + "px";
            s.top = 20 + "px";
            s.borderRadius = 20 + "px";
        }
        function stapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Stapel");
            document.getElementById("Stapel").innerHTML += "Stapel";
            let s = div.style;
            s.border = " solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "b";
            s.width = 100 + "px";
            s.height = 150 + "px";
            s.left = 200 + "px";
            s.top = 20 + "px";
            s.borderRadius = 20 + "px";
        }
        ablage();
        stapel();
    }
    document.addEventListener("DOMContentLoaded", (main));
})(UNO || (UNO = {}));
//# sourceMappingURL=Aufgabe2.js.map