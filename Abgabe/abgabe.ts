/* Buttons */ 
let schmutzHead: HTMLButtonElement = <HTMLButtonElement> document.getElementById("selectHead");

schmutzHead.addEventListener("click", iwasHead);

function iwasHead(_event: Event): void {
   location.href = "head.html";
}

let schmutzBody: HTMLButtonElement = <HTMLButtonElement> document.getElementById("selectBody");

schmutzBody.addEventListener("click", iwasBody);

function iwasBody(_event: Event): void {
   location.href = "body.html";
}

let schmutzLegs: HTMLButtonElement = <HTMLButtonElement> document.getElementById("selectLegs");

schmutzLegs.addEventListener("click", iwasLegs);

function iwasLegs(_event: Event): void {
   location.href = "legs.html";
}

/*Images*/
function createImgTag (_newImg: HTMLImageElement, _grabDiv: HTMLDivElement): HTMLImageElement {

const newImg: HTMLImageElement = <HTMLImageElement> document.createElement("img");

const grabDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("imgDiv");

return grabDiv.appendChild(newImg);
}

/* For-Schleife für <img> */

for (let i: number = 0; i < 3; i++) {
   createImgTag(null, null);
}