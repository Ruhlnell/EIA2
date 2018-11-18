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
    let trees: product[] = [];

    let balls: product[] = [];

    let candles: product[] = [];

    let lametta: product[] = [];

    let light: product[] = [];

    let holding: product[] = [];

    let blenket: product[] = [];

    let extras: product[] = [];

    let sendingoptions: product[] = [];

    //    function init(): void {
    //    fillFieldset();
    //  document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
    //document.getElementById("check").addEventListener("click", check);
    //    }  

    function generateTrees() {
        document.addEventListener("change", refreshCart);
        let radiobutton: HTMLElement = document.getElementById("trees");
        for (let arrayNumber: number = 0; arrayNumber < trees.length; arrayNumber++) {

            generateTrees.push();
        }
    }

    function generateBalls() {
        document.addEventListener("change", refreshCart);
        let stepper: HTMLElement = document.getElementById("balls");
        let arrayNumber: number = 0; arrayNumber < balls.length; arrayNumber++;
        generateBalls.push();
    }

    function generateCandles() {
        document.addEventListener("change", refreshCart);
        let stepper: HTMLElement = document.getElementById("candles");
        let arrayNumber: number = 0; arrayNumber < candles.length; arrayNumber++;
        generateCandles.push;
    }

    function generateLametta() {
        document.addEventListener("change", refreshCart);
        let stepper: HTMLElement = document.getElementById("lametta");
        let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++;
        generateLametta.push;
    }

    function generateLight() {
        document.addEventListener("change", refreshCart);
        let stepper: HTMLElement = document.getElementById("light");
        let arrayNumber: number = 0; arrayNumber < light.length; arrayNumber++;
        generateLight.push;
    }

    function generateHolding() {
        document.addEventListener("change", refreshCart);
        let stepper: HTMLElement = document.getElementById("holding");
        let arrayNumber: number = 0; arrayNumber < holding.length; arrayNumber++;
        generateHolding.push;
    }

    function generateBlanket() {
        document.addEventListener("change", refreshCart);
        let selectbox: HTMLElement = document.getElementById("blanket");
        let arrayNumber: number = 0; arrayNumber < blenket.length; arrayNumber++;
        generateBlanket.push;
    }

    function generateExtras() {
        document.addEventListener("change", refreshCart);
        let selectbox: HTMLElement = document.getElementById("extras");
        let arrayNumber: number = 0; arrayNumber < extras.length; arrayNumber++;
        generateExtras.push(arrayNumber);
    }

    function refreshCart(): _event.target {
       // let input: HTMLInputElement<HTMLInputElement>_event.target
       // let id: string[]input.id.split("")

    }
}
