"use strict";
var ScriptRandomPoem;
(function (ScriptRandomPoem) {
    let subjectsArray = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicatesArray = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objectsArray = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjectsArray, predicatesArray, objectsArray);
    for (let index = 6; index >= 1; index--) {
        //console.log (index)
        let finalSentence = getVerse(subjectsArray, predicatesArray, objectsArray);
        console.log(finalSentence);
    }
    function getVerse(_subjectsArray, _predicatesArray, _objectsArray) {
        let bausteinSubjects = Math.floor(Math.random() * _subjectsArray.length);
        let bausteinPredicates = Math.floor(Math.random() * _predicatesArray.length);
        let bausteinObjects = Math.floor(Math.random() * _objectsArray.length);
        let randomPoem = subjectsArray[bausteinSubjects] + " " + predicatesArray[bausteinPredicates] + " " + objectsArray[bausteinObjects] + ".";
        //console.log(zufallsSatz)
        _subjectsArray.splice(bausteinSubjects, 1);
        _predicatesArray.splice(bausteinPredicates, 1);
        _objectsArray.splice(bausteinObjects, 1);
        return randomPoem;
    }
})(ScriptRandomPoem || (ScriptRandomPoem = {}));
//# sourceMappingURL=script.js.map