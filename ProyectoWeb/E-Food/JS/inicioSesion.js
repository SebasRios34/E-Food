(function () {

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

    var arrayDatosUsuariosAdmin = [];

    var usuario = document.getElementById('usuario');
    var password = document.getElementById('password');
    var verifica = true;

    var cargarUsuarios = () => {
        fetch('https://localhost:44360/api/UsuariosAdmin')
            .then(res => res.json())
            .then(data => {
                data = JSON.parse(data)
                arrayDatosUsuariosAdmin = data;
                console.table(arrayDatosUsuariosAdmin)
                validation();
            })
            .catch(err => console.log('error', err));
    }

    var validation = () => {

        if (arrayDatosUsuariosAdmin.indexOf(usuario) && arrayDatosUsuariosAdmin.indexOf(password)) {
            alert('Bienvenido: ' + usuarioInput);
            window.location.href("/ProyectoWeb/E-Food/HTML/MenuPrincipal.html");
        } else {
            alert('Datos Incorrectos');
            verifica = false;
            usuario.focus();
            password.focus();
        }
    }

    var btnIngresar = document.getElementById('btnIngresar');
    btnIngresar.onclick = function () {
        cargarUsuarios();
    }

})()


