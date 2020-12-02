interface Image {
  [index: number]: ImgInter;     
}

interface ImgInter {
  name: string;
  image: string;
}

let image: ImgInter[] = new Array<ImgInter>();

image[0] = {name: "genau", image: "genau2"};
image[1] = {name: "lol", image: "bla"};
image[2] = {name: "skrr", image: "skkr2"};

let x: string = image.toString();
document.getElementById("demo").innerHTML = x;


/* let testArray: string[] = ["eins", "zwei", "drei"]; 
let x: string = testArray.toString();
document.getElementById("demo").innerHTML = x; */

















