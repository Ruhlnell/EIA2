namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        console.log(crc2);
        drawSky();
        drawHill();
        drawSun();
        drawChild1();
        drawChild2();
        drawSleigh1();
        drawSleigh2();
        drawCloud1();
        drawCloud2();
        drawCloud3();
       // drawCloud4();

        for (let i: number = 0; i < 35; i++) {
            let x: number = Math.floor(Math.random() * crc2.canvas.width);
            let y: number = Math.floor(Math.random() * (310 - 410) + crc2.canvas.height);
            drawTree(x, y);
        }

        for (let i: number = 0; i < 220; i++) {
            let a: number = Math.floor(Math.random() * crc2.canvas.width);
            let b: number = Math.floor(Math.random() * crc2.canvas.height);
            drawSnowflake(a, b);
        }
    }

    function drawSky(): void {
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

    function drawSnowflake(_a: number, _b: number): void {
        crc2.beginPath();
        crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
        
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fill();
    }

    function drawCloud1(): void {
        crc2.beginPath();
        crc2.moveTo(90, 90);
        crc2.arc(85, 90, 17, 0, 2 * Math.PI);
        crc2.arc(100, 90, 20, 0, 2 * Math.PI);
        crc2.arc(75, 90, 20, 0, 2 * Math.PI);
        crc2.arc(90, 85, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
    }

    function drawCloud2(): void {
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

    function drawCloud3(): void {
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
    
    function drawHill(): void {
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(270, 110);
        crc2.lineTo(0, 260);
        crc2.closePath();

        crc2.strokeStyle = "#E6E6E6";
        crc2.stroke();
        crc2.fill();
    }

    function drawSun(): void {
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

    function drawChild1(): void {
        crc2.moveTo(90, 230);
        crc2.beginPath();
        crc2.arc(90, 230, 3, 0, 2 * Math.PI);
        crc2.lineTo(90, 234);
        crc2.lineTo(85, 238);
        crc2.moveTo(90, 234);
        crc2.lineTo(95, 230);
        crc2.moveTo(90, 234);
        crc2.lineTo(90, 240);
        crc2.lineTo(85, 245);
        crc2.moveTo(90, 240);
        crc2.lineTo(95, 245);
        crc2.closePath();

        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }

    function drawChild2(): void {
        crc2.moveTo(225, 195);
        crc2.beginPath();
        crc2.arc(225, 195, 3, 0, 2 * Math.PI);
        crc2.moveTo(225, 195);
        crc2.lineTo(225, 206);
        crc2.moveTo(225, 206);
        crc2.lineTo(220, 210);
        crc2.moveTo(225, 200);
        crc2.lineTo(220, 202);
        crc2.closePath();

        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }

    function drawSleigh1(): void {
        crc2.moveTo(85, 238);
        crc2.beginPath();
        crc2.lineTo(80, 240);
        crc2.lineTo(62, 251);
        crc2.moveTo(75, 243);
        crc2.lineTo(75, 251);
        crc2.moveTo(67, 248);
        crc2.lineTo(67, 255);
        crc2.moveTo(80, 248);
        crc2.lineTo(62, 258);
        crc2.closePath();

        crc2.fillStyle = "#61380B";
        crc2.strokeStyle = "#61380B";
        crc2.stroke();
        crc2.fill();
    }

    function drawSleigh2(): void {
        crc2.moveTo(215, 215);
        crc2.beginPath();
        crc2.lineTo(215, 215);
        crc2.lineTo(230, 205);
        crc2.moveTo(221, 212);
        crc2.lineTo(221, 218);
        crc2.moveTo(227, 208);
        crc2.lineTo(227, 214);
        crc2.moveTo(232, 210);
        crc2.lineTo(215, 220);

        crc2.fillStyle = "#610B0B";
        crc2.strokeStyle = "#610B0B";
        crc2.stroke();
        crc2.fill();
    }

    function drawTree(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(this.x+5, this.y + 40);
        crc2.lineTo(this.x- 5, this.y+40);
        crc2.lineTo(this.x + 10, this.y+20);
        crc2.closePath();

        crc2.fillStyle = "#0B6121";
        crc2.strokeStyle = "#0B6121";
        crc2.fill();
        crc2.stroke();
    }
}