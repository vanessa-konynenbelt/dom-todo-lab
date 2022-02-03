const input = document.getElementById('my-input')
const todoBtn =  document.getElementById('submit-button')
const rstBtn = document.getElementById('reset-button')
const ul =  document.getElementById('todo-list')

todoBtn.addEventListener('click', function(){
  const newLi = document.createElement('li')
  if(input.value.trim().length !== 0){ //any amount of spaces
    newLi.textContent = input.value
    document.querySelector('ul').appendChild(newLi)
    input.value = ""
  }
})
rstBtn.addEventListener('click', function(){
  input.value = "" //redundant?  
  ul.innerHTML = "" 
})

ul.addEventListener('click', function(evt){
  evt.target.parentNode.removeChild(evt.target) 
})

