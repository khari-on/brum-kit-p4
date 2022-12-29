
const drumButton = document.querySelectorAll('.drum')

drumButton.forEach((container)=>{
   container.addEventListener('click',(e)=>{
       const buttonInnerHtml =e.target.innerHTML;
       console.log(buttonInnerHtml)
       audioPlay(buttonInnerHtml);
   })  
})

drumButton.forEach((contain)=>{
    contain.addEventListener('keydown',(e)=>{
        const currentKey=e.key;
        console.log(currentKey)
        audioPlay(currentKey)
    
    })
})





function audioPlay(buttonInnerHtml){
    
    switch(buttonInnerHtml){
        
        case 'w':
         audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
         audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
         break;

     case 's':
        audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;

     case 'd':
        audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;
    case 'j':
            audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
     case 'k':
         audio = new Audio('./sounds/kick-bass.mp3');
         audio.play();
        break;
     case 'l':
         audio = new Audio('./sounds/snare.mp3');
         audio.play();
         break;
    }
}
