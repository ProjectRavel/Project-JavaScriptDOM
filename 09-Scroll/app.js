const dateFooter = document.querySelector('#date')
const linkContainer = document.querySelector('.links-container')
const navToggle = document.querySelector('.nav-toggle')
const link = document.querySelector('.links')

navToggle.addEventListener('click', ()=>{
    // linkContainer.classList.toggle('show-links')
    const containerHeight = linkContainer.getBoundingClientRect().height
    const linksHeight = link.getBoundingClientRect().height

    if(containerHeight == 0){
        linkContainer.style.height = `${linksHeight}px`
    }else{
        linkContainer.style.height = 0
    }
})
dateFooter.innerHTML = new Date().getFullYear();

// Fixed Nav
const navbar = document.getElementById("nav")
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function(){
    const scrollHeight = window.scrollY
    const navHeight = navbar.getBoundingClientRect().height


    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
        topLink.classList.add('show-link')
    }else{
        navbar.classList.remove('fixed-nav')
        topLink.classList.remove('show-link')
    }
})

// Scroll Link Bug
const scrollLink = document.querySelectorAll('.scroll-link')

scrollLink.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        // preventDefault
        e.preventDefault()

        // Navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        // Calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height
        const fixNav = navbar.classList.contains('fixed-nav')
        let position = element.offsetTop
        console.log(containerHeight)
        console.log(fixNav)

        if(fixNav){
            window.scrollTo({
                left:0, 
                top:position - navHeight - navHeight,
            })
        }if(navHeight > 82){
            window.scrollTo({
                left:0, 
                top:position - navHeight,
            }) 
        }if(!fixNav){
            window.scrollTo({
                left:0, 
                top:position - containerHeight - navHeight - 82,
            }) 
        }
    })
})