// TODO: Set up how many balls we want
let ballCount = 100;
// TODO: Set up x and y position variable to equal an empty array
let x = [];
let y = [];
// TODO: Set up speed, size and color variable to equal an empty array
let xSpeed = [];
let ySpeed = [];
let size = [];
let r = [];
let r1 = [];
let g = [];
let g1 = [];
let b = [];
let b1 = [];
let o = [];
let bounce = [];

let agogo, bass, bass2, bass3, bass4, bass5, belltree, cabasa, castanets;
let chincymbal, chincymbal2, chinhand, chinhand2, cymbals, cymbals2, cymbals3, cymbals4;
let cowbell, cowbell2, djembe, djundjun, djundjun2, flexatone, guiro, guiro2, horn;
let ratchet, sheepnails, sleigh, snare, snare2, snare3, spring, spring2, squeaker;
let surdo, surdo2, suscymbal, suscymbal2, suscymbal3, swanee, tambo, tambo2;
let tamtam, thaigong, tomtom, train, triang, vibra, washboard, washboard2, whip, woodblock;

function preload() {
    agogo = loadSound('./orchwavs/agogo-bells.mp3');
    bass = loadSound('./orchwavs/bass-drum.mp3');
    bass2 = loadSound('./orchwavs/bass-drum2.mp3');
    bass3 = loadSound('./orchwavs/bass-drum3.mp3');
    bass4 = loadSound('./orchwavs/bass-drum4.mp3');
    bass5 = loadSound('./orchwavs/bass-drum5.mp3');
    belltree = loadSound('./orchwavs/bell-tree.mp3');
    cabasa = loadSound('./orchwavs/cabasa.mp3');
    castanets = loadSound('./orchwavs/castanets.mp3');
    chincymbal = loadSound('./orchwavs/chinese-cymbal.mp3');
    chincymbal2 = loadSound('./orchwavs/chinese-cymbal2.mp3');
    chinhand = loadSound('./orchwavs/chinese-hand.mp3');
    chinhand2 = loadSound('./orchwavs/chinese-hand2.mp3');
    cymbals = loadSound('./orchwavs/clash-cymbals.mp3');
    cymbals2 = loadSound('./orchwavs/clash-cymbals2.mp3');
    cymbals3 = loadSound('./orchwavs/clash-cymbals3.mp3');
    cymbals4 = loadSound('./orchwavs/clash-cymbals4.mp3');
    cowbell = loadSound('./orchwavs/cowbell.mp3');
    cowbell2 = loadSound('./orchwavs/cowbell2.mp3');
    djembe = loadSound('./orchwavs/djembe.mp3');
    djundjun = loadSound('./orchwavs/djundjun.mp3');
    djundjun2 = loadSound('./orchwavs/djundjun2.mp3');
    flexatone = loadSound('./orchwavs/flexatone.mp3');
    guiro = loadSound('./orchwavs/guiro.mp3');
    guiro2 = loadSound('./orchwavs/guiro2.mp3');
    horn = loadSound('./orchwavs/motor-horn.mp3');
    ratchet = loadSound('./orchwavs/ratchet.mp3');
    sheepnails = loadSound('./orchwavs/sheeps-toenails.mp3');
    sleigh = loadSound('./orchwavs/sleigh.mp3');
    snare = loadSound('./orchwavs/snare.mp3');
    snare2 = loadSound('./orchwavs/snare2.mp3');
    snare3 = loadSound('./orchwavs/snare3.mp3');
    spring = loadSound('./orchwavs/spring.mp3');
    spring2 = loadSound('./orchwavs/spring2.mp3');
    squeaker = loadSound('./orchwavs/squeaker.mp3');
    surdo = loadSound('./orchwavs/surdo.mp3');
    surdo2 = loadSound('./orchwavs/surdo2.mp3');
    suscymbal = loadSound('./orchwavs/sus-cymbal.mp3');
    suscymbal2 = loadSound('./orchwavs/sus-cymbal2.mp3');
    suscymbal3 = loadSound('./orchwavs/sus-cymbal3.mp3');
    swanee = loadSound('./orchwavs/swanee-whistle.mp3');
    tambo = loadSound('./orchwavs/tambourine.mp3');
    tambo2 = loadSound('./orchwavs/tambourine2.mp3');
    tamtam = loadSound('./orchwavs/tam-tam.mp3');
    thaigong = loadSound('./orchwavs/thai-gong.mp3');
    tomtom = loadSound('./orchwavs/tom-toms.mp3');
    train = loadSound('./orchwavs/train-whistle.mp3');
    triang = loadSound('./orchwavs/triangle.mp3');
    vibra = loadSound('./orchwavs/vibra.mp3');
    washboard = loadSound('./orchwavs/washboard1.mp3');
    washboard2 = loadSound('./orchwavs/washboard2.mp3');
    whip = loadSound('./orchwavs/whip.mp3');
    woodblock = loadSound('./orchwavs/woodblock.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    // TODO: Create a for loop that iterates through i until it reaches the ball count value
      for (let i = 0; i < ballCount; i++) {
      // Inside the for loop:
      // TODO: Set x and y position to be the center
      x[i] = width / 2;
      y[i] = height / 2;
      // TODO: Set the speeds to be random
      xSpeed[i] = random(-8, 8);
      ySpeed[i] = random(-8, 8);
      // TODO: Set the size to be random
      size[i] = random(5, 100);
      // TODO: Set the colors to be random
      r[i] = random(0, 256);
      r1[i] = random(0, 256);
      g[i] = random(0, 256);
      g1[i] = random(0, 256);
      b[i] = random(0, 256);
      b1[i] = random(0, 256);
      o[i] = random(90, 100);
      bounce[i] = false;
      }
  
  }

  function draw() {
    background(0, 50);
    
    // TODO: Iterate through a new for loop to change the properties in order to animate the balls
    for (let i = 0; i < ballCount; i++) {
  
      // Inside the for loop:
      // TODO: Increment speed for x position
      x[i] += xSpeed[i];
  
      // TODO: Increment speed for y position
      y[i] += ySpeed[i];
      
      // TODO: Set random R, G, B values
      
      // TODO: Style to have no strokes
      noStroke();    
      //strokeWeight(2);
      // TODO: Reverse x direction if ball hits left or right sides
      if (x[i] < 0 || x[i] > width) {
        xSpeed[i] *= -1;
        //xSpeed[i] += 1;
        if (bounce[i]) {
          bounce[i] = false;
        } else {
          bounce[i] = true;
        }
      } 
  
      // TODO: Reverse y direction if ball hits top or bottom sides
      if (y[i] < 0 || y[i] > height) {
        ySpeed[i] *= -1;
        //ySpeed[i] += 1;
        if (bounce[i]) {
          bounce[i] = false;
        } else {
          bounce[i] = true;
        }
      }
      
      let change = true;
      angleMode(DEGREES);
      push();
      // TODO: Draw the bouncing balls
      if (!bounce[i]) {
        Math.random() > 0.99 === true ? fill(r[i], g[i], b[i], random(100)) : fill(r[i], g[i], b[i], o[i]);
        Math.random() > 0.99 === true ? ellipse(x[i], y[i], random(5, size[i] + 50), random(5, size[i] + 50)) : ellipse(x[i], y[i], size[i], size[i]);
        Math.random() > 0.8 === true ? translate(1, 1) : change = false;
        Math.random() > 0.99 === true ? rotate(random(3)) : change = false;
      } else {
        Math.random() > 0.99 === true ? rotate(3) : rotate(0);
        Math.random() > 0.99 === true ? rotate(9) : rotate(0);
        //Math.random() > 0.999 === true ? background(random(100), random(100)) : background(0, 50);
        Math.random() > 0.99 === true ? background(random(200), random(100), random(100, 255), 100) : background(0, 50);
        
        Math.random() < 0.05 === true ? fill(random(256), random(256), random(256), random(50, 100)) : fill(r1[i], g1[i], b1[i], random(50, 100));
        Math.random() > 0.95 === true ? scale(10) : scale(1);
        Math.random() > 0.98 === true ? scale(0.5) : scale(1);
       
        Math.random() > 0.99999 === true ? agogo.play() : change = false;
        Math.random() > 0.9999 === true ? bass.play() : change = false;
        Math.random() > 0.9999 === true ? bass2.play() : change = false;
        Math.random() > 0.9999 === true ? bass3.play() : change = false;
        Math.random() > 0.9999 === true ? bass4.play() : change = false;
        Math.random() > 0.9999 === true ? bass5.play() : change = false;
        Math.random() > 0.99999 === true ? belltree.play() : change = false;
        Math.random() > 0.99999 === true ? cabasa.play() : change = false;
        Math.random() > 0.99999 === true ? castanets.play() : change = false;
        Math.random() > 0.99999 === true ? chincymbal.play() : change = false;
        Math.random() > 0.99999 === true ? chincymbal2.play() : change = false;
        Math.random() > 0.99999 === true ? chinhand.play() : change = false;
        Math.random() > 0.99999 === true ? chinhand2.play() : change = false;
        Math.random() > 0.9999 === true ? cymbals.play() : change = false;
        Math.random() > 0.9999 === true ? cymbals2.play() : change = false;
        Math.random() > 0.9999 === true ? cymbals3.play() : change = false;
        Math.random() > 0.9999 === true ? cymbals4.play() : change = false;
        Math.random() > 0.9999 === true ? cowbell.play() : change = false;
        Math.random() > 0.9999 === true ? cowbell2.play() : change = false;
        Math.random() > 0.9999 === true ? djembe.play() : change = false;
        Math.random() > 0.9999 === true ? djundjun.play() : change = false;
        Math.random() > 0.9999 === true ? djundjun2.play() : change = false;
        Math.random() > 0.99999 === true ? flexatone.play() : change = false;
        Math.random() > 0.99999 === true ? guiro.play() : change = false;
        Math.random() > 0.99999 === true ? guiro2.play() : change = false;
        Math.random() > 0.99999 === true ? horn.play() : change = false;
        Math.random() > 0.99999 === true ? ratchet.play() : change = false;
        Math.random() > 0.9999 === true ? sheepnails.play() : change = false;
        Math.random() > 0.99995 === true ? sleigh.play() : change = false;
        Math.random() > 0.9999 === true ? snare.play() : change = false;
        Math.random() > 0.9999 === true ? snare2.play() : change = false;
        Math.random() > 0.9999 === true ? snare3.play() : change = false;
        Math.random() > 0.99995 === true ? spring.play() : change = false;
        Math.random() > 0.99995 === true ? spring2.play() : change = false;
        Math.random() > 0.99999 === true ? squeaker.play() : change = false;
        Math.random() > 0.99995 === true ? surdo.play() : change = false;
        Math.random() > 0.99995 === true ? surdo2.play() : change = false;
        Math.random() > 0.9999 === true ? suscymbal.play() : change = false;
        Math.random() > 0.99995 === true ? suscymbal2.play() : change = false;
        Math.random() > 0.99995 === true ? suscymbal3.play() : change = false;
        Math.random() > 0.99999 === true ? swanee.play() : change = false;
        Math.random() > 0.9999 === true ? tambo.play() : change = false;
        Math.random() > 0.9999 === true ? tambo2.play() : change = false;
        Math.random() > 0.99995 === true ? tamtam.play() : change = false;
        Math.random() > 0.99995 === true ? thaigong.play() : change = false;
        Math.random() > 0.9999 === true ? tomtom.play() : change = false;
        Math.random() > 0.99999 === true ? train.play() : change = false;
        Math.random() > 0.99995 === true ? triang.play() : change = false;
        Math.random() > 0.99995 === true ? vibra.play() : change = false;
        Math.random() > 0.9999 === true ? washboard.play() : change = false;
        Math.random() > 0.9999 === true ? washboard2.play() : change = false;
        Math.random() > 0.9999 === true ? whip.play() : change = false;
        Math.random() > 0.9999 === true ? woodblock.play() : change = false;

        Math.random() > 0.999 === true ? rotate(10) : rotate(0);
        Math.random() > 0.999 === true ? rotate(20) : rotate(0);
        Math.random() > 0.999 === true ? rotate(-5) : rotate(0);
        Math.random() > 0.999 === true ? rotate(-3) : rotate(0);
        Math.random() > 0.8 === true ? translate(1, 1) : change = false;
        Math.random() > 0.99 === true ? translate(random(5), random(5)) : change = false;
        Math.random() > 0.99 === true ? rect(x[i], y[i], random(size[i], size[i+50]), random(size[i], size[i+50])) : change = false; 
        // };
        ellipse(x[i], y[i], random(size[i], size[i+5]), random(size[i], size[i+5]));
      }
      
      pop();
    
    }
  } 