/*
 Aufgabe:<L04_Einkaufsliste_Datenstruktur>
 Name: <Elias Schäfer>
 Matrikel: <268512>
 Datum: <05.11.2022>
 Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

namespace Einkaufliste {

    window.addEventListener("load", handleLoad);

    let productButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");
    let listProduct: HTMLDivElement = <HTMLDivElement>document.querySelector("#list");

    function handleLoad(): void {

        productButton.addEventListener("click", addNewProduct);      
        writeProducts();

    }   
    function writeProducts(): void {
        let list: HTMLDivElement = <HTMLDivElement>document.querySelector("#list");
        list.innerHTML = "";

        for (let index: number = 0; index < inputs.length; index++) {

            let productDiv: HTMLDivElement = document.createElement("div");
            productDiv.setAttribute("class", "buy");
            productDiv.setAttribute("id", index.toString());
            listProduct.appendChild(productDiv);
    
            let checkButton: HTMLInputElement = document.createElement("input");
            checkButton.setAttribute("type", "checkbox");
            checkButton.setAttribute("id", "checkbox" + index);

            let product: HTMLParagraphElement = document.createElement("p");
            product.setAttribute("id", "product" + index);

            let deleteButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
            deleteButton.setAttribute("class", "fas fa-trash");
            deleteButton.setAttribute("id", "delete" + index);

            let editButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
            editButton.setAttribute("class", "fas fa-pen");
            editButton.setAttribute("id", "edit" + index);

            productDiv.appendChild(checkButton);
            productDiv.appendChild(product);
            productDiv.appendChild(deleteButton);
            productDiv.appendChild(editButton);
        }

        for (let index: number = 0; index < inputs.length; index++) {

            let product: HTMLParagraphElement = <HTMLParagraphElement>document.querySelector("#product" + index);
            product.innerHTML = inputs[index].inputProduct + " " + inputs[index].inputAmount.toString() + " " + inputs[index].inputNote + " " + inputs[index].lastPurchase;

            let checkButton: HTMLInputElement = <HTMLInputElement>document.querySelector("#checkbox" + index);
            checkButton.addEventListener("click", checkClick);

            let deleteButton: HTMLInputElement = <HTMLInputElement>document.querySelector("#delete" + index);
            deleteButton.addEventListener("click", deleteClick);

            let editButton: HTMLInputElement = <HTMLInputElement>document.querySelector("#edit" + index);
            editButton.addEventListener("click", editClick);
        }
    }

    function addNewProduct(): void {

        let inputProduct: string = (<HTMLInputElement>document.querySelector("#inputProduct")).value;
        let inputAmount: string = (<HTMLInputElement>document.querySelector("#inputAmount")).value;
        let inputNote: string = (<HTMLInputElement>document.querySelector("#inputNote")).value;
        let buy: boolean = false; 
        let done: boolean = false;
        let lastPurchase: string = "";

        inputs.push({inputProduct, inputAmount: Number (inputAmount), buy, done, inputNote, lastPurchase});

        writeProducts();
    }

    function checkClick(_event: MouseEvent): void {
        let id: string = (_event.target as Element).id;
        let newId: number = cutID(id, 8);
        let date: Date = new Date();
        let day: number = date.getDate();
        let month: number = (new Date().getMonth() + 1);
        let year: number = date.getFullYear();

        inputs[newId].lastPurchase = day.toString() + "/" + month.toString() + "/" + year.toString();
        writeProducts();
    }

    function deleteClick(_event: MouseEvent): void {
        let id: string = (_event.target as Element).id;
        let newId: number = cutID(id, 5);
        inputs.splice(newId, 1);
        writeProducts();
    }

    function cutID (_id: string, _length: number): number {
        let newId: string = _id.slice(_length);
        return parseInt(newId);
    }

    function editClick(): void {
        console.log("edit klick");
    }
}