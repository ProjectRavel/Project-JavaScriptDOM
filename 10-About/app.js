const image = document.querySelector('.about-img')
const aboutButton = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')

aboutButton.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        
        const target = e.currentTarget
        aboutButton.forEach((btn)=>{
            btn.classList.remove('active')
        })

        target.classList.add('active')
        image.childNodes[1].setAttribute('src', `./${target.dataset.id}.png`)
        
        contents.forEach((content)=>{
            if(content.getAttribute('id') == target.dataset.id){
                content.classList.add('active')
            }else{
                content.classList.remove('active')
            }
        })
    })
})