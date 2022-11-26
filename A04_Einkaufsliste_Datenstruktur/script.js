"use strict";
/*
 Aufgabe:<L06_Einkaufsliste_DatabaseServer>
 Name: <Elias Schäfer>
 Matrikel: <268512>
 Datum: <24.11.2022>
 Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var Einkaufliste;
(function (Einkaufliste) {
    let inputs;
    window.addEventListener("load", handleLoad);
    let itemButton = document.querySelector("#add");
    let listProduct = document.querySelector("#list");
    async function handleLoad() {
        itemButton.addEventListener("click", addNewProduct);
        await getList();
    }
    async function getList() {
        inputs = [];
        let response = await fetch("https://webuser.hs-furtwangen.de/~schaefee/database/index.php");
        let list = await response.text();
        let inputItems = JSON.parse(list);
        getData(inputItems);
        writeProducts();
    }
    function getData(_inputs) {
        let newList = [];
        for (let index in _inputs.data) {
            newList.push(index);
        }
        for (let counter of newList) {
            inputs.push(_inputs.data[Number(counter)]);
        }
    }
    async function sendList(_element, _command) {
        let sendInputs = JSON.stringify(inputs);
        let query = new URLSearchParams(sendInputs);
        await fetch("https://webuser.hs-furtwangen.de/~schaefee/database/?command=" + _command + "&collection=data&id=" + _element + "&" + query.toString());
        alert("List sent!");
        getList();
    }
    async function sendListElement(_command) {
        let sendInputs = JSON.stringify(inputs);
        let query = new URLSearchParams(sendInputs);
        await fetch("https://webuser.hs-furtwangen.de/~schaefee/database/?command=" + _command + "&collection=data" + query.toString());
        alert("List sent!");
        getList();
    }
    function writeProducts() {
        let list = document.querySelector("#list");
        list.innerHTML = "";
        for (let index = 0; index < inputs.length; index++) {
            let productDiv = document.createElement("div");
            productDiv.setAttribute("class", "buy");
            productDiv.setAttribute("id", index.toString());
            listProduct.appendChild(productDiv);
            let checkButton = document.createElement("input");
            checkButton.setAttribute("type", "checkbox");
            checkButton.setAttribute("id", "checkbox" + index);
            let product = document.createElement("p");
            product.setAttribute("id", "product" + index);
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "fas fa-trash");
            deleteButton.setAttribute("id", "delete" + index);
            let editButton = document.createElement("button");
            editButton.setAttribute("class", "fas fa-pen");
            editButton.setAttribute("id", "edit" + index);
            productDiv.appendChild(checkButton);
            productDiv.appendChild(product);
            productDiv.appendChild(deleteButton);
            productDiv.appendChild(editButton);
        }
        for (let index = 0; index < inputs.length; index++) {
            let product = document.querySelector("#product" + index);
            product.innerHTML = inputs[index].inputProduct + " " + inputs[index].inputAmount.toString() + " " + inputs[index].inputNote + " " + inputs[index].lastPurchase;
            let checkButton = document.querySelector("#checkbox" + index);
            checkButton.addEventListener("click", checkClick);
            let deleteButton = document.querySelector("#delete" + index);
            deleteButton.addEventListener("click", deleteClick);
            let editButton = document.querySelector("#edit" + index);
            editButton.addEventListener("click", editClick);
        }
    }
    function addNewProduct() {
        let inputProduct = document.querySelector("#inputProduct").value;
        let inputAmount = document.querySelector("#inputAmount").value;
        let inputNote = document.querySelector("#inputNote").value;
        let buy = false;
        let done = false;
        let lastPurchase = "";
        inputs.push({ inputProduct, inputAmount: Number(inputAmount), buy, done, inputNote, lastPurchase });
        writeProducts();
    }
    function checkClick(_event) {
        let id = _event.target.id;
        let newId = cutID(id, 8);
        let date = new Date();
        let day = date.getDate();
        let month = (new Date().getMonth() + 1);
        let year = date.getFullYear();
        inputs[newId].lastPurchase = day.toString() + "/" + month.toString() + "/" + year.toString();
        writeProducts();
    }
    function deleteClick(_event) {
        let id = _event.target.id;
        let newId = cutID(id, 5);
        inputs.splice(newId, 1);
        writeProducts();
    }
    function cutID(_id, _length) {
        let newId = _id.slice(_length);
        return parseInt(newId);
    }
    function editClick() {
        console.log("edit klick");
    }
})(Einkaufliste || (Einkaufliste = {}));
//# sourceMappingURL=script.js.map