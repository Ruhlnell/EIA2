var A11;
(function (A11) {
    class baseStats {
        move() { }
        draw() { }
    }
    A11.baseStats = baseStats;
    class movement extends baseStats {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    A11.movement = movement;
    class Cloud extends movement {
        draw() {
            A11.crc2.beginPath();
            A11.crc2.moveTo(240, 60);
            A11.crc2.arc(240, 60, 20, 0, 2 * Math.PI);
            A11.crc2.arc(233, 53, 20, 0, 2 * Math.PI);
            A11.crc2.arc(247, 55, 20, 0, 2 * Math.PI);
            A11.crc2.arc(235, 64, 20, 0, 2 * Math.PI);
            A11.crc2.arc(225, 63, 20, 0, 2 * Math.PI);
            A11.crc2.fillStyle = "#E0F2F7";
            A11.crc2.fill();
            A11.crc2.beginPath();
            A11.crc2.moveTo(90, 90);
            A11.crc2.arc(85, 90, 17, 0, 2 * Math.PI);
            A11.crc2.arc(100, 90, 20, 0, 2 * Math.PI);
            A11.crc2.arc(75, 90, 20, 0, 2 * Math.PI);
            A11.crc2.arc(90, 85, 20, 0, 2 * Math.PI);
            A11.crc2.fillStyle = "#E0F2F7";
            A11.crc2.fill();
            A11.crc2.beginPath();
            A11.crc2.moveTo(25, 195);
            A11.crc2.arc(25, 195, 15, 0, 2 * Math.PI);
            A11.crc2.arc(32, 178, 15, 0, 2 * Math.PI);
            A11.crc2.arc(32, 192, 20, 0, 2 * Math.PI);
            A11.crc2.arc(32, 178, 15, 0, 2 * Math.PI);
            A11.crc2.arc(32, 192, 15, 0, 2 * Math.PI);
            A11.crc2.moveTo(49, 195);
            A11.crc2.arc(49, 195, 15, 0, 2 * Math.PI);
            A11.crc2.fillStyle = "#E0F2F7";
            A11.crc2.fill();
        }
    }
    A11.Cloud = Cloud;
    class Sun extends baseStats {
        draw() {
            A11.crc2.fillStyle = "#F4FA58";
            A11.crc2.strokeStyle = "#F4FA58";
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.Sun = Sun;
    class Tree extends baseStats {
        draw() {
            /*  crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y - 20);
            crc2.lineTo(this.x + 5, this.y - 20);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();  */
            A11.crc2.fillStyle = "#0B6121";
            A11.crc2.strokeStyle = "#0B6121";
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 15, this.y - 21);
            A11.crc2.lineTo(this.x, this.y - 60);
            A11.crc2.lineTo(this.x + 15, this.y - 21);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.Tree = Tree;
    class Background extends baseStats {
        draw() {
            let width = A11.crc2.canvas.width;
            let height = A11.crc2.canvas.height;
            A11.crc2.fillStyle = "#A9E2F3";
            A11.crc2.strokeStyle = "#A9E2F3cc";
            A11.crc2.beginPath();
            A11.crc2.moveTo(0, 0);
            A11.crc2.lineTo(width, 0);
            A11.crc2.lineTo(width, height);
            A11.crc2.lineTo(0, height);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.fillStyle = "#FFFFFF";
            A11.crc2.strokeStyle = "#FFFFFF";
            A11.crc2.beginPath();
            A11.crc2.moveTo(0, height - 100);
            A11.crc2.lineTo(width, 150);
            A11.crc2.lineTo(width, height);
            A11.crc2.lineTo(0, height);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.Background = Background;
    class Snowflakes extends movement {
        draw() {
            A11.crc2.beginPath();
            //crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
            A11.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
            A11.crc2.fillStyle = "#FFFFFF";
            A11.crc2.strokeStyle = "#BDBDBD";
            A11.crc2.stroke();
            A11.crc2.fill();
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
    A11.Snowflakes = Snowflakes;
    class children extends movement {
        draw() {
            if (this.state == "ridedown") {
                this.drawChild2();
            }
            if (this.state == "pullup") {
                this.drawChild2();
            }
            else { }
        }
        drawChild2() {
            A11.crc2.fillStyle = "#000000";
            A11.crc2.strokeStyle = "#000000";
            A11.crc2.lineWidth = 1;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x - 2, this.y + 7);
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x + 1, this.y + 8);
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x, this.y - 15);
            A11.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            A11.crc2.moveTo(this.x, this.y - 10);
            A11.crc2.lineTo(this.x - 6, this.y + 2);
            A11.crc2.moveTo(this.x, this.y - 12);
            A11.crc2.lineTo(this.x - 7, this.y - 2);
            A11.crc2.moveTo(this.x - 8, this.y + 5);
            A11.crc2.lineTo(this.x - 28, this.y + 7);
            A11.crc2.moveTo(this.x - 12, this.y + 6);
            A11.crc2.lineTo(this.x - 15, this.y + 12);
            A11.crc2.moveTo(this.x - 22, this.y + 7);
            A11.crc2.lineTo(this.x - 25, this.y + 14);
            A11.crc2.moveTo(this.x - 8, this.y + 12);
            A11.crc2.lineTo(this.x - 30, this.y + 15);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
        move() {
            if (this.state == "ridedown") {
                if (this.y > A11.crc2.canvas.height) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "pullup";
                }
                else if (this.x < 0) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "pullup";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }
            if (this.state == "pullup") {
                if (this.x > A11.crc2.canvas.width) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.state = "ridedown";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
            else { }
        }
    }
    A11.children = children;
})(A11 || (A11 = {}));
//# sourceMappingURL=Classes.js.map