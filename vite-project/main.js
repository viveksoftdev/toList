import './style.css'
const simpleOperations = (inputEle)=>{
  if (inputEle !== ''){
  const  newElement = document.createElement('div');
            newElement.innerHTML = inputEle;
            newElement.setAttribute('class','container');
            const taskRoom = document.querySelector('.task__room');
            
            taskRoom.append(newElement);
            inputEle.value='';
          }
}
const inputText = (event)=>{
        const button =document.querySelector('input__btn');
        const inputElement = document.querySelector('.input__box');
        if (event.type == 'keyup' && event.key  == 'Enter')
          {
            
            simpleOperations(inputElement.value);
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
        inputText(event);

      })
  
    
    })