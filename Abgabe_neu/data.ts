interface Images {
    image: string;
    name: string;
}

// let seahawks: Images = {
//     image: "seahawks.jpg",
//     name: "seahawks"
// };

// let rams: Images = {
//     image: "rams.jpg",
//     name: "rams"
// };

// let dodgers: Images = {
//     image: "dodgers.jpg",
//     name: "dodgers"
// };

// let royals: Images = {
//     image: "royals.jpg",
//     name: "royals"
// };
// let lakers: Images = {
//     image: "lakers.jpg",
//     name: "lakers"
// };

// let bucks: Images = {
//     image: "bucks.jpg",
//     name: "bucks"
// };

// let football: Images = {
//     image: "football.jpg",
//     name: "football"
// };

// let basketball: Images = {
//     image: "basketball.jpg",
//     name: "basketball"
// };

// let baseball: Images = {
//     image: "baseball.jpg",
//     name: "baseball"
// };

interface Spiel {
    team1: Images[];
    team2: Images[];
    sport: Images[];
}


// let game: Spiel = {
//     team1: [seahawks, lakers, dodgers],
//     team2: [rams, bucks, royals],
//     sport: [football, basketball, baseball]
// };

let datenJson: string = `{
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

let game1: Spiel; 


async function loadJSON(): Promise<void> {
    let jsonResponse: Response = await fetch("data.json");
    game1 = await jsonResponse.json();
    console.log(game1);
}