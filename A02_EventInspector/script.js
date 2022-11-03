"use strict";
/*
Aufgabe: <L02_EventInspector>
Name: <Elias Schäfer>
Matrikel: <268512>
Datum: <20.10.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var ScriptRandomPoem;
(function (ScriptRandomPoem) {
    window.addEventListener("load", handleLoad);
    let span;
    let button;
    function handleLoad(_event) {
        let div0 = document.createElement("div");
        div0.classList.add("div0");
        document.body.appendChild(div0);
        let div1 = document.createElement("div");
        div1.classList.add("div1");
        document.body.appendChild(div1);
        span = document.querySelector(".span");
        document.addEventListener("mousemove", setInfoBox);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let target = _event.target;
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "X-Position: " + x + "px" + "<br>" + "Y-Position: " + y + "px" + "<br>" + target;
    }
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.currentTarget);
    }
})(ScriptRandomPoem || (ScriptRandomPoem = {}));
//# sourceMappingURL=script.js.map