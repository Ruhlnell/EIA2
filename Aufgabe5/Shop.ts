//Aufgabe: 5
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 25.11.2018

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace tanne2 {

    export interface Product {
        typ: string;
        name: string;
        price: number;
    }

        export interface assoArray {
            [key: string]: Product[];
        }

        export let assoProduct: assoArray = {
            "trees": [{ typ: "Baum", name: "gruene Tanne", price: 80 }, { typ: "Baum", name: "gruene Fichte", price: 90 }, { typ: "Baum", name: "kuenstlicher weisser Baum", price: 60 }],
            "holder": [{ typ: "Halterung", name: "Keine", price: 0 }, { typ: "Halterung", name: "Holz-Topf", price: 20 }, { typ: "Halterung", name: "Metall-Halterung", price: 35 }],
            "balls": [{ typ: "Kugeln", name: "Silberne Kugel", price: 5 }, { typ: "Kugeln", name: "Gelbe Kugel, matt", price: 5 }, { typ: "Kugeln", name: "Gelbe Kugel mit Glitzer", price: 5 }, { typ: "Kugeln", name: "Rote Kugel, matt", price: 1 }, { typ: "Kugeln", name: "Rote Kugel mit Glitzer", price: 5 }],
            "lametta": [{ typ: "Lametta", name: "Goldenes Lametta (1m)", price: 6 }, { typ: "Lametta", name: "Silbernes Lametta (1m)", price: 6 }, { typ: "Lametta", name: "Rotes Lametta (1m)", price: 6 }, { typ: "Lametta", name: "Blaues Lametta (1m)", price: 6 }],
            "candles": [{ typ: "Kerzen", name: "Bienenwachskerzen", price: 8 }, { typ: "Kerzen", name: "Blaue Kerzen", price: 5 }, { typ: "Kerzen", name: "Rote Kerzen", price: 5 }],
            "shipment": [{ typ: "Lieferoptionen", name: "DPD", price: 20 }, { typ: "Lieferoptionen", name: "DHL", price: 25 }]
        }

    }
