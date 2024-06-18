const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const buttonContainer = document.querySelector('.button-container')
const count = document.querySelector('#value')
let counts = 0
count.innerHTML = counts

buttonContainer.addEventListener('click', (e)=>{
    
    if(e.target.classList.contains('decrease')){
        count.innerHTML--
    }if(e.target.classList.contains('increase')){
        count.innerHTML++
    }if(e.target.classList.contains('reset')){
        count.innerHTML = 0
    }
})