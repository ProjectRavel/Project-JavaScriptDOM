const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container')
const preloader = document.querySelector('.preloader')

window.addEventListener('load', ()=>{
    preloader.classList.add('hide-preloader')
})

window.addEventListener('DOMContentLoaded', ()=>{
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains('slide')){
            btn.classList.remove('slide')
            video.play()
        }else{
            btn.classList.add('slide')
            video.pause()
        }
    })
})  