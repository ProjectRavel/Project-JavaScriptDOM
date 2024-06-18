const colorArray = ['red', 'gray', 'purple', 'orange', 'yellow']

function randomizer(){
    return Math.round(Math.random() * (colorArray.length - 1)) 
}

const colorText = document.querySelector('.color')
const btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
    colorText.innerHTML = 
    document.body.style.backgroundColor = ''+ colorArray[randomizer()] +''
})