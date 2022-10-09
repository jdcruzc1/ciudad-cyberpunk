function setup() {
  createCanvas(windowWidth, windowHeight);
  background(118, 26, 26);

  //sol
  push();

    stroke(0, 0, 0);
    fill (255, 73, 0);
    ellipse(random (200, 1000), 100, 200, 200);

pop();


  //Montañas

  push();
  let y1 = 500;
  let n = 0.0;
  let yOffSet = 200;

  for (i = 0; i < width; i++) {
    n += 0.01;
    let x = i;
    let noiseVal = noise(n);
    y1 = noiseVal * 100 + yOffSet + random (-0.4, 0.4)
    //stroke(random (228, 149), 168, 39);
    fill (random (228, 149), 168, 39);
    line(x, y1, x, height);

    
}

pop();

//nubes

push();
let y2 = 30;

  for (i = 0; i < width; i+=1) {
    
    let x = i;
    y1 = y1 + random (-10, 10)
    stroke(0, 0, 0);
    fill (45, 73, 38);
    ellipse(x, y2, random(20,200));
}

pop();
//nubes 2

push();
let y3 = 30;

  for (i = 0; i < width; i+=1) {
    
    let x = i;
    y1 = y1 + random (-10, 10)
    stroke(0, 0, 0);
    fill (45, 73, 38);
    ellipse(x, y3, random(20,100));
}
pop();

 // capa 3 edificios

 push ();
 stroke(255);
 for (let i = 0; i < width; i += random(60, 90)) {
   for (let j = random(280, 800); j < height; j += 10) {
     let x = i;
     let y = j;
     fill(70, 46, 107);
     rect(x, y, 100, 10);
     fill(100, 0, 255);
     rect(x, y, random(100), 10);
     fill(70, 46, 107);
     rect(x, y, random(20), 10);
   }

 }
 pop ();

 //incendio

 push ();
 let y5 = 600;
 
 for (i = 0; i < width; i++) {
  for (let j = random(450, 800); j < height; j ++) {
  let x = i;
  let y5 = j;

   stroke(random (255, 50), 0, 0);
   fill (random (255, 50), 255, 255);
   line(x, y5, x, height);
  }
}

//gotas 
push ();

for ( let i = random (0, 1000); i < width; i++) {
stroke(0, 0, 0);
    fill (45, 73, 38);
    let x= i
    ellipse(x , random (150, 800) , 2, 5);

    
}
pop();

   //incendio 2

   push ();
   let y6 = 600;
   
   for (i = 0; i < width; i++) {
    for (let j = random(550, 800); j < height; j ++) {
    let x = i;
    let y6 = j;
  
     stroke(random (255, 50), (89, 17), 0);
     fill (random (255, 50), (89, 17), 0);
     line(x, y6, x, height);
  }
  
  
  
  }
  
  pop ();

  //incendio 3

  push ();
  let y7 = 600;
  
  for (i = 0; i < width; i++) {
   for (let j = random(500, 800); j < height; j ++) {
   let x = i;
   let y6 = j;
 
    stroke(random (255, 170), (224, 149), 0);
    fill (random (255, 50), (89, 17), 0);
    line(x, y6, x, height);
 }
 
 
 
 }
 
 pop ();

  }


function draw() {
    
   
    }