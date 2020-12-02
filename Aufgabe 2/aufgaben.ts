/*Aufgabe1*/
let button1: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button1");
let button2: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button2");


button1.addEventListener("click", addSquare);
button2.addEventListener("click", loeschen);

function addSquare(_event: Event): void {

    let div: HTMLDivElement = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.marginLeft = (Math.random() * 200).toString() + "px";
    document.getElementById("fuellen")?.appendChild(div);
}
function loeschen (_event: Event): void {

    let parent: HTMLDivElement = <HTMLDivElement> document.getElementById("fuellen");
    parent.innerHTML = "";
}
/* Aufgabe 2 */ 

interface YourASP {
    head: Head;
    body: Body;
    legs: Legs;
}

interface Head {
    whichHead: string;
}
interface Body {
    whichBody: string;
}
interface Legs {
    whichLegs: string;
}

/* let myasp: YourASP = {
   head: { whichHead: "Baseball" },
   body: { whichBody: "Baseball" },
   legs: { whichLegs: "Eishockey" }
};
console.log(myasp); */
   



