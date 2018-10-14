var Aufgabe0;
(function (Aufgabe0) {
    var a = prompt('Hallo, wie heisst du?');
    console.log("Hallo " + a);
    function writeHTML() {
        var node = document.getElementById("main");
        node.innerHTML += ("Hallo " + a);
    }
    document.addEventListener('DOMContentLoaded', writeHTML);
})(Aufgabe0 || (Aufgabe0 = {}));
//# sourceMappingURL=Aufgabe0.js.map