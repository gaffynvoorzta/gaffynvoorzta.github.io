
let starsPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/stars.mp4';
let staticPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/static.mp4';
let ufoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/UFO.mp4';

let ufoVideo, redUfoVideo, greenUfoVideo, blueUfoVideo, starsVideo, staticVideo;
let videos;
let outsideVideos;

let margin = 20;
let numOfScreensTall = 4;
let numOfScreensWide = 4;

let counter = 1;

function setup() {
  pixelDensity(1);
  createCanvas(600, 500);
  // TODO: Load videos
  ufoVideo = createVideo(ufoPath);
  redUfoVideo = createVideo(ufoPath);
  greenUfoVideo = createVideo(ufoPath);
  blueUfoVideo = createVideo(ufoPath);
  starsVideo = createVideo(starsPath);
  staticVideo = createVideo(staticPath);
  
  // TODO: Populate videos array
  videos = [ufoVideo, redUfoVideo, greenUfoVideo, blueUfoVideo, starsVideo, staticVideo];
  // TODO: Iterate over videos to loop, mute, and hide each one
  videos.forEach(video => {
    video.volume(0);
    video.loop();
    video.hide();
  });
  // TODO: Populate outsideVideos array
  outsideVideos = [redUfoVideo, greenUfoVideo, blueUfoVideo, starsVideo, staticVideo];
}

function draw() {
  background(0);
  
  // Calculate the width and height for each "screen" in the grid
  let w = (width - margin * (numOfScreensWide + 1)) / numOfScreensWide;
  let h = (height - margin * (numOfScreensWide + 1)) / numOfScreensWide;
  
  
  // Create a 4x4 grid of screens with a margin of 20px
  for (let i = 0; i < numOfScreensWide; i++) { 
    for (let j = 0; j < numOfScreensTall; j++) {
    
      // Calculate current x, y position where this "screen" should be drawn
      let x = margin + i * (w + margin);
      let y = margin + j * (h + margin);
      
      // Draw a white rectangle to demonstrate where this "screen" is
      fill(255);
      rect(x, y, w, h);
      
      // TODO: Fill this "screen" with a video, according to its (i,j) position
      if (i === 1 && j === 1) {
        image(ufoVideo, x, y, w, h, 0, 0, ufoVideo.width / 2, ufoVideo.height / 2);
      }
      else if (i === 1 && j === 2) {
        image(ufoVideo, x, y, w, h, 0, ufoVideo.height / 2, ufoVideo.width / 2, ufoVideo.height / 2);
      }
      else if (i === 2 && j === 1) {
        image(ufoVideo, x, y, w, h, ufoVideo.width / 2, 0, ufoVideo.width / 2, ufoVideo.height / 2);
      }
      else if (i === 2 && j === 2) {
        image(ufoVideo, x, y, w, h, ufoVideo.width / 2, ufoVideo.height / 2, ufoVideo.width / 2, ufoVideo.height / 2);
      }
      else {
        let selectedIndex = (i + j + counter) % outsideVideos.length;
        let selectedVideo;
        if (selectedIndex === 0) {
          //Load video pixels
          redUfoVideo.loadPixels();
          //Iterate through all pixels in the video
          let stepSize = 1;
          for (let y1 = 0; y1 < redUfoVideo.height; y1 += stepSize){
            for (let x1 = 0; x1 < redUfoVideo.width; x1 += stepSize){
              //TODO: Play around with pixel manipulation!
              let indexOfRed = (x1 + y1 * redUfoVideo.width) * 4;
              //ufoVideo.pixels[indexOfRed] = random(100);
              redUfoVideo.pixels[indexOfRed + 1] = random(100);
              redUfoVideo.pixels[indexOfRed + 2] = random(100);
            }
          }
          redUfoVideo.updatePixels(); 
          selectedVideo = redUfoVideo;
        }
        else if (selectedIndex === 1) {
          //Load video pixels
          blueUfoVideo.loadPixels();
          //Iterate through all pixels in the video
          let stepSize = 1;
          for (let y = 0; y < blueUfoVideo.height; y += stepSize){
            for (let x = 0; x < blueUfoVideo.width; x += stepSize){
              //TODO: Play around with pixel manipulation!
              let indexOfRed = (x + y * blueUfoVideo.width) * 4;
              blueUfoVideo.pixels[indexOfRed] = random(100);
              blueUfoVideo.pixels[indexOfRed + 1] = random(100);
              //blueUfoVideo.pixels[indexOfRed + 2] = random(100);
            }
          }
          blueUfoVideo.updatePixels(); 
          selectedVideo = blueUfoVideo;
        }
        else if (selectedIndex === 2) {
            //Load video pixels
            greenUfoVideo.loadPixels();
            //Iterate through all pixels in the video
            let stepSize = 1;
            for (let y = 0; y < greenUfoVideo.height; y += stepSize){
              for (let x = 0; x < greenUfoVideo.width; x += stepSize){
                //TODO: Play around with pixel manipulation!
                let indexOfRed = (x + y * greenUfoVideo.width) * 4;
                //greenUfoVideo.pixels[indexOfRed] = random(100);
                //greenUfoVideo.pixels[indexOfRed + 1] = random(100);
                //greenUfoVideo.pixels[indexOfRed + 2] = random(100);
                greenUfoVideo.pixels[indexOfRed + 3] = random(100);
              }
            }
            greenUfoVideo.updatePixels(); 
            selectedVideo = greenUfoVideo;
          }
        else if (selectedIndex === 3) {
          selectedVideo = staticVideo;
        }
        else if (selectedIndex === 4) {
          selectedVideo = starsVideo;
        }
        image(selectedVideo, x, y, w, h);
      }
    }
  }
}

// TODO: Make videos on the outside change when mouse is clicked
function mouseClicked() {
  counter++;
}