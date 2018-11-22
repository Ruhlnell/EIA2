//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 21.11.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var tanne;
(function (tanne) {
    window.addEventListener("DOMContentLoaded", init);
    let trees = [];
    let balls = [];
    let candles = [];
    let lametta = [];
    let light = [];
    let holding = [];
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
            fieldset.addEventListener("change", refresh);
        }
    }
    let cart = [];
    function generateTrees() {
        for (let a = 0; a < trees.length; a++) {
            let input = document.createElement("input");
            document.getElementById("trees").appendChild(input);
            input.type = "radio";
            input.name = "treegroup";
            input.value = trees[a].name;
            input.id = trees[a].name;
            input.setAttribute("group", "trees");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", trees[a].name);
            label.innerHTML = trees[a].name + " " + trees[a].price + "�";
            let id = input.toString();
            input.setAttribute("id", "trees" + id);
            document.getElementById("trees").appendChild(document.createElement("br"));
        }
    }
    function generateBalls() {
        for (let b = 0; b < balls.length; b++) {
            let input = document.createElement("input");
            document.getElementById("balls").appendChild(input);
            input.type = "checkbox";
            input.name = "balls";
            input.value = balls[b].name;
            input.id = balls[b].name;
            input.setAttribute("group", "balls");
            input.setAttribute("index", "" + b);
            let label = document.createElement("label");
            document.getElementById("balls").appendChild(label);
            label.setAttribute("for", balls[b].name);
            label.innerHTML = balls[b].name + " " + balls[b].price + "Euro";
            stepperBalls();
            let id = input.toString();
            input.setAttribute("id", "ball" + id);
            document.getElementById("balls").appendChild(document.createElement("br"));
        }
    }
    function stepperBalls() {
        let input = document.createElement("input");
        document.getElementById("balls").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0";
    }
    function generateCandles() {
        for (let c = 0; c < candles.length; c++) {
            let input = document.createElement("input");
            document.getElementById("candles").appendChild(input);
            input.type = "checkbox";
            input.name = "candles";
            input.value = balls[c].name;
            input.id = balls[c].name;
            input.setAttribute("group", "candles");
            input.setAttribute("index", "" + c);
            let label = document.createElement("label");
            document.getElementById("candles").appendChild(label);
            label.setAttribute("for", candles[c].name);
            label.innerHTML = candles[c].name + " " + candles[c].price + "Euro";
            stepperCandles();
            let id = input.toString();
            input.setAttribute("id", "candles" + id);
            document.getElementById("candles").appendChild(document.createElement("br"));
        }
    }
    function stepperCandles() {
        let input = document.createElement("input");
        document.getElementById("candles").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0";
    }
    function generateLametta() {
        for (let d = 0; d < lametta.length; d++) {
            let input = document.createElement("input");
            document.getElementById("lametta").appendChild(input);
            input.type = "checkbox";
            input.name = "lametta";
            input.value = lametta[d].name;
            input.id = lametta[d].name;
            input.setAttribute("group", "lametta");
            input.setAttribute("index", "" + d);
            let label = document.createElement("label");
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", lametta[d].name);
            label.innerHTML = lametta[d].name + " " + lametta[d].price + "Euro";
            stepperLametta();
            let id = input.toString();
            input.setAttribute("id", "lametta" + id);
            document.getElementById("lametta").appendChild(document.createElement("br"));
        }
    }
    function stepperLametta() {
        let input = document.createElement("input");
        document.getElementById("lametta").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0";
    }
    function generateLight() {
        for (let e = 0; e < light.length; e++) {
            let input = document.createElement("input");
            document.getElementById("light").appendChild(input);
            input.type = "checkbox";
            input.name = "light";
            input.value = light[e].name;
            input.id = light[e].name;
            input.setAttribute("group", "light");
            input.setAttribute("index", "" + e);
            let label = document.createElement("label");
            document.getElementById("light").appendChild(label);
            label.setAttribute("for", light[e].name);
            label.innerHTML = light[e].name + " " + light[e].price + "�";
            stepperLight();
            let id = input.toString();
            input.setAttribute("id", "light" + id);
            document.getElementById("light").appendChild(document.createElement("br"));
        }
    }
    function stepperLight() {
        let input = document.createElement("input");
        document.getElementById("light").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0";
    }
    function generateHolding() {
        for (let f = 0; f < holding.length; f++) {
            let input = document.createElement("input");
            document.getElementById("holding").appendChild(input);
            input.type = "checkbox";
            input.name = "holding";
            input.value = holding[f].name;
            input.id = holding[f].name;
            input.setAttribute("group", "holding");
            input.setAttribute("index", "" + f);
            let label = document.createElement("label");
            document.getElementById("holding").appendChild(label);
            label.setAttribute("for", holding[f].name);
            label.innerHTML = holding[f].name + " " + holding[f].price + "Euro";
            stepperHolding();
            let id = input.toString();
            input.setAttribute("id", "holding" + id);
            document.getElementById("holding").appendChild(document.createElement("br"));
        }
    }
    function stepperHolding() {
        let input = document.createElement("input");
        document.getElementById("holding").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0";
    }
    //  function refreshCart(): _event.target {
    //    let input: HTMLInputElement<HTMLInputElement>_event.target;
    //  let id: string[]input.id.split("");
    //  }
    function refresh(_event) {
        let target = _event.target;
        let productgroup = target.getAttribute("group");
        let productindex = target.getAttribute("index");
    }
})(tanne || (tanne = {}));
//# sourceMappingURL=Aufgabe4.js.map