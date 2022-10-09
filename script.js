let fireworks=[];
let gravity;
let bg;

function preload(){
    bg=loadImage('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    gravity=createVector(0,0.2);
    stroke(255);
    strokeWeight(4);
    background(0);
}

function draw(){
    colorMode(RGB);
    background(bg,25);
    if (random(1)<0.03){
        fireworks.push(new Firework());
    }

    for (let i=fireworks.length-1;i>=0;i--)
    {
        fireworks[i].update();
        fireworks[i].show();
        if(fireworks[i].done()){
            fireworks.splice(i,1);
        }
    }
}

