interface Image {
  [index: number]: ImgInter;     
}

interface ImgInter {
  name: string;
  image: string;
}

let image: ImgInter[] = new Array<ImgInter>();

image[1] = {name: "genau", image: "genau2"};
image[0] = {name: "bla", image: "bla"};








