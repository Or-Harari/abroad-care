import React, { useEffect, useRef, useState } from 'react';
import './Canvas.css';

const Canvas = () => {

  const particlesList = []
  const canvasRef = useRef(null);
  const[context, SetContext] = useState();
  const [mouseMoved,SetMouseMoved] = useState(false); 
  const [canvas,SetCanvas] = useState()
  const [started,SetStarted] = useState(false);

  useEffect(() => {
    inisializeParticles()

    if(canvas && context === undefined){
      SetContext(canvas.getContext('2d'))
    }
    if(started === false && context !== undefined && canvas){
      animate();
      SetStarted(true)
    }
    if(!canvas){
      SetCanvas(canvasRef.current);

  }},[started,canvas,context]);
  
      function inisializeParticles(){
        if(particlesList.length < 1){
          console.log('sdsdd')
          for(var i = 0; i <50; i++){
            particlesList.push(new Particles())
          }}
      }
      function handleParticles(context){       
        context.clearRect(0,0,canvas.width,canvas.height)
        if(particlesList.length > 1 && context){
          for(var i =0; i <particlesList.length -1; i++){
            particlesList[i].update();
            particlesList[i].draw(context);

        for(var j =i; j <particlesList.length -1; j++){
            let dx;
            let dy;
            let distance 
            if(particlesList[i] && particlesList[j]){
                dx = particlesList[i].positionX - particlesList[j].positionX
                dy = particlesList[i].positionY - particlesList[j].positionY
                distance = Math.sqrt(dx*dx + dy*dy);
              }
              if(distance < 100){
                context.strokeStyle = 'hsl(' + particlesList[j].color + ' 100% 100% / .2)'
                context.lineWidth = particlesList[j].size /5
                context.beginPath();
                context.moveTo(particlesList[j].positionX, particlesList[j].positionY);
                context.lineTo(particlesList[i].positionX, particlesList[i].positionY);
                context.stroke(); 
              }}}
            }}
          function animate(){
            console.log('animate')
            if(mouseMoved === false){
              canvasRef.current = cancelAnimationFrame(canvasRef.current);
            }
            if(canvas&& canvasRef !==null){
              handleParticles(context);
              //console.log('animating')
              canvasRef.current = requestAnimationFrame(animate)
            }
          }
return (
  <div className='main-divv'>
    <div id='sec' className='sec'>
    <canvas id='canvas' className='canvas' width='1400' height='700' ref={canvasRef}/>
    </div>
    </div>
  )
};

class Particles {
    constructor(){
        this.positionX = Math.random() * document.getElementById('canvas').width;
        this.positionY = Math.random() * document.getElementById('canvas').height;
        this.speedX = Math.random() * 1 -.5 ;
        this.speedY = Math.random() * 1 -.5;
        this.size = Math.random()* 5 +1
        this.color = 200;
    }

     chil = ()=>{
      this.color += 1
      //console.log(this.positionX)
      if(this.positionX <= 0 ||  this.positionX >= document.getElementById('canvas').width){
        console.log(this.speedX)

        this.speedX *= -1 ;
      }
      else if(this.positionY <= 0 ||this.positionY >= document.getElementById('canvas').height){
        this.speedY *= -1;
      }
      this.positionX += this.speedX;
      this.positionY += this.speedY;
    }

    update = ()=>{
      this.chil()
    } 

    draw = (ctx) => {
      ctx.fillStyle = 'white';
      ctx.beginPath()
      ctx.arc(this.positionX ,this.positionY, this.size, 0, 2* Math.PI)
      ctx.fill()
    }
}

export default Canvas;