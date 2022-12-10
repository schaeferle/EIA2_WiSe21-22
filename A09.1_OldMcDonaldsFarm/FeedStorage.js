"use strict";
/*
 Aufgabe:<L09.1_OldMcDonaldsFarm>
 Name: <Elias Schäfer>
 Matrikel: <268512>
 Datum: <10.12.2022>
 Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var L09_1_OldMcDonaldsFarm;
(function (L09_1_OldMcDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let lion = new L09_1_OldMcDonaldsFarm.Animal("LION Simba", "lion ", "roar", "meat", 15, 95);
    let monkey = new L09_1_OldMcDonaldsFarm.Animal("MONKEY King Kong", "monkey", "ugah", "banana", 1, 21);
    let penguin = new L09_1_OldMcDonaldsFarm.Animal("PENGUIN Karuso", "penguin", "flipflop", "fish", 3, 23);
    let parrot = new L09_1_OldMcDonaldsFarm.Animal("PARROT Rosalinda", "parrot", "arara", "seeds", 0.5, 5.5);
    let elephant = new L09_1_OldMcDonaldsFarm.Animal("ELEPHANT Benjamin", "elephant", "töörrööö", "sugar cubes", 5, 35);
    let allAnimals = [lion, monkey, penguin, parrot, elephant];
    function handleLoad(_event) {
        startDay();
        document.querySelector("#nextDay").addEventListener("click", newDay);
    }
    function startDay() {
        for (let i = 0; i < allAnimals.length; i++) {
            let p = document.createElement("p");
            p.innerHTML = allAnimals[i].sing() + allAnimals[i].eat();
            let textArea = document.getElementById("textarea");
            textArea.appendChild(p);
        }
        newDay();
    }
    function newDay() {
        for (let index = 0; index < allAnimals.length; index++) {
            allAnimals[index].foodAmount -= allAnimals[index].foodPortion;
        }
        let storageDiv = document.getElementById("storage");
        storageDiv.innerHTML = "<h2>ANIMAL FEED STORAGE</h2>" +
            allAnimals[0].foodAmount + " kg " + allAnimals[0].food + "<br>" +
            allAnimals[1].foodAmount + " kg " + allAnimals[1].food + "<br>" +
            allAnimals[2].foodAmount + " kg " + allAnimals[2].food + "<br>" +
            allAnimals[3].foodAmount + " kg " + allAnimals[3].food + "<br>" +
            allAnimals[4].foodAmount + " kg " + allAnimals[4].food + "<br>";
        if (allAnimals[0].foodAmount <= 0) {
            alert("Attention! Some animals are starving!");
            window.location.reload();
        }
    }
})(L09_1_OldMcDonaldsFarm || (L09_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=FeedStorage.js.map