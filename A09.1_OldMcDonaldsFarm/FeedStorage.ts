/*
 Aufgabe:<L09.1_OldMcDonaldsFarm>
 Name: <Elias Schäfer>
 Matrikel: <268512>
 Datum: <10.12.2022>
 Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
namespace L09_1_OldMcDonaldsFarm {
    window.addEventListener("load", handleLoad);

    
    let lion: Animal = new Animal("LION Simba", "lion ", "roar", "meat", 15, 95);
    let monkey: Animal = new Animal("MONKEY King Kong", "monkey", "ugah", "banana", 1, 21);
    let penguin: Animal = new Animal("PENGUIN Karuso", "penguin", "flipflop", "fish", 3, 23);
    let parrot: Animal = new Animal("PARROT Rosalinda", "parrot", "arara", "seeds", 0.5, 5.5);
    let elephant: Animal = new Animal("ELEPHANT Benjamin", "elephant", "töörrööö", "sugar cubes", 5, 35);
    let allAnimals:  Animal[] = [lion, monkey, penguin, parrot, elephant];

    

    function handleLoad(_event: Event): void {
        startDay();
        document.querySelector("#nextDay").addEventListener("click", newDay);
    }


    function startDay(): void {

        for (let i: number = 0; i < allAnimals.length; i++) {
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerHTML = allAnimals[i].sing() + allAnimals[i].eat();
            let textArea: HTMLDivElement = <HTMLDivElement>document.getElementById("textarea");
            textArea.appendChild(p);  
        }
        newDay();
    }

    function newDay(): void {
        
        for (let index: number = 0; index < allAnimals.length; index++) {
          allAnimals[index].foodAmount -= allAnimals[index].foodPortion;
        } 

        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "<h2>ANIMAL FEED STORAGE</h2>"  + 
        allAnimals[0].foodAmount + " kg " + allAnimals[0].food  + "<br>" + 
        allAnimals[1].foodAmount + " kg " + allAnimals[1].food  + "<br>" +
        allAnimals[2].foodAmount + " kg " + allAnimals[2].food  + "<br>" +
        allAnimals[3].foodAmount + " kg " + allAnimals[3].food  + "<br>" +
        allAnimals[4].foodAmount + " kg " + allAnimals[4].food  + "<br>" ;

        if (allAnimals[0].foodAmount <= 0) {
            alert("Attention! Some animals are starving!");
            window.location.reload(); }


    }

}