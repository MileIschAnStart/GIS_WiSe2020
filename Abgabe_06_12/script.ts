function generate(_array: Images[], _name: string): void {

    let grabElement: HTMLDivElement = <HTMLDivElement>document.getElementById("image-cnt");

    for (let i: number = 0; i < _array.length; i++) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");

        div.addEventListener("click", auswaehlen);

        grabElement.appendChild(div);

        let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        img.src = _array[i].image;

        div.dataset.index = _array[i].image;
        div.dataset.typ = _name;

        div.appendChild(img);
    }
}

async function read(): Promise<void> {
    let grabElement: HTMLDivElement = <HTMLDivElement>document.getElementById("imgDiv");

    let properties: string[] = Object.getOwnPropertyNames(game1);

    for (let property  of properties ) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");

        grabElement.appendChild(div);
        
        let value: string = sessionStorage.getItem(property);

        let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        img.src = value;

        div.appendChild(img);
    }
}

function auswaehlen(_event: Event): void {
    let target: HTMLElement = <HTMLElement>_event.currentTarget;

    window.sessionStorage.setItem(target.dataset.typ, target.dataset.index);
    console.log(sessionStorage.getItem(target.dataset.typ));
}

async function load(): Promise<void> {
    await loadJSON();

    let zwischenString: string[] = window.location.pathname.split("/");

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

function summary(_event: Event): void {
    location.href = "summary.html";
}

async function send(_url: string): Promise<void> {

    let params: URLSearchParams = new URLSearchParams(localStorage);
    _url = _url + "?" + params.toString();

    let response: Response = await fetch(_url);

    let serverMessage: ServerMessage = await response.json();
    
    let serverResult: HTMLElement = document.getElementById("serverresult");

    let text: HTMLParagraphElement = document.createElement("p");

    
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

let team1Side: HTMLButtonElement = <HTMLButtonElement> document.getElementById("team1-btn");

team1Side.addEventListener("click", team1);

function team1(_event: Event): void {
   location.href = "team1.html";
}

let team2Side: HTMLButtonElement = <HTMLButtonElement> document.getElementById("team2-btn");

team2Side.addEventListener("click", team2);

function team2(_event: Event): void {
   location.href = "team2.html";
}

let sportSide: HTMLButtonElement = <HTMLButtonElement> document.getElementById("sport-btn");

sportSide.addEventListener("click", sport);

function sport(_event: Event): void {
   location.href = "game.html";
}

let summarySide: HTMLButtonElement = <HTMLButtonElement> document.getElementById("summary-btn");

summarySide.addEventListener("click", summary);

interface ServerMessage {
    error: string;
    message: string;
}