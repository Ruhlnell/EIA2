//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 17.11.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var tanne2;
(function (tanne2) {
    //Arrays
    tanne2.trees = [{ ["gruene Tanne"]: 80 },
        { ["gruene Fichte"]: 90 },
        { ["kuenstlicher gruener Baum"]: 50 },
        { ["kuenstlicher wei�er Baum"]: 60 },
        { ["kuenstlicher silberner Baum"]: 90 },
        { ["kuenstlicher schwarzer Baum"]: 40 },
        { ["kuenstlicher blauer Baum"]: 60 },
    ];
    tanne2.balls = [{ ["auswaehlen"]: 0 },
        { ["blaue Kugel mit Glitzer"]: 2 },
        { ["blaue Kugel, matt"]: 2 },
        //rote Kugeln
        { ["rote Kugel mit Glitzer"]: 2 },
        { ["rote Kugel, matt"]: 2 },
        //silberne Kugeln
        { ["silberne Kugel mit Glitzer"]: 2 },
        { ["silberne Kugel, matt"]: 2 },
        //gelbe Kugeln
        { ["gelbe Kugel mit Glitzer"]: 2 },
        { ["gelbe Kugel, matt"]: 2 },
    ];
    tanne2.candles = [{ ["auswaehlen"]: 0 },
        { ["blaue Kerze"]: 2 },
        { ["rote Kerze"]: 2 },
        { ["silberne Kerze"]: 2 },
        { ["goldene Kerze"]: 2 },
        { ["Bienenwachskerze"]: 3 },
    ];
    tanne2.lametta = [{ ["auswaehlen"]: 0 },
        { ["blaues Lametta (1m)"]: 3 },
        { ["rotes Lametta (1m)"]: 3 },
        { ["silbernes Lametta (1m)"]: 3 },
        { ["goldenes Lametta (1m)"]: 3 },
    ];
    tanne2.light = [{ ["auswaehlen"]: 0 },
        { ["Lichterkette (warmes Licht, 1m)"]: 4 },
        { ["Lichterkette (kaltes Licht, 1m)"]: 4 },
    ];
    tanne2.holding = [{ ["auswaehlen"]: 0 },
        { ["Metallhalterung"]: 10 },
        { ["Holzhalterung"]: 7 },
        { ["braune Plasikhalterung"]: 5 },
    ];
    tanne2.blenket = [{ ["auswaehlen"]: 0 },
        { ["Decke, hellblau mit Schneeflocken"]: 10 },
        { ["Decke, baige mit Schneeflockenmuster"]: 10 },
        { ["Decke, rot mit Rehen"]: 7 },
        { ["Decke, gr�n mit Rehen"]: 2 },
        { ["Decke in Schneeoptik"]: 3 },
    ];
    tanne2.extras = [{ ["auswaehlen"]: 0 },
        { ["gro�er Nussknacker"]: 10 },
        { ["tanzender Weihnachtsmann"]: 10 },
    ];
})(tanne2 || (tanne2 = {}));
//# sourceMappingURL=Shop.js.map