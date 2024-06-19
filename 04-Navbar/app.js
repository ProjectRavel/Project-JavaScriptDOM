const btnLinks = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

btnLinks.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
})