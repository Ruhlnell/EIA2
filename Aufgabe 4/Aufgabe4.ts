//Aufgabe: 4
//Name: Ruhl, Nelli
//Matrikel: 259408
//Datum: 21.11.2018

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace tanne {

    window.addEventListener("DOMContentLoaded", init);


    //let trees: product[]=[];
    //let balls: product[]=[];
    //let candles: product[]=[];
    //let lametta: product[]=[];
    //let light: product[]=[];
    //let holding: product[]=[];


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


    let card: Product[] = [];


    function generateTrees(): void {
        for (let a: number = 0; a < trees.length; a++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("trees").appendChild(input);
            input.type = "radio";
            //input.id = "baum" + a;
            input.name = "treegroup";
            input.value = trees[a].name;

            input.setAttribute("group", "trees");
            input.setAttribute("index", "" + a);

            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", trees[a].name);
            label.innerHTML = trees[a].name + " " + trees[a].price + " Euro";
            //let id: string = input.toString();
            input.setAttribute("id", "trees" + a);
            document.getElementById("trees").appendChild(document.createElement("br"));

        }

    }

    function generateBalls(): void {
        for (let a: number = 0; a < balls.length; a++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("balls").appendChild(input);
            input.type = "stepper";
            //input.id = "baum" + a;
            input.name = "ballsgroup";
            input.value = balls[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "balls");
            input.setAttribute("index", "" + a);

            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("balls").appendChild(label);
            label.setAttribute("for", balls[a].name);
            label.innerHTML = balls[a].name + " " + balls[a].price + " Euro";
            //let id: string = input.toString();
            input.setAttribute("id", "balls" + a);
            document.getElementById("balls").appendChild(document.createElement("br"));

        }

    }

    function generateCandles(): void {
        for (let a: number = 0; a < candles.length; a++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("candles").appendChild(input);
            input.type = "stepper";
            //input.id = "baum" + a;
            input.name = "candlesgroup";
            input.value = candles[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "candles");
            input.setAttribute("index", "" + a);

            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("candles").appendChild(label);
            label.setAttribute("for", candles[a].name);
            label.innerHTML = candles[a].name + " " + candles[a].price + " Euro";
            //let id: string = input.toString();
            input.setAttribute("id", "candles" + a);
            document.getElementById("candles").appendChild(document.createElement("br"));

        }

    }

    function generateLametta(): void {
        for (let a: number = 0; a < lametta.length; a++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("lametta").appendChild(input);
            input.type = "stepper";
            input.name = "lamettagroup";
            input.value = lametta[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "lametta");
            input.setAttribute("index", "" + a);

            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", lametta[a].name);
            label.innerHTML = lametta[a].name + " " + lametta[a].price + " Euro";
            input.setAttribute("id", "lammetta" + a);
            document.getElementById("lametta").appendChild(document.createElement("br"));

        }

    }

    function generateLight(): void {
        for (let a: number = 0; a < light.length; a++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("light").appendChild(input);
            input.type = "stepper";
            input.name = "lightgroup";
            input.value = light[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "light");
            input.setAttribute("index", "" + a);

            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("light").appendChild(label);
            label.setAttribute("for", light[a].name);
            label.innerHTML = light[a].name + " " + light[a].price + " Euro";
            input.setAttribute("id", "light" + a);
            document.getElementById("light").appendChild(document.createElement("br"));

        }

    }

    function generateHolding(): void {
        for (let a: number = 0; a < holding.length; a++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("holding").appendChild(input);
            input.type = "stepper";
            //input.id = "baum" + a;
            input.name = "holdinggroup";
            input.value = holding[a].name;
            input.type = "number";
            input.name = " Stepper";
            input.step = "1.0";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            input.setAttribute("group", "holding");
            input.setAttribute("index", "" + a);

            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("holding").appendChild(label);
            label.setAttribute("for", holding[a].name);
            label.innerHTML = holding[a].name + " " + holding[a].price + " Euro";
            input.setAttribute("id", "holding" + a);
            document.getElementById("holding").appendChild(document.createElement("br"));

        }

    }

    /*   function refresh(): void {
           let uebersicht = document.getElementById('uebersicht').innerHTML;
           refresh.push(uebersicht);
           uebersichtAusgeben();
           uebersicht.splice(index[a]);
           uebersichtAusgeben();
       }
   
       function warenkorbAusgeben() {
           var ausgabe = '';
               for (var i = 0; i < warenkorb.length; ++i) {
                   warenkorb.sort();
                   ausgabe += '<li id="nr' + i + '">';
                   ausgabe += warenkorb[i];
                   ausgabe += '<input type="button" value="X" id="loeschen" onclick="loescheNr(' + i + ');" />';
                   ausgabe += '</li>';
           }
           document.getElementById('liste').innerHTML = ausgabe;
       }
           
       
       function delete(id):void {
       
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
           }
       
           function refresh(_event: Event): void {
               let element: HTMLElement = <HTMLElement>_event.target;
               let elementString: string = (element.id);
               console.log(elementString);
               target.getAttribute("name");
               target.getAttribute("price");
              // let element: HTMLElement = <HTMLElement>document.getElementById(); 
           }*/
    function refresh(_event: Event): void {
        document.getElementById("fieldset").innerHTML = "";
        for (let d: number = 0; d < card.length; d++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("fieldset").appendChild(div);
            div.innerHTML = card[d].name;
            //    div.innerHTML = cart[d].price;
            let id: string = d.toString();
            div.setAttribute("index", "" + d);
            div.addEventListener("change", refreshCard);
        }

        function refreshCard(): void {
            document.getElementById("uebersicht").innerHTML = "";
            let clickedCard: HTMLElement = <HTMLElement>_event.target;
            let index: number = parseInt(clickedCard.id);
            card.push(card[index]);
           card.splice(index, 1);

        }

    }

}
