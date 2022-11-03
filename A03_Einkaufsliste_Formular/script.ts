/*
 Aufgabe:<L03_Einkaufsliste_Formular>
 Name: <Elias Schäfer>
 Matrikel: <268512>
 Datum: <02.11.2022>
 Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

namespace Einkaufsliste {

    window.addEventListener("load", handleLoad);
    
    let productButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");
    
    let check0Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#check0");
    let check1Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#check1");
    
    let delete0Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#delete0");
    let edit0Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit0");
    
    let delete1Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#delete1");
    let edit1Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit1");
    
    function handleLoad(): void {
    
        productButton.addEventListener("click", addNewProduct);
    
        check0Button.addEventListener("click", productCheck);
        check1Button.addEventListener("click", productCheck);
    
        delete0Button.addEventListener("click", productDelete);
        edit0Button.addEventListener("click", productEdit);
        
        delete1Button.addEventListener("click", productDelete);
        edit1Button.addEventListener("click", productEdit);
    }
    function addNewProduct(): void {
        console.log("Product added");
    }
    function productCheck(): void {
        console.log("Product checked");
    }
    function productDelete(): void {
        console.log("Product deleted");
    }
    function productEdit(): void {
        console.log("Editing Product");
    }
}