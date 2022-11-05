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
    let check0Button = document.querySelector("#check0");
    let check1Button = document.querySelector("#check1");
    let delete0Button = document.querySelector("#delete0");
    let edit0Button = document.querySelector("#edit0");
    let delete1Button = document.querySelector("#delete1");
    let edit1Button = document.querySelector("#edit1");
    function handleLoad() {
        productButton.addEventListener("click", addNewProduct);
        check0Button.addEventListener("click", productCheck);
        check1Button.addEventListener("click", productCheck);
        delete0Button.addEventListener("click", productDelete);
        edit0Button.addEventListener("click", productEdit);
        delete1Button.addEventListener("click", productDelete);
        edit1Button.addEventListener("click", productEdit);
    }
    function addNewProduct() {
        console.log("Product added");
    }
    function productCheck() {
        console.log("Product checked");
    }
    function productDelete() {
        console.log("Product deleted");
    }
    function productEdit() {
        console.log("Editing Product");
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=script.js.map