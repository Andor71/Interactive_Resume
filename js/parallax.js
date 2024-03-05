//Images for the paralax effect

const imagesSrc = [
            //Cant lpoad first image idk why , using az a decoy.
            "./img/background/j0.png",

            "./img/background/j4.png",
            "./img/background/j3.png",
            "./img/background/j2.png",
            "./img/background/j1.png",
            "./img/background/j0.png",
            
]
//OffsetSpeed
let offset = [2, 1.3, .6, 0, .7];
//Images objects array;
let images = []
//Created, renderable objects
let bgs = []

//Creating renderable objects , pushing them into bgs array
for(let i = 0 ; i < imagesSrc.length ; i++){
    let image = new Image();
    image.src = imagesSrc[i];
    images.push(image);
    let bg1 = new Background({
        position : {
            x:0,
            y:0
        },
        image:image,
    })
    //Front layer postiong change
    if(i == imagesSrc.length-1){
        bg1.position.x = -5000;
    }
    //Cant lpoad first image idk why , using az a decoy.
    if(i != 0){
        bgs.push(bg1);
    }
}


//Cant load fisrt image so using loop by shifting one index
function parllaxEffectDraw(overLayVelocity){
    for(let i = 0 ; i < bgs.length ; i++){
        bgs[i].draw(overLayVelocity,offset[i]);
    }
}
function parllaxEffectDrawFront(overLayVelocity){    
    bgs[bgs.length-1].draw(overLayVelocity,offset[offset.length-1]);
}
