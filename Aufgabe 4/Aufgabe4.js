//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 21.11.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var tanne;
(function (tanne) {
    window.addEventListener("DOMContentLoaded", init);
    //let trees: product[]=[];
    //let balls: product[]=[];
    //let candles: product[]=[];
    //let lametta: product[]=[];
    //let light: product[]=[];
    //let holding: product[]=[];
    function init() {
        generateTrees();
        generateBalls();
        generateCandles();
        generateLametta();
        generateLight();
        generateHolding();
        //    generateBlanket();
        //   generateExtras();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", htmlel);
        }
    }
    // let cart: Product[] = [];
    function generateTrees() {
        for (let a = 0; a < tanne.trees.length; a++) {
            let input = document.createElement("input");
            document.getElementById("trees").appendChild(input);
            input.type = "radio";
            //input.id = "baum" + a;
            input.name = "treegroup";
            input.value = tanne.trees[a].name;
            input.setAttribute("group", "trees");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", tanne.trees[a].name);
            label.innerHTML = tanne.trees[a].name + " " + tanne.trees[a].price + " Euro";
            //let id: string = input.toString();
            input.setAttribute("id", "trees" + a);
            document.getElementById("trees").appendChild(document.createElement("br"));
        }
    }
    function generateBalls() {
        for (let a = 0; a < tanne.balls.length; a++) {
            let input = document.createElement("input");
            document.getElementById("balls").appendChild(input);
            input.type = "stepper";
            //input.id = "baum" + a;
            input.name = "ballsgroup";
            input.value = tanne.balls[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "balls");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("balls").appendChild(label);
            label.setAttribute("for", tanne.balls[a].name);
            label.innerHTML = tanne.balls[a].name + " " + tanne.balls[a].price + " Euro";
            //let id: string = input.toString();
            input.setAttribute("id", "balls" + a);
            document.getElementById("balls").appendChild(document.createElement("br"));
        }
    }
    function generateCandles() {
        for (let a = 0; a < tanne.candles.length; a++) {
            let input = document.createElement("input");
            document.getElementById("candles").appendChild(input);
            input.type = "stepper";
            //input.id = "baum" + a;
            input.name = "candlesgroup";
            input.value = tanne.candles[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "candles");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("candles").appendChild(label);
            label.setAttribute("for", tanne.candles[a].name);
            label.innerHTML = tanne.candles[a].name + " " + tanne.candles[a].price + " Euro";
            //let id: string = input.toString();
            input.setAttribute("id", "candles" + a);
            document.getElementById("candles").appendChild(document.createElement("br"));
        }
    }
    function generateLametta() {
        for (let a = 0; a < tanne.lametta.length; a++) {
            let input = document.createElement("input");
            document.getElementById("lametta").appendChild(input);
            input.type = "stepper";
            input.name = "lamettagroup";
            input.value = tanne.lametta[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "lametta");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", tanne.lametta[a].name);
            label.innerHTML = tanne.lametta[a].name + " " + tanne.lametta[a].price + " Euro";
            input.setAttribute("id", "lammetta" + a);
            document.getElementById("lametta").appendChild(document.createElement("br"));
        }
    }
    function generateLight() {
        for (let a = 0; a < tanne.light.length; a++) {
            let input = document.createElement("input");
            document.getElementById("light").appendChild(input);
            input.type = "stepper";
            input.name = "lightgroup";
            input.value = tanne.light[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "light");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("light").appendChild(label);
            label.setAttribute("for", tanne.light[a].name);
            label.innerHTML = tanne.light[a].name + " " + tanne.light[a].price + " Euro";
            input.setAttribute("id", "light" + a);
            document.getElementById("light").appendChild(document.createElement("br"));
        }
    }
    function generateHolding() {
        for (let a = 0; a < tanne.holding.length; a++) {
            let input = document.createElement("input");
            document.getElementById("holding").appendChild(input);
            input.type = "stepper";
            //input.id = "baum" + a;
            input.name = "holdinggroup";
            input.value = tanne.holding[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "holding");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("holding").appendChild(label);
            label.setAttribute("for", tanne.holding[a].name);
            label.innerHTML = tanne.holding[a].name + " " + tanne.holding[a].price + " Euro";
            input.setAttribute("id", "holding" + a);
            document.getElementById("holding").appendChild(document.createElement("br"));
        }
    }
    /*function refresh(_event: Event): void {
        console.log(_event);
        if (trees[0].price == 0 || balls[0].price == 0 || candles[0].price == 0 || lametta[0].price == 0 || light[0].price == 0 || holding[0].price == 0) {
            document.getElementById("uebersicht").innerHTML = "";
        //Product[0].name && Product[0].price
        }
        
        else {
            document.getElementById("uebersicht").innerHTML = "";
        }
    }*/
    function htmlel(_event) {
        let element = _event.target;
        let elementString = (element.id);
        console.log(elementString);
        // let element: HTMLElement = <HTMLElement>document.getElementById(); 
    }
})(tanne || (tanne = {}));
//# sourceMappingURL=Aufgabe4.js.map