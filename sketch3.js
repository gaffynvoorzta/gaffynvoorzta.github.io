let song, amp;

function preload() {
  song = loadSound('./squiff-test2.wav');
  //song = loadSound('alanwallwork.info/squiff/squiff-test.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();  
  amp = new p5.Amplitude();
}

function draw() {
  angleMode(DEGREES);
  Math.random() > 0.995 === true ? background(random(100), random(100)) : background(0, 50);
  Math.random() > 0.995 === true ? background(0, 0, random(255)) : background(0, 50);
  Math.random() > 0.995 === true ? background(random(255), 0, random(255)) : background(0, 50);
  Math.random() > 0.990 === true ? scale(1.2) : scale(1);
  Math.random() > 0.990 === true ? scale(0.6) : scale(1);
  Math.random() > 0.990 === true ? scale(0.4) : scale(1);
  Math.random() > 0.990 === true ? scale(2) : scale(1);
  Math.random() > 0.990 === true ? scale(1.5) : scale(1);
  Math.random() > 0.990 === true ? scale(0.8) : scale(1);
  let vol = amp.getLevel();
  Math.random() > 0.5 === true ? fill(0, random(255), random(100), random(50, 100)) : fill(random(50, 200), 0, random(100, 255), random(50, 100));
  ellipse(mouseX, mouseY, vol*400, vol*400)
  //ellipse(height/2, width/2, vol*300, vol*300);
  console.log(vol)
}

// Chrome 70 will require user gestures to enable web audio api > https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
// Click on the web page to start audio 
function touchStarted() {
  getAudioContext().resume();
}
