let burgerBtn = document.querySelector('.burger')  
let burgerSpan = document.querySelector('.burger span')
let navMenu = document.querySelector('.mobile_nav')

burgerBtn.addEventListener('click', function(){ 
    burgerSpan.classList.toggle('active')
    burgerBtn.classList.toggle('active')  
})  

burgerSpan.addEventListener('click', (e) =>{ 
    e.preventDefault() 
    navMenu.classList.add('active') 

    if(burgerSpan.classList.contains('active')){ 
        navMenu.classList.remove('active')
    }
})  

document.addEventListener('click', (e) => { 
    if(e.target === navMenu) { 
        burgerSpan.classList.remove('active') 
        navMenu.classList.remove('active');
    }
}) 