const question = document.querySelectorAll('.question');

question.forEach((e)=>{
    e.addEventListener('click', (eClick)=>{
        const quest = eClick.currentTarget
        
        question.forEach((q)=>{
            if(q !== quest){
                q.classList.remove('show-text')
            }else{
                quest.classList.toggle('show-text')
            }
        })

    })
})