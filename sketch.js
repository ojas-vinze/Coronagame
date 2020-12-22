var corona,coronaimg;
var police,policeimg,policeg;
var doctor,doctorimg,doctorg;
var injection,injectionimg;

function preload(){
    policeimg=loadImage("police.png");
    doctorimg=loadImage("doctor.png");
    coronaimg=loadImage("corona.png");
    injectionimg=loadImage("injection.png");
}

function setup(){
    createCanvas(1200,570);
}

function draw(){
    background("lightgrey");
    // policeg = new Group();
    // doctorg = new Group();

    if(frameCount!==1000000){
    corona = createSprite();
    corona.addImage(coronaimg);
    corona.velocityX=5;
    
    Police();
    Doctor();

    if(corona.isTouching(police)){
        police.destroy();
    }

    if(corona.isTouching(doctor)){
        doctor.destroy();
    }

    }  else if(frameCount === 1000000){
            doctorg.destroy();
            policeg.destroy();
            injection = createSprite(1250,285,50,80);
            injection.addImage(injectionimg);
            injection.velocityX=-5;
            fill("black");
            text("Vaccine",injection.y+20,injection.x);

            if(injection.isTouching(corona)){
                corona.destroy();
                injection.x=600;
                text("Corona Checkmated!!!!",injection.y+20,injection.x);
            }
            }    
    // drawSprites();
}

function Police(){
   if(frameCount%300===0){
        police = createSprite(1250,285,20,540);
        police.addImage(policeimg);
        police.velocityX=-5;
        police.lifetime=1300;
        // policeg.add(police);
    } 
}

function Doctor(){
    if(frameCount%230===0){
        doctor = createSprite(1250,285,20,540);
        doctor.addImage(doctorimg);
        doctor.velocityX=-5;
        doctor.lifetime=1300;
        // doctorg.add(doctor);
    }
}