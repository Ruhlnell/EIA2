//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 17.11.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var tanne;
(function (tanne) {
    //Arrays
    let trees = [{ name: "gr�ne Tanne", price: 80 },
        { name: "gr�ne Fichte", price: 90 },
        { name: "k�nstlicher gr�ner Baum", price: 50 },
        { name: "k�nstlicher wei�er Baum", price: 60 },
        { name: "k�nstlicher silberner Baum", price: 90 },
        { name: "k�nstlicher schwarzer Baum", price: 40 },
        { name: "k�nstlicher blauer Baum", price: 60 },
    ];
    let balls = [{ name: "blaue Kugel mit Glitzer", price: 2 },
        { name: "blaue Kugel, matt", price: 2 },
        //rote Kugeln
        { name: "rote Kugel mit Glitzer", price: 2 },
        { name: "rote Kugel, matt", price: 2 },
        //silberne Kugeln
        { name: "silberne Kugel mit Glitzer", price: 2 },
        { name: "silberne Kugel, matt", price: 2 },
        //gelbe Kugeln
        { name: "gelbe Kugel mit Glitzer", price: 2 },
        { name: "gelbe Kugel, matt", price: 2 },
    ];
    let candles = [{ name: "blaue Kerze", price: 2 },
        { name: "rote Kerze", price: 2 },
        { name: "silberne Kerze", price: 2 },
        { name: "goldene Kerze", price: 2 },
        { name: "Bienenwachskerze", price: 3 },
    ];
    let lametta = [{ name: "blaues Lametta (1m)", price: 3 },
        { name: "rotes Lametta (1m)", price: 3 },
        { name: "silbernes Lametta (1m)", price: 3 },
        { name: "goldenes Lametta (1m)", price: 3 },
    ];
    let light = [{ name: "Lichterkette (warmes Licht, 1m)", price: 4 },
        { name: "Lichterkette (kaltes Licht, 1m)", price: 4 },
    ];
    let holding = [{ name: "Metallhalterung", price: 10 },
        { name: "Holzhalterung", price: 7 },
        { name: "braune Plasikhalterung", price: 5 },
    ];
    let blenket = [{ name: "Decke, hellblau mit Schneeflocken", price: 10 },
        { name: "Decke, baige mit Schneeflockenmuster", price: 10 },
        { name: "Decke, rot mit Rehen", price: 7 },
        { name: "Decke, gr�n mit Rehen", price: 2 },
        { name: "Decke in Schneeoptik", price: 3 },
    ];
    let extra = [{ name: "gro�er Nussknacker", price: 10 },
        { name: "tanzender Weihnachtsmann", price: 10 },
    ];
    let sendingoptions = [{ name: "normal Versand", price: 0 },
        { name: "express Versand", price: 3 },
    ];
    //    function init(): void {
    //    fillFieldset();
    //  document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
    //document.getElementById("check").addEventListener("click", check);
    //    }  
    function generatetrees() {
        document.addEventListener("change", refreshCart);
    }
    function refreshCart() {
    }
})(tanne || (tanne = {}));
//# sourceMappingURL=Aufgabe4.js.map