$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


function validateForm(e) {     
    e.preventDefault()     
    var name = document.loginForm.name.value    
    if (name.length<=3) {     
        return alert (`Full name is required`)
     }
        else {         
            return alert(`You are successfully subscribed`) ; 
        }    
    }
