namespace EA {
    window.addEventListener("load", showMainScreen);
    export let crc2: CanvasRenderingContext2D;
    let sun: Sun;
    let bg: Background;
    let bgImg: ImageData;
    let allObjects: classes[] = [];
    let childrenArray: children[] = [];
    let snowballs: snowball[] = [];
    let score: number = 0;
    let timer: number = 60;
    let helpTimer: number = 25;
    let snowballCheck: boolean;

    function showMainScreen(): void {
        allObjects = [];
        childrenArray = [];
        snowballs = [];

        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("highscore").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "initial";
        document.getElementById("spielen").addEventListener("click", startGame);
        document.getElementById("highscores").addEventListener("click", highscores);


    }

    function startGame(_event: Event): void {
        snowballCheck = true;
        score = 0;
        allObjects = [];
        childrenArray = [];
        snowballs = [];
        timer = 60;
        helpTimer = 25;
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("highscore").style.display = "none";
        document.getElementById("score").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        canvas.addEventListener("click", throwSnowball);
        crc2 = canvas.getContext("2d");

        bg = new Background();
        bg.draw();
        sun = new Sun();
        sun.x = Math.random() * crc2.canvas.width;
        sun.y = Math.random() * 50;
        sun.draw();
        for (let i: number = 0; i < 6; i++) {
            crc2.beginPath();
            crc2.moveTo(0, crc2.canvas.height - 100);
            crc2.lineTo(crc2.canvas.width, 150);
            crc2.lineTo(crc2.canvas.width, 180);
            crc2.lineTo(0, crc2.canvas.height - 70);
            crc2.closePath();
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            if (crc2.isPointInPath(x, y)) {

                let tree: Tree = new Tree();
                tree.x = x;
                tree.y = y;

                tree.draw();
            }

            else {
                i--;
            }
        }

        bgImg = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


        for (let i: number = 0; i < 4; i++) {
            createChild();
        }


        for (let i: number = 0; i < 6; i++) {
            let cloud: Cloud = new Cloud();
            cloud.x = Math.random() * crc2.canvas.width;
            cloud.y = Math.random() * 100;
            cloud.dx = (Math.random() * 2) / 20;
            cloud.dy = 0;
            allObjects.push(cloud);
        }

        for (let i: number = 0; i < 25; i++) {
            let snowflake: Snowflakes = new Snowflakes();
            snowflake.x = Math.random() * crc2.canvas.width;
            snowflake.y = Math.random() * 200;
            snowflake.dy = (Math.random() * 2) / 5;
            snowflake.dx = 0;

            allObjects.push(snowflake);
        }

        update();
    }


    function createChild(): void {
        let child: children = new children();
        child.x = crc2.canvas.width;
        child.y = (Math.random() * 100) + 150;
        child.dx = Math.random() * (- 3);
        child.dy = child.dx * -0.25;
        child.state = "ridedown";
        childrenArray.push(child);
    }


    function throwSnowball(_event: MouseEvent): void {
        if (snowballCheck == true) {
            snowballCheck = false;
            let x: number = _event.clientX;
            let y: number = _event.clientY;
            let ball: snowball = new snowball();
            ball.x = x;
            ball.y = y;
            ball.timer = 25;
            snowballs.push(ball);
        }
    }


    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        target.setAttribute("value", target.value);
    }


    let address: string = "https://eia2-18.herokuapp.com";


    function sendRequestWithCustomData(): void {
        console.log("requestcustom");
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let sendString: string = "";
        sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;

        xhr.open("GET", address + "?" + sendString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        highscores();
    }


    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }

    function endscreen(): void {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        document.getElementById("retry").style.display = "initial";
        document.getElementById("retry").addEventListener("click", startGame);

        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);

        document.getElementById("button").addEventListener("click", sendRequestWithCustomData);
    }

    function highscores(): void {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("highscore").style.display = "initial";

        document.getElementById("retry").style.display = "initial";
        document.getElementById("retry").addEventListener("click", startGame);
    }

    function update(): void {
        if (document.getElementsByTagName("canvas")[0].getAttribute("style") == "display: initial;") {
            window.setTimeout(update, 1000 / 25);

            if (helpTimer == 0) {
                timer--;
                helpTimer = 26;
                snowballCheck = true;
            }
            helpTimer--;
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(bgImg, 0, 0);

            for (let i: number = 0; i < childrenArray.length; i++) {
                childrenArray[i].move();
                childrenArray[i].draw();
                if (childrenArray[i].state == "dead" && childrenArray[i].x < -10 || childrenArray[i].y > (crc2.canvas.height + 10)) {
                    childrenArray.splice(i, 1);
                    createChild();
                    console.log("length:" + childrenArray.length);
                }
            }
            for (let i: number = 0; i < allObjects.length; i++) {
                allObjects[i].move();
                allObjects[i].draw();
            }
            for (let i: number = 0; i < snowballs.length; i++) {
                if (snowballs[i].timer > 0) {
                    snowballs[i].draw();
                }
                else if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    for (let k: number = 0; k < childrenArray.length; k++) {
                        if (snowballs[i].checkIfHitDown(childrenArray[k].x, childrenArray[k].y) == true && childrenArray[k].state == "ridedown") {

                            score += childrenArray[k].speed() * 10;
                            childrenArray[k].state = "dead";
                            console.log("hit");
                        }
                        if (snowballs[i].hitUp(childrenArray[k].x, childrenArray[k].y) == true && childrenArray[k].state == "pullup") {

                            score += childrenArray[k].speed() * 10;
                            childrenArray[k].state = "dead";
                            console.log("hit");
                        }
                        else {
                            console.log("else");
                        }
                    }
                }

            }


            document.getElementById("score").innerText = "Time:" + timer.toString() + "s" + " | Snowballs:" + (20 - snowballs.length).toString() + " Score:" + score.toString();
            if (snowballs.length > 19) {
                console.log(timer);
                if (snowballs[19].timer == 0) {
                    endscreen();
                }
            }
            if (timer == 0) {
                endscreen();
            }
        }
    }
}     