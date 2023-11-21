const innerContainer = document.querySelector('.inner_container')  
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')   
const countCircles = document.querySelector('.count_circles')
const circles = Array.from(countCircles.querySelectorAll('.project_circle'))  
const slides = Array.from(innerContainer.querySelectorAll('.projects_inner')) 
const circleCount = circles.length 
const slideCount = slides.length 
let slideIndex = 0 
let circleIndex = 0   

document.getElementById('companyLink').addEventListener('click', function (e) { 
    e.preventDefault()  

        document.getElementById('companyBlock').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
}) 

document.getElementById('companyLinkEnd').addEventListener('click', function (e) { 
    e.preventDefault()  

        document.getElementById('companyBlock').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
})

document.getElementById('companyLinkMob').addEventListener('click', function (e) { 
    e.preventDefault()  

        document.getElementById('companyBlock').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
})



document.getElementById('stageLink').addEventListener('click', function (e) { 
    e.preventDefault()  

        document.getElementById('stageBlock').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
}) 

document.getElementById('stageLinkEnd').addEventListener('click', function (e) { 
    e.preventDefault()  

        document.getElementById('stageBlock').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
})

document.getElementById('stageLinkMob').addEventListener('click', function (e) { 
    e.preventDefault()  

        document.getElementById('stageBlock').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
}) 



document.getElementById('projectLink').addEventListener('click', function (e) {
        e.preventDefault()  

        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
})   

document.getElementById('projectLinkEnd').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
})  

document.getElementById('projectLinkMob').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
})  



document.getElementById('advantagesLink').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('advantages').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}) 

document.getElementById('advantagesLinkEnd').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('advantages').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}) 

document.getElementById('advantagesLinkMob').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('advantages').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}) 


document.getElementById('contactsLink').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('contactsBlock').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
})  

document.getElementById('contactsLinkEnd').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('headerBlock').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}) 

document.getElementById('contactsLinkMob').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('contactsBlock').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
})  


document.getElementById('circle').addEventListener('click', function (e) {
    e.preventDefault()  

    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
})  


prevBtn.addEventListener('click', showPrevSlide) 
nextBtn.addEventListener('click', showNextSlide)    


function showPrevSlide(){ 
    slideIndex = (slideIndex - 1 + slideCount) % slideCount; 
    circleIndex = (circleIndex - 1 + circleCount) % circleCount; 
    newSlideCount() 
}

function showNextSlide(){ 
    slideIndex = (slideIndex + 1) % slideCount; 
    circleIndex = (circleIndex + 1) % circleCount; 
    newSlideCount()
}  

function newSlideCount(){ 
    slides.forEach((slide, index) => { 
        if(index === slideIndex){ 
            slide.style.display = 'flex'
        } 
        else{ 
            slide.style.display = 'none'
        }
    }) 
    circles.forEach((circles, circleIndex) => { 
        if(circleIndex === slideIndex) { 
          circles.classList.add('active')   
        } 
        if(circleIndex !== slideIndex) { 
          circles.classList.remove('active') 
        }   
      })
} 
newSlideCount()