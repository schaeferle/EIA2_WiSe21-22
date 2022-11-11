"use strict";
/*
 Aufgabe:<L03_Einkaufsliste_Formular>
 Name: <Elias Schäfer>
 Matrikel: <268512>
 Datum: <02.11.2022>
 Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var Einkaufsliste;
(function (Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    let productButton = document.querySelector("#add");
    let listItem = document.querySelector("#list");
    function handleLoad() {
        productButton.addEventListener("click", addNewItem);
        writeItems();
    }
    function writeItems() {
        let list = document.querySelector("#list");
        list.innerHTML = "";
        for (let index = 0; index < inputs.length; index++) {
            let productDiv = document.createElement("div");
            productDiv.setAttribute("class", "buy1");
            productDiv.setAttribute("id", index.toString());
            listItem.appendChild(productDiv);
            let checkButton = document.createElement("input");
            checkButton.setAttribute("type", "checkbox");
            checkButton.setAttribute("id", "checkbox" + index);
            let item = document.createElement("p");
            item.setAttribute("id", "item" + index);
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "fas fa-trash");
            deleteButton.setAttribute("id", "delete" + index);
            let editButton = document.createElement("button");
            editButton.setAttribute("class", "fas fa-pen");
            editButton.setAttribute("id", "edit" + index);
            productDiv.appendChild(checkButton);
            productDiv.appendChild(item);
            productDiv.appendChild(deleteButton);
            productDiv.appendChild(editButton);
        }
        for (let index = 0; index < inputs.length; index++) {
            let item = document.querySelector("#item" + index);
            item.innerHTML = inputs[index].inputProduct + " " + inputs[index].inputAmount.toString() + " " + inputs[index].inputNote + " " + inputs[index].lastPurchase;
            let checkButton = document.querySelector("#checkbox" + index);
            checkButton.addEventListener("click", checkClick);
            let deleteButton = document.querySelector("#delete" + index);
            deleteButton.addEventListener("click", deleteClick);
            let editButton = document.querySelector("#edit" + index);
            editButton.addEventListener("click", editClick);
        }
    }
    function addNewItem() {
        let inputProduct = document.querySelector("#inputProduct").value;
        let inputAmount = document.querySelector("#inputAmount").value;
        let inputNote = document.querySelector("#inputNote").value;
        let buy = false;
        let done = false;
        let lastPurchase = "";
        inputs.push({ inputProduct, inputAmount: Number(inputAmount), buy, done, inputNote, lastPurchase });
        writeItems();
    }
    function checkClick(_event) {
        let id = _event.target.id;
        let newId = cutID(id, 8);
        let date = new Date();
        let day = date.getDate();
        let month = (new Date().getMonth() + 1);
        let year = date.getFullYear();
        inputs[newId].lastPurchase = day.toString() + "." + month.toString() + "." + year.toString();
        writeItems();
    }
    function deleteClick(_event) {
        let id = _event.target.id;
        let newId = cutID(id, 5);
        inputs.splice(newId, 1);
        writeItems();
    }
    function cutID(_id, _length) {
        let newId = _id.slice(_length);
        return parseInt(newId);
    }
    function editClick() {
        console.log("edit klick");
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=script.js.map