namespace EA {


    export class classes {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
    }

    export class movement extends classes {
        dx: number;
        dy: number;
        move(): void {
            this.y += this.dy;
            this.x += this.dx;
        }
    }

    export class Cloud extends movement {
        draw(): void {
crc2.beginPath();
        crc2.moveTo(240, 60);
        crc2.arc(240, 60, 20, 0, 2 * Math.PI);
        crc2.arc(233, 53, 20, 0, 2 * Math.PI);
        crc2.arc(247, 55, 20, 0, 2 * Math.PI);
        crc2.arc(235, 64, 20, 0, 2 * Math.PI);
        crc2.arc(225, 63, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
       
                crc2.beginPath();
        crc2.moveTo(90, 90);
        crc2.arc(85, 90, 17, 0, 2 * Math.PI);
        crc2.arc(100, 90, 20, 0, 2 * Math.PI);
        crc2.arc(75, 90, 20, 0, 2 * Math.PI);
        crc2.arc(90, 85, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
            
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
    }

    export class Sun extends classes {
        draw(): void {
            crc2.lineWidth = 3;
            crc2.fillStyle = "#F4FA58";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }

    export class Tree extends classes {
        color2: string;
        draw(): void {
            crc2.fillStyle = "#0B6121";
            crc2.strokeStyle = "#0B6121";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y - 21);
            crc2.lineTo(this.x, this.y - 60);
            crc2.lineTo(this.x + 15, this.y - 21);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }

    }
    
    
    export class Background extends classes {
        draw(): void {
            let width: number = crc2.canvas.width;
            let height: number = crc2.canvas.height;
            crc2.fillStyle = "#A9E2F3";
            crc2.strokeStyle = "#A9E2F3cc";
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(width, 0);
            crc2.lineTo(width, height);
            crc2.lineTo(0, height);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#FFFFFF";

            crc2.beginPath();
            crc2.moveTo(0, height - 170);
            crc2.lineTo(width, 150);
            crc2.lineTo(width, height);
            crc2.lineTo(0, height);
            crc2.closePath();


            crc2.fill();
            crc2.stroke();

        }
    }
    export class Snowflakes extends movement {
        draw(): void {
            crc2.strokeStyle = "#BDBDBD";
            crc2.fillStyle = "#FFF";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.closePath
            crc2.stroke();
            crc2.fill();
        }
        move(): void {
            if (this.y >= crc2.canvas.height) {
                this.y = 0;
            }
            else {
                this.y += this.dy;
            }
        }
    }

    export class snowball extends classes {

        timer: number;
        move(): void {

        }
        draw(): void {

            if (this.timer >= 0) {
                console.log(">=0");
                crc2.fillStyle = "#FFF";
                crc2.strokeStyle = "#BDBDBD";
                crc2.lineWidth = 1;

                crc2.beginPath();
                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                this.timer--;
            }


        }

        checkIfHitDown(_x: number, _y: number): boolean {
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 7, _y + 2);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 6, _y + 4);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 15);
            crc2.arc(_x, _y - 15, 15, 0, 2 * Math.PI);
            crc2.moveTo(_x, _y - 10);
            crc2.lineTo(_x - 6, _y + 2);
            crc2.moveTo(_x, _y - 12);
            crc2.lineTo(_x - 7, _y - 2);
            crc2.moveTo(_x + 8, _y + 5);
            crc2.lineTo(_x - 10, _y + 7);
            crc2.moveTo(_x + 4, _y + 6);
            crc2.lineTo(_x + 3, _y + 12);
            crc2.moveTo(_x - 6, _y + 7);
            crc2.lineTo(_x - 8, _y + 14);
            crc2.moveTo(_x + 8, _y + 12);
            crc2.lineTo(_x - 10, _y + 15);
            crc2.closePath();
            console.log("bum");
            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }

