"use strict";
// let game: Spiel = {
//     team1: [seahawks, lakers, dodgers],
//     team2: [rams, bucks, royals],
//     sport: [football, basketball, baseball]
// };
let datenJson = `{
    "team1": [
        {
            "image": "seahawks.jpg",
            "name": "seahawks"
        },
        {
            "image": "lakers.jpg",
            "name": "lakers"
        },
        {
            "image": "dodgers.jpg",
            "name": "dodgers"
        }
    ],
    "team2": [
        {
            "image": "rams.jpg",
            "name": "rams"
        },
        {
            "image": "bucks.jpg",
            "name": "bucks"
        },
        {  
            "image": "royals.jpg",
            "name": "royals"
        }
    ],
    "sport": [
        {
            "image": "football.jpg",
            "name": "football"
        },
        {
            "image": "basketball.jpg",
            "name": "basketball"
        },
        {
            "image": "baseball.jpg",
            "name": "baseball"
        }
       
    ]
}`;
let game1;
async function loadJSON() {
    let jsonResponse = await fetch("data.json");
    game1 = await jsonResponse.json();
    console.log(game1);
}
//# sourceMappingURL=data.js.map