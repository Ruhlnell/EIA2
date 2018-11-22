//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 17.11.2018

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace tanne2 {

export    interface product {
        [key:string]:number;
    }

    //Arrays
    export let trees: product[] = [{ ["gruene Tanne"] : 80 },
        { ["gruene Fichte"]: 90 },
        { ["kuenstlicher gruener Baum"] : 50 },
        { ["kuenstlicher weißer Baum"]: 60 },
        { ["kuenstlicher silberner Baum"]: 90 },
        { ["kuenstlicher schwarzer Baum"]: 40 },
        { ["kuenstlicher blauer Baum"]: 60 },
    ];

    export let balls: product[] = [{["auswaehlen"] : 0 },
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

    export let candles: product[] = [{ ["auswaehlen"]: 0 },
        { ["blaue Kerze"]: 2 },
        { ["rote Kerze"]: 2 },
        { ["silberne Kerze"]: 2 },
        { ["goldene Kerze"]: 2 },
        { ["Bienenwachskerze"]: 3 },
    ];

    export let lametta: product[] = [{ ["auswaehlen"]: 0 },
        { ["blaues Lametta (1m)"]: 3 },
        { ["rotes Lametta (1m)"]: 3 },
        { ["silbernes Lametta (1m)"]: 3 },
        { ["goldenes Lametta (1m)"]: 3 },
    ];

    export let light: product[] = [{ ["auswaehlen"]: 0 },
        { ["Lichterkette (warmes Licht, 1m)"]: 4 },
        { ["Lichterkette (kaltes Licht, 1m)"]: 4 },
    ];

    export let holding: product[] = [{ ["auswaehlen"]: 0 },
        { ["Metallhalterung"]: 10 },
        { ["Holzhalterung"]: 7 },
        { ["braune Plasikhalterung"]: 5 },
    ];

    export let blenket: product[] = [{ ["auswaehlen"]: 0 },
        { ["Decke, hellblau mit Schneeflocken"]: 10 },
        { ["Decke, baige mit Schneeflockenmuster"]: 10 },
        { ["Decke, rot mit Rehen"]: 7 },
        { ["Decke, grün mit Rehen"]: 2 },
        { ["Decke in Schneeoptik"]: 3 },
  ];

    export let extras: product[] = [{ ["auswaehlen"]: 0 },
        { ["großer Nussknacker"]: 10 },
        { ["tanzender Weihnachtsmann"]: 10 },
    ];

}