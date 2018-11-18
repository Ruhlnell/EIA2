//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 17.11.2018

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace tanne {

    interface product {
        name: string;
        price: number;
    }

    //Arrays
    export let trees: product[] = [{ name: "gr�ne Tanne", price: 80 },
        { name: "gr�ne Fichte", price: 90 },
        { name: "k�nstlicher gr�ner Baum", price: 50 },
        { name: "k�nstlicher wei�er Baum", price: 60 },
        { name: "k�nstlicher silberner Baum", price: 90 },
        { name: "k�nstlicher schwarzer Baum", price: 40 },
        { name: "k�nstlicher blauer Baum", price: 60 },
    ];

    export let balls: product[] = [{ name: "ausw�hlen", price: 0 },
        { name: "blaue Kugel mit Glitzer", price: 2 },
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

    export let candles: product[] = [{ name: "ausw�hlen", price: 0 },
        { name: "blaue Kerze", price: 2 },
        { name: "rote Kerze", price: 2 },
        { name: "silberne Kerze", price: 2 },
        { name: "goldene Kerze", price: 2 },
        { name: "Bienenwachskerze", price: 3 },
    ];

    export let lametta: product[] = [{ name: "ausw�hlen", price: 0 },
        { name: "blaues Lametta (1m)", price: 3 },
        { name: "rotes Lametta (1m)", price: 3 },
        { name: "silbernes Lametta (1m)", price: 3 },
        { name: "goldenes Lametta (1m)", price: 3 },
    ];

    export let light: product[] = [{ name: "ausw�hlen", price: 0 },
        { name: "Lichterkette (warmes Licht, 1m)", price: 4 },
        { name: "Lichterkette (kaltes Licht, 1m)", price: 4 },
    ];

    export let holding: product[] = [{ name: "ausw�hlen", price: 0 },
        { name: "Metallhalterung", price: 10 },
        { name: "Holzhalterung", price: 7 },
        { name: "braune Plasikhalterung", price: 5 },
    ];

    export let blenket: product[] = [{ name: "ausw�hlen", price: 0 },
        { name: "Decke, hellblau mit Schneeflocken", price: 10 },
        { name: "Decke, baige mit Schneeflockenmuster", price: 10 },
        { name: "Decke, rot mit Rehen", price: 7 },
        { name: "Decke, gr�n mit Rehen", price: 2 },
        { name: "Decke in Schneeoptik", price: 3 },
    ];

    export let extras: product[] = [{ name: "ausw�hlen", price: 0 },
        { name: "gro�er Nussknacker", price: 10 },
        { name: "tanzender Weihnachtsmann", price: 10 },
    ];

    export let sendingoptions: product[] = [{ name: "ausw�hlen", price: 0 },
        { name: "normal Versand", price: 0 },
        { name: "express Versand", price: 3 },
    ];
}