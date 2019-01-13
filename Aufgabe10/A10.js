var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let child2 = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        Sky();
        Hill();
        Sun();
        Cloud1();
        Cloud2();
        Cloud3();
        imgData = Aufgabe10.crc2.getImageData(0, 0, 700, 1100);
        for (let i = 0; i < 200; i++) {
            let snow = new Aufgabe10.Snow();
            snow.x = Math.random() * Aufgabe10.crc2.canvas.width;
            snow.y = Math.random() * Aufgabe10.crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";
            snowflakes.push(snow);
        }
        for (let i = 0; i < 8; i++) {
            let children2 = new Aufgabe10.Child2();
            children2.x = Math.random() * Aufgabe10.crc2.canvas.width;
            children2.y = Math.random() * Aufgabe10.crc2.canvas.height;
            children2.dx = Math.random() * 4 - 2;
            children2.dy = Math.random() * 4 + 2;
            child2.push(children2);
        }
        update();
    }
    function Sky() {
        Aufgabe10.crc2.fillStyle = "#A9E2F3";
        Aufgabe10.crc2.fillRect(0, 0, Aufgabe10.crc2.canvas.width, 110);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 110);
        Aufgabe10.crc2.lineTo(0, 260);
        Aufgabe10.crc2.lineTo(270, 110);
        Aufgabe10.crc2.lineTo(0, 110);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
    }
    function Cloud1() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(90, 90);
        Aufgabe10.crc2.arc(85, 90, 17, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(100, 90, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(75, 90, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(90, 85, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E0F2F7";
        Aufgabe10.crc2.fill();
    }
    function Cloud2() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(240, 60);
        Aufgabe10.crc2.arc(240, 60, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(233, 53, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(247, 55, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(235, 64, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(225, 63, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E0F2F7";
        Aufgabe10.crc2.fill();
    }
    function Cloud3() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(25, 195);
        Aufgabe10.crc2.arc(25, 195, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(32, 178, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(32, 192, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(32, 178, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(32, 192, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.moveTo(49, 195);
        Aufgabe10.crc2.arc(49, 195, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E0F2F7";
        Aufgabe10.crc2.fill();
    }
    function Hill() {
        Aufgabe10.crc2.lineWidth = 1;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(270, 110);
        Aufgabe10.crc2.lineTo(0, 260);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "#E6E6E6";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function Sun() {
        let x = 20;
        let y = 20;
        let radius = 40;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        Aufgabe10.crc2.moveTo(20, 20);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(x, y, radius, startAngle, endAngle, true);
        Aufgabe10.crc2.fillStyle = "#F4FA58";
        Aufgabe10.crc2.fill();
    }
    function Trees(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y - 40);
        Aufgabe10.crc2.lineTo(_x - 10, _y);
        Aufgabe10.crc2.lineTo(_x + 10, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B6121";
        Aufgabe10.crc2.strokeStyle = "#0B6121";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    for (let i = 0; i < 35; i++) {
        let x = Math.floor(Math.random() * Aufgabe10.crc2.canvas.width);
        let y = Math.floor(Math.random() * (310 - 410) + Aufgabe10.crc2.canvas.height);
        Trees(x, y);
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < snowflakes.length; i++) {
            let snow = snowflakes[i];
            snow.move();
            snow.draw();
        }
        for (let i = 0; i < 3; i++) {
            let children2 = child2[i];
            children2.move();
            children2.draw();
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=A10.js.map