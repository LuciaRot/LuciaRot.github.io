let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


window.addEventListener("load", handleLoad);


function handleLoad(): void {

drawBackground();
drawCell();
drawParticle();
drawAntibody();
drawWhitecells();
drawVirus();
spreadVirus();
}


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawBackground(): void{
let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, canvas.width, canvas.height);

gradient.addColorStop(0, "red");
gradient.addColorStop(1, "white");
crc2.fillStyle = gradient;
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


let pattern: CanvasRenderingContext2D = document.createElement('canvas').getContext('2d');
pattern.canvas.width = 80;
pattern.canvas.height = 40;
pattern.fillStyle = "red";
pattern.globalAlpha = 0.5;
pattern.strokeStyle = "white";
pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
pattern.moveTo(0, 20);
pattern.lineTo(20, 20);
pattern.lineTo(40, 0);
pattern.lineTo(60, 0);
pattern.lineTo(80, 20);
pattern.lineTo(60, 40);
pattern.lineTo(40, 40);
pattern.lineTo(20, 20);

pattern.stroke();

crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
crc2.fillRect(0, 0, canvas.width, canvas.height);

}

function drawCell(): void{
    crc2.beginPath();
    crc2.arc(50, 50, 25, 0, 2 * Math.PI);
    crc2.strokeStyle = "darkred";
    crc2.fillStyle = "darkred";
    crc2.fill();
    crc2.stroke();

}

function drawParticle(): void{
    crc2.beginPath();
    crc2.arc(100, 100, 12.5, 0, 2 * Math.PI);
    crc2.strokeStyle = "transparent";
    crc2.fillStyle = "white";
    crc2.globalAlpha = 0.5;
    crc2.fill();
    crc2.stroke();
}

function drawAntibody():void{
    crc2.beginPath();
    crc2.arc(150, 150, 25, 0, 1 * Math.PI);
    crc2.strokeStyle = "black";
    
    crc2.moveTo(150, 175);
    crc2.lineTo(150,200);
    crc2.globalAlpha = 1;
    crc2.stroke();
}

function drawWhitecells(): void{
    crc2.beginPath();
    crc2.ellipse(200, 250, 15, 25, 0, 0, 2 * Math.PI);
    crc2.strokeStyle = "white";
    crc2.fillStyle = "white";
    crc2.globalAlpha = 0.8;
    crc2.fill();
   
    crc2.stroke();
}

function drawVirus():void{
    crc2.beginPath();
    crc2.arc(250, 300, 30, 0, 2 * Math.PI);
    crc2.strokeStyle ="darkgreen";
    crc2.fillStyle = "darkgreen"
    crc2.globalAlpha = 1;
    crc2.fill();
    crc2.stroke();
}

//function spreadVirus(_position: Vector, size: Vector): void{
    //let nVirus: number = 5;
    //let radiusVirus: number = 25;
     //let Virus: Path2D = new Path2D();
    //let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusVirus);

    //Virus.arc(0, 0, radiusVirus, 0, 2 * Math.PI);
   //gradient.addColorStop(0, "lightgreen");
    //gradient.addColorStop(0.5, green);
    //gradient.addColorStop(1, "darkgreen");
    //crc2.save();
    //crc2.translate(_position.x, _position.y);
    //crc2.fillStyle = gradient;
    //crc2.fill(Virus);
//}