// let shahrukh_img;
let capture;
function setup() {
    createCanvas(800, 500);
    // console.log('Setup function');
    // shahrukh_img=loadImage('images/shahrukh.png')
    capture=createCapture(VIDEO);
    capture.hide();
}

function draw() {
    // background(200);

    // // point
    // point(200, 200);

    // // line
    // line(200, 200, 300, 300);

    // // triangle
    // triangle(100, 200, 300, 400, 150, 450);

    // // circle
    // ellipse(600, 300, 100, 100);

    // // mouse follower
    // fill(255);
    // ellipse(mouseX, mouseY, 50, 50);
    // image(shahrukh_img,mouseX,mouseY,100,100);
    Image(capture,0,0,800,600);
}
