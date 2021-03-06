var EA;
(function (EA) {
    window.addEventListener("load", showMainScreen);
    let sun;
    let bg;
    let bgImg;
    let allObjects = [];
    let childrenArray = [];
    let snowballs = [];
    let score = 0;
    let timer = 60;
    let helpTimer = 25;
    let snowballCheck;
    function showMainScreen() {
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
    function startGame(_event) {
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
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", throwSnowball);
        EA.crc2 = canvas.getContext("2d");
        bg = new EA.Background();
        bg.draw();
        sun = new EA.Sun();
        sun.x = Math.random() * EA.crc2.canvas.width;
        sun.y = Math.random() * 50;
        sun.draw();
        for (let i = 0; i < 6; i++) {
            EA.crc2.beginPath();
            EA.crc2.moveTo(0, EA.crc2.canvas.height - 100);
            EA.crc2.lineTo(EA.crc2.canvas.width, 150);
            EA.crc2.lineTo(EA.crc2.canvas.width, 180);
            EA.crc2.lineTo(0, EA.crc2.canvas.height - 70);
            EA.crc2.closePath();
            let x = Math.random() * EA.crc2.canvas.width;
            let y = Math.random() * EA.crc2.canvas.height;
            if (EA.crc2.isPointInPath(x, y)) {
                let tree = new EA.Tree();
                tree.x = x;
                tree.y = y;
                tree.draw();
            }
            else {
                i--;
            }
        }
        bgImg = EA.crc2.getImageData(0, 0, EA.crc2.canvas.width, EA.crc2.canvas.height);
        for (let i = 0; i < 4; i++) {
            createChild();
        }
        for (let i = 0; i < 6; i++) {
            let cloud = new EA.Cloud();
            cloud.x = Math.random() * EA.crc2.canvas.width;
            cloud.y = Math.random() * 100;
            cloud.dx = (Math.random() * 2) / 20;
            cloud.dy = 0;
            allObjects.push(cloud);
        }
        for (let i = 0; i < 25; i++) {
            let snowflake = new EA.Snowflakes();
            snowflake.x = Math.random() * EA.crc2.canvas.width;
            snowflake.y = Math.random() * 200;
            snowflake.dy = (Math.random() * 2) / 5;
            snowflake.dx = 0;
            allObjects.push(snowflake);
        }
        update();
    }
    function createChild() {
        let child = new EA.children();
        child.x = EA.crc2.canvas.width;
        child.y = (Math.random() * 100) + 150;
        child.dx = Math.random() * (-3);
        child.dy = child.dx * -0.25;
        child.state = "ridedown";
        childrenArray.push(child);
    }
    function throwSnowball(_event) {
        if (snowballCheck == true) {
            snowballCheck = false;
            let x = _event.clientX;
            let y = _event.clientY;
            let ball = new EA.snowball();
            ball.x = x;
            ball.y = y;
            ball.timer = 25;
            snowballs.push(ball);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
    }
    let address = "https://eia2-18.herokuapp.com";
    function sendRequestWithCustomData() {
        console.log("requestcustom");
        let xhr = new XMLHttpRequest();
        let sendString = "";
        sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;
        xhr.open("GET", address + "?" + sendString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        highscores();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    function endscreen() {
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
    function highscores() {
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
    function update() {
        if (document.getElementsByTagName("canvas")[0].getAttribute("style") == "display: initial;") {
            window.setTimeout(update, 1000 / 25);
            if (helpTimer == 0) {
                timer--;
                helpTimer = 26;
                snowballCheck = true;
            }
            helpTimer--;
            EA.crc2.clearRect(0, 0, EA.crc2.canvas.width, EA.crc2.canvas.height);
            EA.crc2.putImageData(bgImg, 0, 0);
            for (let i = 0; i < childrenArray.length; i++) {
                childrenArray[i].move();
                childrenArray[i].draw();
                if (childrenArray[i].state == "dead" && childrenArray[i].x < -10 || childrenArray[i].y > (EA.crc2.canvas.height + 10)) {
                    childrenArray.splice(i, 1);
                    createChild();
                    console.log("length:" + childrenArray.length);
                }
            }
            for (let i = 0; i < allObjects.length; i++) {
                allObjects[i].move();
                allObjects[i].draw();
            }
            for (let i = 0; i < snowballs.length; i++) {
                if (snowballs[i].timer > 0) {
                    snowballs[i].draw();
                }
                else if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    for (let k = 0; k < childrenArray.length; k++) {
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
})(EA || (EA = {}));
//# sourceMappingURL=A10.js.map