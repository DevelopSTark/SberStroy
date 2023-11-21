let popup = document.querySelector('.popup') 
let popupBg = document.querySelector('.popup_bg')
let closePopup = document.querySelector('.close_popup')

document.getElementById('popupBtn').addEventListener('click', (e) => { 
    popup.classList.add('active') 
    popupBg.classList.add('active')
})

document.getElementById('popupBtn2').addEventListener('click', (e) => { 
    popup.classList.add('active') 
    popupBg.classList.add('active')
})

document.getElementById('popupBtn3').addEventListener('click', (e) => { 
    popup.classList.add('active') 
    popupBg.classList.add('active')
})

closePopup.addEventListener('click', (e) => { 
    popup.classList.remove('active') 
    popupBg.classList.remove('active')
})