const openModalButtons =document.querySelectorAll('[data-modal-target]')
const closeModalButtons =document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', ()=> {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


function SelectValue(value){
    var val1 = 0;
    for( i = 0; i < document.form1.feeling.length; i++ ){
        if( document.form1.feeling[i].checked == true){
            val1 = document.form1.feeling[i].value;
        } 
    }

    var val2 = 0;
    for( i = 0; i < document.form2.flavor.length; i++ ){
        if( document.form2.flavor[i].checked == true){
            val2 = document.form2.flavor[i].value;
        } 
    }

    var sum = parseInt(val1) + parseInt(val2);

    if(sum == 1) {
        document.getElementById('img').src='image/foodimg/1.jpg'
        /*document.getElementById('demo').innerHTML="제육복음!"*/
    }  
    
    if(sum == 2) {
        document.getElementById('img').src='image/foodimg/2.jpg'
    }
    
    if(sum == 3) {
        document.getElementById('img').src='image/foodimg/3.jpg'
    }
    
    if(sum == 4) {
        document.getElementById('img').src='image/foodimg/4.jpg'
    }  
    
    if(sum == 5) {
        document.getElementById('img').src='image/foodimg/5.jpg'
    }

    if(sum == 6) {
        document.getElementById('img').src='image/foodimg/6.jpg'
    }
    
    if(sum == 7) {
        document.getElementById('img').src='image/foodimg/7.jpg'
    }  
    
    if(sum == 8) {
        document.getElementById('img').src='image/foodimg/8.jpg'
    }

    if(sum == 9) {
        document.getElementById('img').src='image/foodimg/9.jpg'
    }
    
    if(sum == 10) {
        document.getElementById('img').src='image/foodimg/10.jpg'
    }  
    
    if(sum == 11) {
        document.getElementById('img').src='image/foodimg/11.jpg'
    }

    if(sum == 12) {
        document.getElementById('img').src='image/foodimg/12.jpg'
    }  
    
    if(sum == 13) {
        document.getElementById('img').src='image/foodimg/13.jpg'
    }

    if(sum == 14) {
        document.getElementById('img').src='image/foodimg/14.jpg'
    }  
    
    if(sum == 15) {
        document.getElementById('img').src='image/foodimg/15.jpg'
    }

    if(sum == 16) {
        document.getElementById('img').src='image/foodimg/16.jpg'
    }  
    
    if(sum == 17) {
        document.getElementById('img').src='image/foodimg/17.jpg'
    }
   
    if(sum == 18) {
        document.getElementById('img').src='image/foodimg/18.jpg'
    }

    if(sum == 19) {
        document.getElementById('img').src='image/foodimg/19.jpg'
    }  
    
    if(sum == 20) {
        document.getElementById('img').src='image/foodimg/20.jpg'
    }

}
