var a = prompt('Hallo, wie hei�t du?');
console.log("Hallo " + a);
function writeHTML() {
    var node = document.getElementById("main");
    node.innerHTML += ("Hallo " + a);
}
document.addEventListener('DOMContentLoaded', writeHTML);
//# sourceMappingURL=Aufgabe0.js.map