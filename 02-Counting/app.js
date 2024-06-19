const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')
let values = 0

btns.forEach((e)=>{
    e.addEventListener('click', (eventB)=>{
        if(e.classList.contains('decrease')){
            values = values - 1
            value.innerHTML = values
        }else if(e.classList.contains('increase')){
            values++
            value.innerHTML= values
        }else{
            values = 0
            value.innerHTML= values
        }
    })
})