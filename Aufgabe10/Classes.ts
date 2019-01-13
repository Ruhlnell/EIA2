namespace Aufgabe10 {
    export class Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

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

    export class Child2 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


        draw(): void {

            crc2.moveTo(this.x, this.y);
            crc2.beginPath();

            crc2.arc(this.x + 225, 195, 3, 0, 2 * Math.PI);

            crc2.moveTo(this.x + 225, 195);
            crc2.lineTo(this.x + 225, 206);
            crc2.moveTo(this.x + 225, 206);
            crc2.lineTo(this.x + 220, 210);
            crc2.moveTo(this.x + 225, 200);
            crc2.lineTo(this.x + 220, 202);
            crc2.closePath();

            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();

            //Sleigh2
            crc2.moveTo(this.x + 215, 215);
            crc2.beginPath();
            crc2.lineTo(this.x + 215, 215);
            crc2.lineTo(this.x + 230, 205);
            crc2.moveTo(this.x + 221, 212);
            crc2.lineTo(this.x + 221, 218);
            crc2.moveTo(this.x + 227, 208);
            crc2.lineTo(this.x + 227, 214);
            crc2.moveTo(this.x + 232, 210);
            crc2.lineTo(this.x + 215, 220);

            crc2.fillStyle = "#610B0B";
            crc2.strokeStyle = "#610B0B";
            crc2.stroke();
            crc2.fill();
        }

        move(): void {

            if (this.y > 400) {
                this.y = 0;
                this.x = 520;
            }

            this.x += - 4;
            this.y += 2;
            this.draw();


        }


    }


}