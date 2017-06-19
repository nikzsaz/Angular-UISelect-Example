var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

//  This is to draw a rectangle
/*c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(100,100,100,100);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(400,100,100,100);
c.fillStyle = "rgba(0,0,255,0.5)";
c.fillRect(300,200,100,100);*/

// This is to draw a line
/*c.beginPath();
c.moveTo(50,100);
c.lineTo(300,300);
c.strokeStyle = "rgba(0,0,255,0.5)";
c.stroke();
c.beginPath();
c.moveTo(500,200);
c.lineTo(100,400);
c.lineTo(300,500);
c.strokeStyle = "rgba(255,0,0,0.5)";
c.stroke();*/
//To design an arc
//for(var i = 0 ; i < 200 ; i++){
   // var x = Math.random() * window.innerWidth;
  //  var y = Math.random() * window.innerHeight;
   
//}
var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
//var minRadius = 2;
var colorArray =[
    '#3A477F',
    '#2B97D1',
    '#4EB16C',
    '#FCD755',
    '#FFBFBF',
]
window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;

})

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.udpate = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
             this.dx = -this.dx;
            }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy;
            }
        this.x += this.dx;
        this.y += this.dy;
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y <50 && mouse.y - this.y >-50){
            if(this.radius < maxRadius){
            this.radius += 1;
            }
        }else if(this.radius > this.minRadius){
            this.radius -= 1;
        }
        this.draw();
        }
}

var circleArray = [];

function init(){
    circleArray = [];
    for(var i = 0 ; i < 800 ; i++){
    var radius = Math.random() * 4 + 1;
    var x = Math.random() * (innerWidth - radius*2) + radius;
    var y = Math.random() * (innerHeight - radius*2) + radius;   
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x,y,dx,dy,radius));
    }
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight)
    for(var i = 0; i < circleArray.length ; i++){
        circleArray[i].udpate();
    }
}
init();
animate();