namespace A11 {


    export class baseStats {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
    }

    export class movement extends baseStats {
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

    export class Sun extends baseStats {
        draw(): void {
            crc2.fillStyle = "#F4FA58";
            crc2.strokeStyle = "#F4FA58";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }

    export class Tree extends baseStats {
        color2: string;
        draw(): void {
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
    export class Background extends baseStats {
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
            crc2.moveTo(0, height - 100);
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
            crc2.beginPath();
            //crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#BDBDBD";
            crc2.stroke();
            crc2.fill();

        }

        move(): void {

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

    export class children extends movement {
        state: string;
        draw(): void {
            if (this.state == "ridedown") {
                this.drawChild2();
            }
            if (this.state == "pullup") {
                this.drawChild2();
            }
            else { }
        }
        drawChild2(): void {
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

        move(): void {
            if (this.state == "ridedown") {

                if (this.y > crc2.canvas.height) {
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
                if (this.x > crc2.canvas.width) {
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
}