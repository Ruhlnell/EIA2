namespace Aufgabe0{

var a: string = prompt('Hallo, wie heisst du?');

console.log("Hallo " + a);

function writeHTML(): void {

    var node: HTMLElement = document.getElementById("main");
    node.innerHTML += ("Hallo " + a);
}

document.addEventListener('DOMContentLoaded', writeHTML);
    }