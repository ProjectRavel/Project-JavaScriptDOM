const modalButton = document.querySelector('div.banner button')
const modalContent = document.querySelector('.modal-overlay')
const closeButton = document.querySelector('button.close-btn')

modalButton.addEventListener('click', ()=>{
    modalContent.classList.add('open-modal')
})

closeButton.addEventListener('click', ()=>{
   modalContent.classList.remove('open-modal')
})