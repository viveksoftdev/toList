import './style.css'



let counter = 0;
let taskArray = new Array();
let drag = false;


const currentDate = () =>{
  let timeStamp = Date.now();
  let date = new Date(timeStamp)
  return date
}
const moveEvent = (taskElement) =>{
  document.addEventListener('mousemove',(event)=>{
    let startx,starty,element = findWhichToMove();
    const currentX = event.clientX;
    const currentY = event.clientY;
    taskElement.style.position = 'fixed';
    taskElement.style.top = currentY+'px';
    taskElement.style.left = currentX+'px';
    return {x:startx,y:starty,cX:currentX,cY:currentY}


  })


}
const findWhichToMove = ()=>{
  const startx = 0;
  const starty = 0;
  document.addEventListener('mousedown',(event)=>{
    
    if (taskArray.includes(event.target.id)){
      drag = true
      let endx = event.clientX;
      let endy = event.clientY;
      console.log(endx)
    }
    return {x:startx,y:starty,element:event.target.id}
  })

}








const simpleOperations = (inputEle)=>{
  

  if (inputEle !== ''){
  const  newElement = document.createElement('div');
            newElement.innerHTML = inputEle;
            newElement.setAttribute('class','container');
            const taskRoom = document.querySelector('.task__room');
            newElement.setAttribute(`id`,`item-${counter}`);
            taskRoom.append(newElement);
            inputEle='';  
            taskArray.push(`item-${counter}`);
          
            counter++;
           
              
          } 
          
  }
          
        

const inputText = (event)=>{
        
        let taskArray = new Array();
        
        const button =document.querySelector('input__btn');
        const inputElement = document.querySelector('.input__box');
        if (event.type == 'keyup' && event.key  == 'Enter')
          {
            
            let func = simpleOperations(inputElement.value);
            
           

           
          }
        else if(event.type == 'click' && event.target.dataset.func=='btn'){
          
            simpleOperations(inputElement.value);

        }
    }
    document.addEventListener('DOMContentLoaded',(domEvent)=>{
      
      document.addEventListener('keyup',(event)=>{
        inputText(event);

      })
      document.addEventListener('click',(event)=>{
        console.log(event.target.id);
        const element = document.querySelector(`#${event.target.id}`);
        inputText(event);
        let startx,starty,currentX,currentY = moveEvent(element);
        console.log(startx);

      })
  
    
    })