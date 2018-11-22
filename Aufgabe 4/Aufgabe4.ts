//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 21.11.2018

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace tanne {

      window.addEventListener("DOMContentLoaded", init);

interface product {
        name: string;
        price: number;
    }

let trees: product[]=[];
let balls: product[]=[];
let candles: product[]=[];
let lametta: product[]=[];
let light: product[]=[];
let holding: product[]=[];


function init(): void {
generateTrees();
    generateBalls();
    generateCandles();
    generateLametta();
    generateLight();
    generateHolding();
//    generateBlanket();
 //   generateExtras();


let fieldsets: NodeListOf<HTMLFieldSetElement> = 
                    document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", refresh);
        }
    }

    
      let cart: product[] = []; 
    
    
    function generateTrees(): void {
        for (let a: number = 0; a < trees.length; a++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("trees").appendChild(input);
            input.type = "radio";
            input.name = "treegroup";
            input.value = trees[a].name;
            input.id = trees[a].name;
            input.setAttribute("group", "trees");
            input.setAttribute("index", "" + a);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", trees[a].name);
            label.innerHTML = trees[a].name + " " + trees[a].price + "€";
            let id: string = input.toString();
            input.setAttribute("id", "trees" + id);
            document.getElementById("trees").appendChild(document.createElement("br"));
            
        }
        
       }
        
    function generateBalls(): void {
        for (let b: number = 0; b < balls.length; b++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("balls").appendChild(input);
            input.type = "checkbox";
            input.name = "balls";
            input.value = balls[b].name;
            input.id = balls[b].name;
            input.setAttribute("group", "balls");
            input.setAttribute("index", "" + b);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("balls").appendChild(label);
            label.setAttribute("for", balls[b].name);
            label.innerHTML = balls[b].name + " " + balls[b].price + "Euro";
            stepperBalls();
            let id: string = input.toString();
            input.setAttribute("id", "ball" + id);
            document.getElementById("balls").appendChild(document.createElement("br"));

        }
    }

    function stepperBalls(): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("balls").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0"; }



    function generateCandles(): void {
        for (let c: number = 0; c < candles.length; c++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("candles").appendChild(input);
            input.type = "checkbox";
            input.name = "candles";
            input.value = balls[c].name;
            input.id = balls[c].name;
            input.setAttribute("group", "candles");
            input.setAttribute("index", "" + c);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("candles").appendChild(label);
            label.setAttribute("for", candles[c].name);
            label.innerHTML = candles[c].name + " " + candles[c].price + "Euro";
            stepperCandles();
            let id: string = input.toString();
            input.setAttribute("id", "candles" + id);
            document.getElementById("candles").appendChild(document.createElement("br"));

        }
    }

    function stepperCandles(): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("candles").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0";
    }    
    



        function generateLametta(): void {
        for (let d: number = 0; d < lametta.length; d++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("lametta").appendChild(input);
            input.type = "checkbox";
            input.name = "lametta";
            input.value = lametta[d].name;
            input.id = lametta[d].name;
            input.setAttribute("group", "lametta");
            input.setAttribute("index", "" + d);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", lametta[d].name);
            label.innerHTML = lametta[d].name + " " + lametta[d].price + "Euro";
            stepperLametta();
            let id: string = input.toString();
            input.setAttribute("id", "lametta" + id);
            document.getElementById("lametta").appendChild(document.createElement("br"));

        }
    }
    function stepperLametta(): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("lametta").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0"; }
    
    


        function generateLight(): void {
        for (let e: number = 0; e < light.length; e++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("light").appendChild(input);
            input.type = "checkbox";
            input.name = "light";
            input.value = light[e].name;
            input.id = light[e].name;
            input.setAttribute("group", "light");
            input.setAttribute("index", "" + e);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("light").appendChild(label);
            label.setAttribute("for", light[e].name);
            label.innerHTML = light[e].name + " " + light[e].price + "€";
            stepperLight();
            let id: string = input.toString();
            input.setAttribute("id", "light" + id);
            document.getElementById("light").appendChild(document.createElement("br"));

        }
    }
    function stepperLight(): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("light").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0"; }



        function generateHolding(): void {
        for (let f: number = 0; f < holding.length; f++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("holding").appendChild(input);
            input.type = "checkbox";
            input.name = "holding";
            input.value = holding[f].name;
            input.id = holding[f].name;
            input.setAttribute("group", "holding");
            input.setAttribute("index", "" + f);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("holding").appendChild(label);
            label.setAttribute("for", holding[f].name);
            label.innerHTML = holding[f].name + " " + holding[f].price + "Euro";
            stepperHolding();
            let id: string = input.toString();
            input.setAttribute("id", "holding" + id);
            document.getElementById("holding").appendChild(document.createElement("br"));

        }
    }
    function stepperHolding(): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("holding").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "0";
        input.max = "100";
        input.value = "0"; }


  //  function refreshCart(): _event.target {
    //    let input: HTMLInputElement<HTMLInputElement>_event.target;
      //  let id: string[]input.id.split("");

  //  }
    function refresh(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let productgroup: string = target.getAttribute("group");
        let productindex: string = target.getAttribute("index");
        }
     
}    
    