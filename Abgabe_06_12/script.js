"use strict";
function generate(_array, _name) {
    let grabElement = document.getElementById("image-cnt");
    for (let i = 0; i < _array.length; i++) {
        let div = document.createElement("div");
        div.addEventListener("click", auswaehlen);
        grabElement.appendChild(div);
        let img = document.createElement("img");
        img.src = _array[i].image;
        div.dataset.index = _array[i].image;
        div.dataset.typ = _name;
        div.appendChild(img);
    }
}
async function read() {
    let grabElement = document.getElementById("imgDiv");
    let properties = Object.getOwnPropertyNames(game1);
    for (let property of properties) {
        let div = document.createElement("div");
        grabElement.appendChild(div);
        let value = sessionStorage.getItem(property);
        let img = document.createElement("img");
        img.src = value;
        div.appendChild(img);
    }
}
function auswaehlen(_event) {
    let target = _event.currentTarget;
    window.sessionStorage.setItem(target.dataset.typ, target.dataset.index);
    console.log(sessionStorage.getItem(target.dataset.typ));
}
async function load() {
    await loadJSON();
    let zwischenString = window.location.pathname.split("/");
    switch (zwischenString[zwischenString.length - 1]) {
        case "team1.html":
            generate(game1.team1, "team1");
            break;
        case "team2.html":
            generate(game1.team2, "team2");
            break;
        case "game.html":
            generate(game1.sport, "sport");
            break;
        case "summary.html":
            read();
            send("https://gis-communication.herokuapp.com");
            break;
    }
}
function summary(_event) {
    location.href = "summary.html";
}
async function send(_url) {
    let params = new URLSearchParams(localStorage);
    _url = _url + "?" + params.toString();
    let response = await fetch(_url);
    let serverMessage = await response.json();
    let serverResult = document.getElementById("serverresult");
    let text = document.createElement("p");
    if (serverMessage.message !== undefined) {
        text.innerText = serverMessage.message;
    }
    if (serverMessage.error !== undefined) {
        text.setAttribute("style", "color:red");
        text.innerText = serverMessage.error;
    }
    serverResult.appendChild(text);
}
window.addEventListener("load", load);
let team1Side = document.getElementById("team1-btn");
team1Side.addEventListener("click", team1);
function team1(_event) {
    location.href = "team1.html";
}
let team2Side = document.getElementById("team2-btn");
team2Side.addEventListener("click", team2);
function team2(_event) {
    location.href = "team2.html";
}
let sportSide = document.getElementById("sport-btn");
sportSide.addEventListener("click", sport);
function sport(_event) {
    location.href = "game.html";
}
let summarySide = document.getElementById("summary-btn");
summarySide.addEventListener("click", summary);
//# sourceMappingURL=script.js.map