        hitUp(_x: number, _y: number): boolean {
            crc2.lineWidth = 50;
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 2, _y + 7);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 1, _y + 8);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 15);
            crc2.arc(_x, _y - 15, 15, 0, 2 * Math.PI);
            crc2.moveTo(_x, _y - 10);
            crc2.lineTo(_x - 6, _y + 2);
            crc2.moveTo(_x, _y - 12);
            crc2.lineTo(_x - 7, _y - 2);


            crc2.moveTo(_x - 8, _y + 5);
            crc2.lineTo(_x - 28, _y + 7);
            crc2.moveTo(_x - 12, _y + 6);
            crc2.lineTo(_x - 15, _y + 12);
            crc2.moveTo(_x - 22, _y + 7);
            crc2.lineTo(_x - 25, _y + 14);
            crc2.moveTo(_x - 8, _y + 12);
            crc2.lineTo(_x - 30, _y + 15);
            crc2.closePath();
            console.log("bum");
            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }





    }

    export class children extends movement {
        state: string;
        draw(): void {
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


        drawChildDown(): void {
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
            this.drawPath(this.x, this.y);
            crc2.fill();
            crc2.stroke();
        }

        drawChildUp(): void {
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 2, this.y + 7);
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 1, this.y + 8);
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 15);
            crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            crc2.moveTo(this.x, this.y - 10);
            crc2.lineTo(this.x - 6, this.y + 2);
            crc2.moveTo(this.x, this.y - 12);
            crc2.lineTo(this.x - 7, this.y - 2);


            crc2.moveTo(this.x - 8, this.y + 5);
            crc2.lineTo(this.x - 28, this.y + 7);
            crc2.moveTo(this.x - 12, this.y + 6);
            crc2.lineTo(this.x - 15, this.y + 12);
            crc2.moveTo(this.x - 22, this.y + 7);
            crc2.lineTo(this.x - 25, this.y + 14);
            crc2.moveTo(this.x - 8, this.y + 12);
            crc2.lineTo(this.x - 30, this.y + 15);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }
        
                drawChildDead(): void {
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x + 8, this.y + 5);
            crc2.lineTo(this.x - 10, this.y + 7);
            crc2.moveTo(this.x + 4, this.y + 6);
            crc2.lineTo(this.x + 3, this.y + 12);
            crc2.moveTo(this.x - 6, this.y + 7);
            crc2.lineTo(this.x - 8, this.y + 14);
            crc2.moveTo(this.x + 8, this.y + 12);
            crc2.lineTo(this.x - 10, this.y + 15);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }


        move(): void {
            if (this.state == "ridedown") {
                if (this.x < 0 || this.y > crc2.canvas.height) {
                    this.state = "pullup";
                }
            }
            if (this.state == "pullup" && this.x > crc2.canvas.width) {
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

        speed(): number {
            if (this.state == "ridedown") {
                return Math.floor(this.dx * this.dy * -1 * 200);
            }
            if (this.state == "pullup") {
                return Math.floor(this.dx * this.dy * -1 * 100);
            }
        }

        drawPath(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 7, _y + 2);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 6, _y + 4);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 15);
            crc2.arc(_x, _y - 15, 2, 0, 2 * Math.PI);
            crc2.moveTo(_x, _y - 10);
            crc2.lineTo(_x - 6, _y + 2);
            crc2.moveTo(_x, _y - 12);
            crc2.lineTo(_x - 7, _y - 2);
            crc2.moveTo(_x + 8, _y + 5);
            crc2.lineTo(_x - 10, _y + 7);
            crc2.moveTo(_x + 4, _y + 6);
            crc2.lineTo(_x + 3, _y + 12);
            crc2.moveTo(_x - 6, _y + 7);
            crc2.lineTo(_x - 8, _y + 14);
            crc2.moveTo(_x + 8, _y + 12);
            crc2.lineTo(_x - 10, _y + 15);
            crc2.closePath();
        }




    }
}