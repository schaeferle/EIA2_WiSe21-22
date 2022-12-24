"use strict";
/*
Aufgabe: L09.2
Name: Elias Schäfer
Matrikel: 268512
Datum: 24.12.2022
Quellen: Henning
*/
var WWL_Classes;
(function (WWL_Classes) {
    window.addEventListener("load", handleLoad);
    let snowflakes = [];
    let birds = [];
    let background;
    let xStep = 0;
    function handleLoad() {
        WWL_Classes.canvas = document.querySelector("canvas");
        if (!WWL_Classes.canvas)
            return;
        WWL_Classes.crc2 = WWL_Classes.canvas.getContext("2d");
        drawBackground();
        createSnowflakes();
        createBirds();
        setInterval(update, 50);
    }
    function drawBackground() {
        let posMountains = new WWL_Classes.PosValue(0, 375);
        let sunPos = new WWL_Classes.PosValue(350, 50);
        let forestStart = new WWL_Classes.PosValue(0, 450);
        let snowmanPos = new WWL_Classes.PosValue(100, 620);
        let birdhousePos = new WWL_Classes.PosValue(280, 667);
        drawGradient();
        drawSun(sunPos);
        drawMountains(posMountains, 60, 150);
        drawForest(forestStart);
        drawSnowman(snowmanPos);
        drawBirdHouse(birdhousePos);
        drawBirdsFloor();
        background = WWL_Classes.crc2.getImageData(0, 0, WWL_Classes.crc2.canvas.width, WWL_Classes.crc2.canvas.height);
    }
    function drawGradient() {
        let gradient = WWL_Classes.crc2.createLinearGradient(0, 0, 0, WWL_Classes.crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.5, "blue");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(1, "white");
        WWL_Classes.crc2.fillStyle = gradient;
        WWL_Classes.crc2.fillRect(0, 0, WWL_Classes.crc2.canvas.width, WWL_Classes.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 50;
        let gradient = WWL_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 5)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 1)");
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.fillStyle = gradient;
        WWL_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.restore();
    }
    function drawMountains(_position, _min, _max) {
        let stepMin = 10;
        let stepMax = 80;
        let x = 0;
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(0, 0);
        WWL_Classes.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            WWL_Classes.crc2.lineTo(x, y);
        } while (x < WWL_Classes.crc2.canvas.width);
        WWL_Classes.crc2.lineTo(x, 0);
        WWL_Classes.crc2.closePath();
        let gradient = WWL_Classes.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "HSLA(300, 10%, 50%, 1)");
        gradient.addColorStop(1, "HSLA(300, 10%, 100%, 1)");
        WWL_Classes.crc2.fillStyle = gradient;
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.restore();
    }
    function drawForest(_posStart) {
        let numBranches = 10;
        let maxRadius = 30;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 1 * Math.PI);
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_posStart.x, _posStart.y);
        WWL_Classes.crc2.fillStyle = "hsl(6, 69%, 12%)";
        let counterX = 0;
        let counterY = 0;
        for (let index = 0; index < numBranches; index++) {
            let x = 40;
            if (counterY == -10) {
                counterY = 0;
            }
            else {
                counterY = counterY - 10;
            }
            WWL_Classes.crc2.fillRect(counterX, counterY, 20, 40);
            counterX = counterX + x;
            console.log(counterX);
        }
        WWL_Classes.crc2.restore();
        drawTree({ x: 10, y: 440 });
    }
    function drawTree(_posStart) {
        let x = _posStart.x;
        let y = _posStart.y;
        let lengthLineTotal = 30;
        let numTrees = 10;
        for (let index = 0; index < numTrees; index++) {
            if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
                y = y + 10;
            }
            for (let index2 = 0; index2 < 3; index2++) {
                WWL_Classes.crc2.save();
                WWL_Classes.crc2.translate(x, y);
                WWL_Classes.crc2.beginPath();
                WWL_Classes.crc2.moveTo(0, 0);
                WWL_Classes.crc2.lineTo(-lengthLineTotal, 0);
                WWL_Classes.crc2.lineTo(0, -40);
                WWL_Classes.crc2.closePath();
                WWL_Classes.crc2.lineWidth = 2;
                WWL_Classes.crc2.strokeStyle = "darkgreen";
                WWL_Classes.crc2.stroke();
                WWL_Classes.crc2.fillStyle = "darkgreen";
                WWL_Classes.crc2.fill();
                WWL_Classes.crc2.restore();
                y = y - 20;
            }
            y = 440;
            if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
                y = y + 10;
            }
            lengthLineTotal = 30;
            for (let index3 = 0; index3 < 3; index3++) {
                WWL_Classes.crc2.save();
                WWL_Classes.crc2.translate(x, y);
                WWL_Classes.crc2.beginPath();
                WWL_Classes.crc2.moveTo(0, 0);
                WWL_Classes.crc2.lineTo(lengthLineTotal, 0);
                WWL_Classes.crc2.lineTo(0, -40);
                WWL_Classes.crc2.closePath();
                WWL_Classes.crc2.lineWidth = 2;
                WWL_Classes.crc2.strokeStyle = "green";
                WWL_Classes.crc2.stroke();
                WWL_Classes.crc2.fillStyle = "green";
                WWL_Classes.crc2.fill();
                WWL_Classes.crc2.restore();
                y = y - 20;
            }
            x = x + 40;
            y = 440;
            console.log(y);
        }
    }
    function drawSnowman(_position) {
        let x = _position.x;
        let y = _position.y - 125;
        let facePosition = new WWL_Classes.PosValue(x, y);
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.strokeStyle = "white";
        WWL_Classes.crc2.fillStyle = "white";
        WWL_Classes.crc2.lineWidth = 0;
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(0, -70, 30, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(0, -125, 25, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.restore();
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(facePosition.x, facePosition.y);
        WWL_Classes.crc2.fillStyle = "black";
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(-10, -10, 5, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(10, -10, 5, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.lineWidth = 5;
        WWL_Classes.crc2.strokeStyle = "orange";
        WWL_Classes.crc2.moveTo(0, 0);
        WWL_Classes.crc2.lineTo(15, 10);
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.restore();
    }
    function drawBirdHouse(_position) {
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.strokeStyle = "HSLA(30, 100%, 20%, 1)";
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(20, 0);
        WWL_Classes.crc2.lineTo(20, -100);
        WWL_Classes.crc2.lineWidth = 10;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(-20, 0);
        WWL_Classes.crc2.lineTo(-20, -100);
        WWL_Classes.crc2.lineWidth = 10;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(-50, -100);
        WWL_Classes.crc2.lineTo(50, -100);
        WWL_Classes.crc2.lineWidth = 15;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(-40, -105);
        WWL_Classes.crc2.lineTo(-40, -170);
        WWL_Classes.crc2.lineTo(40, -105);
        WWL_Classes.crc2.moveTo(40, -170);
        WWL_Classes.crc2.lineTo(-40, -170);
        WWL_Classes.crc2.lineTo(40, -105);
        WWL_Classes.crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(0, -220);
        WWL_Classes.crc2.lineTo(-60, -150);
        WWL_Classes.crc2.lineWidth = 5;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(0, -220);
        WWL_Classes.crc2.lineTo(60, -150);
        WWL_Classes.crc2.lineWidth = 5;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.restore();
    }
    function drawBirdsFloor() {
        let birdsAmount = 10;
        let birdsColours = ["hsl(269, 100%, 50%)", "hsl(336, 100%, 50%)", "hsl(19, 100%, 50%)",
            "hsla(344, 100%, 50%, 1)", "hsla(192, 100%, 50%, 1)", "hsla(58, 100%, 50%, 1)", "hsla(256, 22%, 50%, 1)",
            "hsla(70, 22%, 50%, 1)", "hsla(7, 22%, 24%, 1)", "hsla(7, 22%, 100%, 1)"];
        let birdsSize = { x: 375, y: 200 };
        let birdsDirection = [1, -1];
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(200, 600);
        for (let index = 0; index < birdsAmount; index++) {
            let x = (Math.random() - 0.5) * birdsSize.x;
            let y = -(Math.random() * birdsSize.y);
            let randomScale = (Math.random() * .3) + 0.2;
            WWL_Classes.crc2.save();
            WWL_Classes.crc2.translate(x, y);
            WWL_Classes.crc2.scale(randomScale, randomScale);
            WWL_Classes.crc2.scale(birdsDirection[Math.floor(Math.random() * (3) - 1)], 1);
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.rotate((Math.PI / 180) * 30);
            WWL_Classes.crc2.arc(8, 12, 50, 0, 1 * Math.PI, false);
            WWL_Classes.crc2.fillStyle = birdsColours[index];
            WWL_Classes.crc2.lineWidth = 5;
            WWL_Classes.crc2.strokeStyle = "black";
            WWL_Classes.crc2.fill();
            WWL_Classes.crc2.stroke();
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.moveTo(-60, 25);
            WWL_Classes.crc2.lineTo(-80, 15);
            WWL_Classes.crc2.lineTo(-60, -2);
            WWL_Classes.crc2.fillStyle = "orange";
            WWL_Classes.crc2.fill();
            WWL_Classes.crc2.closePath();
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.arc(0 - 40, 0 + 8, 23, 0, 2 * Math.PI, false);
            WWL_Classes.crc2.fillStyle = birdsColours[index + 1];
            WWL_Classes.crc2.fill();
            WWL_Classes.crc2.stroke();
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.moveTo(15, 60);
            WWL_Classes.crc2.lineTo(40, 100);
            WWL_Classes.crc2.lineWidth = 5;
            WWL_Classes.crc2.stroke();
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.moveTo(30, 60);
            WWL_Classes.crc2.lineTo(55, 95);
            WWL_Classes.crc2.lineWidth = 5;
            WWL_Classes.crc2.stroke();
            WWL_Classes.crc2.restore();
        }
        WWL_Classes.crc2.restore();
    }
    function createSnowflakes() {
        for (let index = 0; index < 175; index++) {
            xStep = xStep + 5;
            let snowflake = new WWL_Classes.Snowflake(1);
            snowflake.create(xStep);
            snowflakes.push(snowflake);
        }
    }
    function createBirds() {
        for (let index = 0; index < 15; index++) {
            xStep = xStep + 5;
            let bird = new WWL_Classes.BirdSky();
            birds.push(bird);
        }
    }
    function update() {
        WWL_Classes.crc2.putImageData(background, 0, 0);
        WWL_Classes.crc2.fillRect(0, 0, WWL_Classes.crc2.canvas.width, WWL_Classes.crc2.canvas.height);
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50);
        }
        for (let bird of birds) {
            bird.move(1 / 50);
        }
    }
})(WWL_Classes || (WWL_Classes = {}));
//# sourceMappingURL=script.js.map