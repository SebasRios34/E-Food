/*
(function () {
    // var init =()=>{
    //     var modal = document.getElementById('id01');
    //     var modal2 = document.getElementById('id02');

    //     window.onclick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }

    //         if (event.target == modal2) {
    //             modal2.style.display = "none";
    //         }
    //     }
    // }
    // var backgroundPics =()=>{
    //     var slideIndex = 0;
    //     showSlides();

    //     function showSlides() {
    //         var i;
    //         var slides = document.getElementsByClassName("mySlides");
    //         for (i = 0; i < slides.length; i++) {
    //             slides[i].style.display = "none";
    //         }
    //         slideIndex++;
    //         if (slideIndex > slides.length) {
    //             slideIndex = 1
    //         }
    //         slides[slideIndex - 1].style.display = "block";
    //         setTimeout(showSlides, 2000);
    //     }
    // }

    var myIndex = 0;
    

    var carousel = () =>
    {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    //init();
    carousel();
    //backgroundPics();
    
})()
*/
(function(){

    var init =(e) =>{
        //e.preventDefault();
        const usuario = document.getElementById('usuario')
        const password = document.getElementById('password')
        const form = document.getElementById('form')
        const errorElement = document.getElementById('error')
        form.addEventListener('submit', (e) => {
            let messages = []
            if(usuario.value === '' || usuario.value === null){
                messages.push('El nombre de usuario es requerido')
            }
            if(password.value === '' || password.value === null){
                messages.push('la contraseña es requerida')
            }
            if(password.value === 'password'){
                messages.push('la contraseña no puede ser password')
            }
            if(password.value ==='constraseña'){
                messages.push('la contraseña no puede ser contraseña')
            } 
        
            if(messages.length > 0){
                e.preventDefault()
                errorElement.innerText = messages.join(', ')
            }
        })
    }
    
    init();
})()


    
