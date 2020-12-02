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

