const randomizer = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F']

function random(){
    return Math.floor(Math.random() * (randomizer.length - 1))
}

const color = document.querySelector('.color')
const button = document.querySelector('button')
button.addEventListener('click', ()=>{
    random();
    let hexcolor = ""
    for(let i = 0; i < 6; i++){
        hexcolor += randomizer[random()]
    }

    document.body.style.backgroundColor = '#'+ hexcolor +''
    color.innerHTML = '#'+ hexcolor +''
})