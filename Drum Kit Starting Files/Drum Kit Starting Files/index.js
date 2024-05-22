var n=document.querySelectorAll('.drum').length;

document.querySelectorAll('.drum')[0].addEventListener('click',
      ()=>{
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
      }  
)
document.querySelectorAll('.drum')[1].addEventListener('click',
      ()=>{
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
      }  
)
document.querySelectorAll('.drum')[2].addEventListener('click',
      ()=>{
        var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
      }  
)
document.querySelectorAll('.drum')[3].addEventListener('click',
      ()=>{
        var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
      }  
)
document.querySelectorAll('.drum')[4].addEventListener('click',
      ()=>{
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
      }  
)
document.querySelectorAll('.drum')[5].addEventListener('click',
      ()=>{
        var crash=new Audio("sounds/crash.mp3");
                crash.play();
      }  
)
document.querySelectorAll('.drum')[6].addEventListener('click',
      ()=>{
        var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
      }  
)
