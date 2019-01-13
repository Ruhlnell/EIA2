var Aufgabe10;
(function (Aufgabe10) {
    class Snow {
        draw() {
            Aufgabe10.crc2.beginPath();
            //crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.fillStyle = "#FFFFFF";
            Aufgabe10.crc2.strokeStyle = "#BDBDBD";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        move() {
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 0;
            }
            this.draw();
        }
    }
    Aufgabe10.Snow = Snow;
    class Child2 {
        draw() {
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 225, 195, 3, 0, 2 * Math.PI);
            Aufgabe10.crc2.moveTo(this.x + 225, 195);
            Aufgabe10.crc2.lineTo(this.x + 225, 206);
            Aufgabe10.crc2.moveTo(this.x + 225, 206);
            Aufgabe10.crc2.lineTo(this.x + 220, 210);
            Aufgabe10.crc2.moveTo(this.x + 225, 200);
            Aufgabe10.crc2.lineTo(this.x + 220, 202);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            //Sleigh2
            Aufgabe10.crc2.moveTo(this.x + 215, 215);
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.lineTo(this.x + 215, 215);
            Aufgabe10.crc2.lineTo(this.x + 230, 205);
            Aufgabe10.crc2.moveTo(this.x + 221, 212);
            Aufgabe10.crc2.lineTo(this.x + 221, 218);
            Aufgabe10.crc2.moveTo(this.x + 227, 208);
            Aufgabe10.crc2.lineTo(this.x + 227, 214);
            Aufgabe10.crc2.moveTo(this.x + 232, 210);
            Aufgabe10.crc2.lineTo(this.x + 215, 220);
            Aufgabe10.crc2.fillStyle = "#610B0B";
            Aufgabe10.crc2.strokeStyle = "#610B0B";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        move() {
            if (this.y > 400) {
                this.y = 0;
                this.x = 520;
            }
            this.x += -4;
            this.y += 2;
            this.draw();
        }
    }
    Aufgabe10.Child2 = Child2;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Classes.js.map