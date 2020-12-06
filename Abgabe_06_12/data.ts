interface Images {
    image: string;
    name: string;
}

interface Spiel {
    team1: Images[];
    team2: Images[];
    sport: Images[];
}

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