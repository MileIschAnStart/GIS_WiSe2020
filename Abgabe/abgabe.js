"use strict";
/* Buttons */
let schmutzHead = document.getElementById("selectHead");
schmutzHead.addEventListener("click", iwasHead);
function iwasHead(_event) {
    location.href = "head.html";
}
let schmutzBody = document.getElementById("selectBody");
schmutzBody.addEventListener("click", iwasBody);
function iwasBody(_event) {
    location.href = "body.html";
}
let schmutzLegs = document.getElementById("selectLegs");
schmutzLegs.addEventListener("click", iwasLegs);
function iwasLegs(_event) {
    location.href = "legs.html";
}
/*Images*/
function createImgTag(_newImg, _grabDiv) {
    const newImg = document.createElement("img");
    const grabDiv = document.getElementById("imgDiv");
    return grabDiv.appendChild(newImg);
}
/* For-Schleife für <img> */
for (let i = 0; i < 3; i++) {
    createImgTag(null, null);
}
//# sourceMappingURL=abgabe.js.map