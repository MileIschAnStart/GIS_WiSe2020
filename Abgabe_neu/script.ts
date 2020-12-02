function generate(_array: Images[], _name: string): void {

    let grabElement: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("image-cnt")[0];

    for (let i: number = 0; i < _array.length; i++) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");

        div.addEventListener("click", auswaehlen);

        grabElement.appendChild(div);

        let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        img.src = _array[i].image;

        div.dataset.index = i.toString();
        div.dataset.typ = _name;

        div.appendChild(img);
    }


}

function read(): void {

    let grabElement: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("imgDiv")[0];

    for (let i: number = 0; i < localStorage.length; i++) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");

        grabElement.appendChild(div);

        let key: string = localStorage.key(i);
        let value: number = parseInt (localStorage.getItem(key));
        let bild: Images = (<Images[]> game1[key])[value];

        
        let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        img.src = bild.image;

        div.appendChild(img);
    }
}


function auswaehlen(_event: Event): void {
    let target: HTMLElement = <HTMLElement>_event.currentTarget;

    window.localStorage.setItem(target.dataset.typ, target.dataset.index);
    console.log(localStorage.getItem(target.dataset.typ));
}



async function load(): Promise<void> {
    await loadJSON();

    let zwischenString: string[] = window.location.pathname.split("/");

    switch (zwischenString[zwischenString.length - 1]) {
        case "team1.html":
            generate(game1.team1, "Team 1");
            break;

        case "team2.html":

            generate(game1.team2, "Team 2");
            break;

        case "game.html":

            generate(game1.sport, "sport");
            break;
            
        case "summary.html":
            read();
            console.log("hi");
            send("https://gis-communication.herokuapp.com");
            break;
    }
}
window.addEventListener("load", load);

let team1Side: HTMLButtonElement = <HTMLButtonElement> document.getElementById("selectHead");

team1Side.addEventListener("click", team1);

function team1(_event: Event): void {
   location.href = "team1.html";
}

let team2Side: HTMLButtonElement = <HTMLButtonElement> document.getElementById("selectBody");

team2Side.addEventListener("click", team2);

function team2(_event: Event): void {
   location.href = "team2.html";
}

let sportSide: HTMLButtonElement = <HTMLButtonElement> document.getElementById("selectLegs");

sportSide.addEventListener("click", sport);

function sport(_event: Event): void {
   location.href = "game.html";
}

let summarySide: HTMLButtonElement = <HTMLButtonElement> document.getElementById("summary");

summarySide.addEventListener("click", summary);

function summary(_event: Event): void {
   location.href = "summary.html";
}

async function send(_url: string): Promise<void> {



    let params: URLSearchParams = new URLSearchParams(localStorage);
    _url = _url + "?" + params.toString();


    let response: Response = await fetch(_url);
    console.log("Response", await response.json());


    // //Catch
    // if (messageText !== undefined) {
    //     console.log(messageText);
    //     messageText.innerText = message;
    // }

    // let error: string = datenJson["error"];

    // if (error !== undefined) {
    //     messageText.setAttribute("style", "color:red");
    //     messageText.innerText = error;
    // }

    // responseServer.appendChild(messageText);

    

}
