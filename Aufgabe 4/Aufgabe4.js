//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 21.11.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var tanne;
(function (tanne) {
    window.addEventListener("DOMContentLoaded", init);
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
            fieldset.addEventListener("change", refreshCart);
        }
    }
    let cart = [];
    function generateTrees() {
        for (let a = 0; a < tanne.trees.length; a++) {
            let input = document.createElement("input");
            document.getElementById("trees").appendChild(input);
            input.type = "radio";
            input.name = "treegroup";
            input.value = tanne.trees[a].name;
            input.id = tanne.trees[a].name;
            input.setAttribute("group", "trees");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", tanne.trees[a].name);
            label.innerHTML = tanne.trees[a].name + " " + tanne.trees[a].price + "�";
            let id = input.toString();
            input.setAttribute("id", "trees" + id);
            document.getElementById("trees").appendChild(document.createElement("br"));
        }
    }
    function generateBalls() {
        for (let b = 0; b < tanne.balls.length; b++) {
            let input = document.createElement("input");
            document.getElementById("balls").appendChild(input);
            input.type = "checkbox";
            input.name = "balls";
            input.value = tanne.balls[b].name;
            input.id = tanne.balls[b].name;
            input.setAttribute("group", "balls");
            input.setAttribute("index", "" + b);
            let label = document.createElement("label");
            document.getElementById("balls").appendChild(label);
            label.setAttribute("for", tanne.balls[b].name);
            label.innerHTML = tanne.balls[b].name + " " + tanne.balls[b].price + "Euro";
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
        for (let c = 0; c < tanne.balls.length; c++) {
            let input = document.createElement("input");
            document.getElementById("candles").appendChild(input);
            input.type = "checkbox";
            input.name = "candles";
            input.value = tanne.balls[c].name;
            input.id = tanne.balls[c].name;
            input.setAttribute("group", "candles");
            input.setAttribute("index", "" + c);
            let label = document.createElement("label");
            document.getElementById("candles").appendChild(label);
            label.setAttribute("for", tanne.candles[c].name);
            label.innerHTML = tanne.candles[c].name + " " + tanne.candles[c].price + "Euro";
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
        for (let d = 0; d < tanne.lametta.length; d++) {
            let input = document.createElement("input");
            document.getElementById("lametta").appendChild(input);
            input.type = "checkbox";
            input.name = "lametta";
            input.value = tanne.lametta[d].name;
            input.id = tanne.lametta[d].name;
            input.setAttribute("group", "lametta");
            input.setAttribute("index", "" + d);
            let label = document.createElement("label");
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", tanne.lametta[d].name);
            label.innerHTML = tanne.lametta[d].name + " " + tanne.lametta[d].price + "Euro";
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
        for (let e = 0; e < tanne.light.length; e++) {
            let input = document.createElement("input");
            document.getElementById("light").appendChild(input);
            input.type = "checkbox";
            input.name = "light";
            input.value = tanne.light[e].name;
            input.id = tanne.light[e].name;
            input.setAttribute("group", "light");
            input.setAttribute("index", "" + e);
            let label = document.createElement("label");
            document.getElementById("light").appendChild(label);
            label.setAttribute("for", tanne.light[e].name);
            label.innerHTML = tanne.light[e].name + " " + tanne.light[e].price + "�";
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
        for (let f = 0; f < tanne.holding.length; f++) {
            let input = document.createElement("input");
            document.getElementById("holding").appendChild(input);
            input.type = "checkbox";
            input.name = "holding";
            input.value = tanne.holding[f].name;
            input.id = tanne.holding[f].name;
            input.setAttribute("group", "holding");
            input.setAttribute("index", "" + f);
            let label = document.createElement("label");
            document.getElementById("holding").appendChild(label);
            label.setAttribute("for", tanne.holding[f].name);
            label.innerHTML = tanne.holding[f].name + " " + tanne.holding[f].price + "Euro";
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
    function refreshCart(_event) {
        let target = _event.target;
        let productgroup = target.getAttribute("group");
        let productindex = target.getAttribute("index");
    }
})(tanne || (tanne = {}));
//# sourceMappingURL=Aufgabe4.js.map