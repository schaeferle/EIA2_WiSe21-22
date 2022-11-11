namespace Einkaufliste {
    export interface Input {
        inputProduct: string;
        inputAmount: number;
        buy: boolean;
        done: boolean;
        inputNote: string;
        lastPurchase: string;
    }
    export let inputs: Input[] = [
        {
            inputProduct: "Grüne Äpfel",
            inputAmount: 4,
            buy: true,
            done: false,
            inputNote: "Granny Smith",
            lastPurchase: "05.11.2022"
        }
    ];
}