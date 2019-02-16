var EA;
(function (EA) {
    class classes {
        move() { }
        draw() { }
    }
    EA.classes = classes;
    class movement extends classes {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    EA.movement = movement;
    class Cloud extends movement {
        draw() {
            EA.crc2.beginPath();
            EA.crc2.moveTo(240, 60);
            EA.crc2.arc(240, 60, 20, 0, 2 * Math.PI);
            EA.crc2.arc(233, 53, 20, 0, 2 * Math.PI);
            EA.crc2.arc(247, 55, 20, 0, 2 * Math.PI);
            EA.crc2.arc(235, 64, 20, 0, 2 * Math.PI);
            EA.crc2.arc(225, 63, 20, 0, 2 * Math.PI);
            EA.crc2.fillStyle = "#E0F2F7";
            EA.crc2.fill();
            EA.crc2.beginPath();
            EA.crc2.moveTo(90, 90);
            EA.crc2.arc(85, 90, 17, 0, 2 * Math.PI);
            EA.crc2.arc(100, 90, 20, 0, 2 * Math.PI);
            EA.crc2.arc(75, 90, 20, 0, 2 * Math.PI);
            EA.crc2.arc(90, 85, 20, 0, 2 * Math.PI);
            EA.crc2.fillStyle = "#E0F2F7";
            EA.crc2.fill();
            EA.crc2.beginPath();
            EA.crc2.moveTo(25, 195);
            EA.crc2.arc(25, 195, 15, 0, 2 * Math.PI);
            EA.crc2.arc(32, 178, 15, 0, 2 * Math.PI);
            EA.crc2.arc(32, 192, 20, 0, 2 * Math.PI);
            EA.crc2.arc(32, 178, 15, 0, 2 * Math.PI);
            EA.crc2.arc(32, 192, 15, 0, 2 * Math.PI);
            EA.crc2.moveTo(49, 195);
            EA.crc2.arc(49, 195, 15, 0, 2 * Math.PI);
            EA.crc2.fillStyle = "#E0F2F7";
            EA.crc2.fill();
        }
    }
    EA.Cloud = Cloud;
    class Sun extends classes {
        draw() {
            EA.crc2.lineWidth = 3;
            EA.crc2.fillStyle = "#F4FA58";
            EA.crc2.beginPath();
            EA.crc2.moveTo(this.x, this.y);
            EA.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            EA.crc2.closePath();
            EA.crc2.fill();
        }
    }
    EA.Sun = Sun;
    class Tree extends classes {
        draw() {
            EA.crc2.fillStyle = "#0B6121";
            EA.crc2.strokeStyle = "#0B6121";
            EA.crc2.lineWidth = 2;
            EA.crc2.beginPath();
            EA.crc2.moveTo(this.x - 15, this.y - 21);
            EA.crc2.lineTo(this.x, this.y - 60);
            EA.crc2.lineTo(this.x + 15, this.y - 21);
            EA.crc2.closePath();
            EA.crc2.fill();
            EA.crc2.stroke();
        }
    }
    EA.Tree = Tree;
    class Background extends classes {
        draw() {
            let width = EA.crc2.canvas.width;
            let height = EA.crc2.canvas.height;
            EA.crc2.fillStyle = "#A9E2F3";
            EA.crc2.strokeStyle = "#A9E2F3cc";
            EA.crc2.beginPath();
            EA.crc2.moveTo(0, 0);
            EA.crc2.lineTo(width, 0);
            EA.crc2.lineTo(width, height);
            EA.crc2.lineTo(0, height);
            EA.crc2.closePath();
            EA.crc2.fill();
            EA.crc2.stroke();
            EA.crc2.fillStyle = "#FFFFFF";
            EA.crc2.strokeStyle = "#FFFFFF";
            EA.crc2.beginPath();
            EA.crc2.moveTo(0, height - 170);
            EA.crc2.lineTo(width, 150);
            EA.crc2.lineTo(width, height);
            EA.crc2.lineTo(0, height);
            EA.crc2.closePath();
            EA.crc2.fill();
            EA.crc2.stroke();
        }
    }
    EA.Background = Background;
    class Snowflakes extends movement {
        draw() {
            EA.crc2.strokeStyle = "#BDBDBD";
            EA.crc2.fillStyle = "#FFF";
            EA.crc2.lineWidth = 2;
            EA.crc2.beginPath();
            EA.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            EA.crc2.closePath;
            EA.crc2.stroke();
            EA.crc2.fill();
        }
        move() {
            if (this.y >= EA.crc2.canvas.height) {
                this.y = 0;
            }
            else {
                this.y += this.dy;
            }
        }
    }
    EA.Snowflakes = Snowflakes;
    class snowball extends classes {
        move() {
        }
        draw() {
            if (this.timer >= 0) {
                console.log(">=0");
                EA.crc2.fillStyle = "#FFF";
                EA.crc2.strokeStyle = "#BDBDBD";
                EA.crc2.lineWidth = 1;
                EA.crc2.beginPath();
                EA.crc2.moveTo(this.x, this.y);
                EA.crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                EA.crc2.closePath();
                EA.crc2.fill();
                EA.crc2.stroke();
                this.timer--;
            }
        }
        checkIfHitDown(_x, _y) {
            EA.crc2.lineWidth = 5;
            EA.crc2.beginPath();
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x - 7, _y + 2);
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x - 6, _y + 4);
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x, _y - 15);
            EA.crc2.arc(_x, _y - 15, 15, 0, 2 * Math.PI);
            EA.crc2.moveTo(_x, _y - 10);
            EA.crc2.lineTo(_x - 6, _y + 2);
            EA.crc2.moveTo(_x, _y - 12);
            EA.crc2.lineTo(_x - 7, _y - 2);
            EA.crc2.moveTo(_x + 8, _y + 5);
            EA.crc2.lineTo(_x - 10, _y + 7);
            EA.crc2.moveTo(_x + 4, _y + 6);
            EA.crc2.lineTo(_x + 3, _y + 12);
            EA.crc2.moveTo(_x - 6, _y + 7);
            EA.crc2.lineTo(_x - 8, _y + 14);
            EA.crc2.moveTo(_x + 8, _y + 12);
            EA.crc2.lineTo(_x - 10, _y + 15);
            EA.crc2.closePath();
            console.log("bum");
            if (EA.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        hitUp(_x, _y) {
            EA.crc2.lineWidth = 50;
            EA.crc2.beginPath();
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x - 2, _y + 7);
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x + 1, _y + 8);
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x, _y - 15);
            EA.crc2.arc(_x, _y - 15, 15, 0, 2 * Math.PI);
            EA.crc2.moveTo(_x, _y - 10);
            EA.crc2.lineTo(_x - 6, _y + 2);
            EA.crc2.moveTo(_x, _y - 12);
            EA.crc2.lineTo(_x - 7, _y - 2);
            EA.crc2.moveTo(_x - 8, _y + 5);
            EA.crc2.lineTo(_x - 28, _y + 7);
            EA.crc2.moveTo(_x - 12, _y + 6);
            EA.crc2.lineTo(_x - 15, _y + 12);
            EA.crc2.moveTo(_x - 22, _y + 7);
            EA.crc2.lineTo(_x - 25, _y + 14);
            EA.crc2.moveTo(_x - 8, _y + 12);
            EA.crc2.lineTo(_x - 30, _y + 15);
            EA.crc2.closePath();
            console.log("bum");
            if (EA.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    EA.snowball = snowball;
    class children extends movement {
        draw() {
            if (this.state == "ridedown") {
                this.drawChildDown();
            }
            if (this.state == "dead") {
                this.drawChildDead();
            }
            if (this.state == "pullup") {
                this.drawChildUp();
            }
        }
        drawChildDown() {
            EA.crc2.fillStyle = "#000000";
            EA.crc2.strokeStyle = "#000000";
            EA.crc2.lineWidth = 1;
            this.drawPath(this.x, this.y);
            EA.crc2.fill();
            EA.crc2.stroke();
        }
        drawChildUp() {
            EA.crc2.fillStyle = "#000000";
            EA.crc2.strokeStyle = "#000000";
            EA.crc2.lineWidth = 1;
            EA.crc2.beginPath();
            EA.crc2.moveTo(this.x, this.y);
            EA.crc2.lineTo(this.x - 2, this.y + 7);
            EA.crc2.moveTo(this.x, this.y);
            EA.crc2.lineTo(this.x + 1, this.y + 8);
            EA.crc2.moveTo(this.x, this.y);
            EA.crc2.lineTo(this.x, this.y - 15);
            EA.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            EA.crc2.moveTo(this.x, this.y - 10);
            EA.crc2.lineTo(this.x - 6, this.y + 2);
            EA.crc2.moveTo(this.x, this.y - 12);
            EA.crc2.lineTo(this.x - 7, this.y - 2);
            EA.crc2.moveTo(this.x - 8, this.y + 5);
            EA.crc2.lineTo(this.x - 28, this.y + 7);
            EA.crc2.moveTo(this.x - 12, this.y + 6);
            EA.crc2.lineTo(this.x - 15, this.y + 12);
            EA.crc2.moveTo(this.x - 22, this.y + 7);
            EA.crc2.lineTo(this.x - 25, this.y + 14);
            EA.crc2.moveTo(this.x - 8, this.y + 12);
            EA.crc2.lineTo(this.x - 30, this.y + 15);
            EA.crc2.closePath();
            EA.crc2.fill();
            EA.crc2.stroke();
        }
        drawChildDead() {
            EA.crc2.fillStyle = "#000000";
            EA.crc2.strokeStyle = "#000000";
            EA.crc2.lineWidth = 1;
            EA.crc2.beginPath();
            EA.crc2.moveTo(this.x + 8, this.y + 5);
            EA.crc2.lineTo(this.x - 10, this.y + 7);
            EA.crc2.moveTo(this.x + 4, this.y + 6);
            EA.crc2.lineTo(this.x + 3, this.y + 12);
            EA.crc2.moveTo(this.x - 6, this.y + 7);
            EA.crc2.lineTo(this.x - 8, this.y + 14);
            EA.crc2.moveTo(this.x + 8, this.y + 12);
            EA.crc2.lineTo(this.x - 10, this.y + 15);
            EA.crc2.closePath();
            EA.crc2.fill();
            EA.crc2.stroke();
        }
        move() {
            if (this.state == "ridedown") {
                if (this.x < 0 || this.y > EA.crc2.canvas.height) {
                    this.state = "pullup";
                }
            }
            if (this.state == "pullup" && this.x > EA.crc2.canvas.width) {
                this.state = "ridedown";
            }
            if (this.state == "pullup") {
                this.x -= (this.dx / 2);
                this.y -= (this.dy / 2);
            }
            if (this.state == "ridedown" || this.state == "dead") {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
        speed() {
            if (this.state == "ridedown") {
                return Math.floor(this.dx * this.dy * -1 * 200);
            }
            if (this.state == "pullup") {
                return Math.floor(this.dx * this.dy * -1 * 100);
            }
        }
        drawPath(_x, _y) {
            EA.crc2.beginPath();
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x - 7, _y + 2);
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x - 6, _y + 4);
            EA.crc2.moveTo(_x, _y);
            EA.crc2.lineTo(_x, _y - 15);
            EA.crc2.arc(_x, _y - 15, 2, 0, 2 * Math.PI);
            EA.crc2.moveTo(_x, _y - 10);
            EA.crc2.lineTo(_x - 6, _y + 2);
            EA.crc2.moveTo(_x, _y - 12);
            EA.crc2.lineTo(_x - 7, _y - 2);
            EA.crc2.moveTo(_x + 8, _y + 5);
            EA.crc2.lineTo(_x - 10, _y + 7);
            EA.crc2.moveTo(_x + 4, _y + 6);
            EA.crc2.lineTo(_x + 3, _y + 12);
            EA.crc2.moveTo(_x - 6, _y + 7);
            EA.crc2.lineTo(_x - 8, _y + 14);
            EA.crc2.moveTo(_x + 8, _y + 12);
            EA.crc2.lineTo(_x - 10, _y + 15);
            EA.crc2.closePath();
        }
    }
    EA.children = children;
})(EA || (EA = {}));
//# sourceMappingURL=Class.js.map