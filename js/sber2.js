const reviewContainer = document.querySelector('.review_container')  
const prevReview = document.querySelector('.prev_slide')
const nextReview = document.querySelector('.next_slide')    
const slidesReview = Array.from(reviewContainer.querySelectorAll('.review')) 
const reviewCount = slidesReview.length 
let reviewIndex = 0   

prevReview.addEventListener('click', reviewPrevShow) 
nextReview.addEventListener('click', reviewNextShow)    

function reviewPrevShow(){ 
    reviewIndex = (reviewIndex - 1 + reviewCount) % reviewCount;
    newReviewCount() 
}

function reviewNextShow(){ 
    reviewIndex = (reviewIndex + 1) % reviewCount; 
    newReviewCount()
}  

function newReviewCount(){ 
    slidesReview.forEach((slide, index) => { 
        if(index === reviewIndex){ 
            slide.style.display = 'flex'
        } 
        else{ 
            slide.style.display = 'none'
        }
})  
} 
newReviewCount() 

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.first_title, .section_title, .ab_circle, .aboutImg, .projects_title, .projects_subtitle, .stage_title, .stage_arrow, .stage_img, .company_inf h1, .arrow_company, .forclient_inf h1, .arrow_forclient, .reviews_title, .reviews_subtitle, .form_title, .form_subtitle, .form');
  
  for (let elm of elements) {
    observer.observe(elm);
  } 