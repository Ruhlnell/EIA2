namespace Aufgabe10 {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let fps: number = 25;
    let snowflakes: Snow[] = [];
    let child2: Child2[] = [];
    let imgData: ImageData;


    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");


        Sky();
        Hill();
        Sun();
        Cloud1();
        Cloud2();
        Cloud3();


        imgData = crc2.getImageData(0, 0, 700, 1100);


        for (let i: number = 0; i < 200; i++) {
            let snow: Snow = new Snow();
            snow.x = Math.random() * crc2.canvas.width;
            snow.y = Math.random() * crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";

            snowflakes.push(snow);
        }


        for (let i: number = 0; i < 8; i++) {
            let children2: Child2 = new Child2();
            children2.x = Math.random() * crc2.canvas.width;
            children2.y = Math.random() * crc2.canvas.height;
            children2.dx = Math.random() * 4 - 2;
            children2.dy = Math.random() * 4 + 2;

            child2.push(children2);
        }


        update();
    }


    function Sky(): void {
        crc2.fillStyle = "#A9E2F3";
        crc2.fillRect(0, 0, crc2.canvas.width, 110);

        crc2.beginPath();
        crc2.moveTo(0, 110);
        crc2.lineTo(0, 260);
        crc2.lineTo(270, 110);
        crc2.lineTo(0, 110);
        crc2.closePath();

        crc2.fill();
    }


    function Cloud1(): void {
        crc2.beginPath();
        crc2.moveTo(90, 90);
        crc2.arc(85, 90, 17, 0, 2 * Math.PI);
        crc2.arc(100, 90, 20, 0, 2 * Math.PI);
        crc2.arc(75, 90, 20, 0, 2 * Math.PI);
        crc2.arc(90, 85, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
    }

    function Cloud2(): void {
        crc2.beginPath();
        crc2.moveTo(240, 60);
        crc2.arc(240, 60, 20, 0, 2 * Math.PI);
        crc2.arc(233, 53, 20, 0, 2 * Math.PI);
        crc2.arc(247, 55, 20, 0, 2 * Math.PI);
        crc2.arc(235, 64, 20, 0, 2 * Math.PI);
        crc2.arc(225, 63, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
    }

    function Cloud3(): void {
        crc2.beginPath();
        crc2.moveTo(25, 195);
        crc2.arc(25, 195, 15, 0, 2 * Math.PI);
        crc2.arc(32, 178, 15, 0, 2 * Math.PI);
        crc2.arc(32, 192, 20, 0, 2 * Math.PI);
        crc2.arc(32, 178, 15, 0, 2 * Math.PI);
        crc2.arc(32, 192, 15, 0, 2 * Math.PI);
        crc2.moveTo(49, 195);
        crc2.arc(49, 195, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
    }

    function Hill(): void {
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(270, 110);
        crc2.lineTo(0, 260);
        crc2.closePath();

        crc2.strokeStyle = "#E6E6E6";
        crc2.stroke();
        crc2.fill();
    }

    function Sun(): void {
        let x: number = 20;
        let y: number = 20;
        let radius: number = 40;
        let startAngle: number = 0;
        let endAngle: number = 2 * Math.PI;

        crc2.moveTo(20, 20);
        crc2.beginPath();
        crc2.arc(x, y, radius, startAngle, endAngle, true);

        crc2.fillStyle = "#F4FA58";
        crc2.fill();
    }


    function Trees(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.moveTo(_x, _y - 40);
        crc2.lineTo(_x - 10, _y);
        crc2.lineTo(_x + 10, _y);
        crc2.closePath();

        crc2.fillStyle = "#0B6121";
        crc2.strokeStyle = "#0B6121";
        crc2.fill();
        crc2.stroke();

    }

    for (let i: number = 0; i < 35; i++) {
        let x: number = Math.floor(Math.random() * crc2.canvas.width);
        let y: number = Math.floor(Math.random() * (310 - 410) + crc2.canvas.height);
        Trees(x, y);
    }

    function update(): void {

        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < snowflakes.length; i++) {
            let snow: Snow = snowflakes[i];
            snow.move();
            snow.draw();
        }


        for (let i: number = 0; i < 3; i++) {
            let children2: Child2 = child2[i];
            children2.move();
            children2.draw();
        }


    }

}