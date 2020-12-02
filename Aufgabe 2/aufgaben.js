"use strict";
/*Aufgabe1*/
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
button1.addEventListener("click", addSquare);
button2.addEventListener("click", loeschen);
function addSquare(_event) {
    let div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.marginLeft = (Math.random() * 200).toString() + "px";
    document.getElementById("fuellen")?.appendChild(div);
}
function loeschen(_event) {
    let parent = document.getElementById("fuellen");
    parent.innerHTML = "";
}
/* let myasp: YourASP = {
   head: { whichHead: "Baseball" },
   body: { whichBody: "Baseball" },
   legs: { whichLegs: "Eishockey" }
};
console.log(myasp); */
//# sourceMappingURL=aufgaben.js.map