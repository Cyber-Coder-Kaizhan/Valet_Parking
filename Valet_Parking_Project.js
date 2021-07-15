canvas = document.getElementById('my_canvas');
ctx= canvas.getContext("2d");

car1_width= 100;
car1_height=150;

car1_x= 10;
car1_y= 10;




background_img= "https://us.123rf.com/450wm/artinspiring/artinspiring1807/artinspiring180700088/115034756-city-car-parking-top-view-the-automobile-parking-in-the-empty-parking-lot-flat-vector-illustration.jpg?ver=6";
car_img1= "car2.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_img;

    car_img1Tag= new Image();
    car_img1Tag.onload= uploadcar1;
    car_img1Tag.src= car_img1;

    car_img2Tag= new Image();
    car_img2Tag.onload= uploadcar2;
    car_img2Tag.src= car_img2;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0 , canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car_img1Tag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car_img2Tag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed= e.keyCode;
console.log(keyPressed);
if (keyPressed=='38'){
    car1_up();
    console.log("up arrow key");
}

if (keyPressed=='40'){
    car1_down();
    console.log("down arrow key");
}

if (keyPressed=='37'){
    car1_left();
    console.log("left arrow key");
}

if (keyPressed=='39'){
    car1_right();
    console.log("right arrow key");
}
function car1_up(){
    if(car1_y >= 0){
    car1_y-=10;
    console.log("When up pressed x="+car1_x+" y="+ car1_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car1_down(){
    if(car1_y <= 500){
        car1_y+=10;
    console.log("When down pressed x="+car1_x+" y="+ car1_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car1_left(){
    if(car1_x >= 0){
        car1_x-=10;
    console.log("When left pressed x="+car1_x+" y="+ car1_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car1_right(){
    if(car1_x <= 700){
        car1_x+=10;
    console.log("When right pressed x="+car1_x+" y="+ car1_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}
}