"use strict";
var L09_1_OldMcDonaldsFarm;
(function (L09_1_OldMcDonaldsFarm) {
    class Animal {
        name;
        type;
        sound;
        food;
        foodPortion;
        foodAmount;
        constructor(_name, _type, _sound, _food, _foodPortion, _foodAmount) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
            this.foodPortion = _foodPortion;
            this.foodAmount = _foodAmount;
        }
        sing() {
            return `<h2>${this.name}</h2> 
        "Old MacDonald had a zoo, ee-ah ee-ah oh! <br>
        And in that zoo he had a ${this.type}, ee-ah ee-ah oh! <br>
        With a ${this.sound}-${this.sound} here, and a ${this.sound}-${this.sound} there, <br>
        
        Here a ${this.sound}, there a ${this.sound},<br>
        Everywhere a ${this.sound}-${this.sound}! <br>
        Old MacDonald had a zoo ee-ah ee-ah oh!" <br>`;
        }
        eat() {
            return `<br>${this.name} ate ${this.foodPortion} kg ${this.food} today.<br>`;
        }
    }
    L09_1_OldMcDonaldsFarm.Animal = Animal;
})(L09_1_OldMcDonaldsFarm || (L09_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=script.js.map