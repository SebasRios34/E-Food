          
var validaciones =(e)=> {
    e.preventDefault();
    var verify = true;
    var form = document.getElementById('frmCrearSesion');
    var confirmcontra= document.getElementById('ConfirmarContrasenia');
    var contrasenia = document.getElementById('contrasenia');
    var email = document.getElementById('email');
    var respuestaSeguridad = document.getElementById('respuestaSeguridad');
    var usuario = document.getElementById('usuario');
    var verify = true;
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!usuario.value){
        alert('El campo usuario es requerido');
        usuario.focus();
        verify = false;
    }
    else if(!email.value){
        alert('El campo email o correo es requerido');
        email.focus();
        verify = false;
    }else if(!expRegEmail.exec(email.value)){
        alert('El campo email no tiene formato');
        email.focus();
        verify = false;
    }else if(!contrasenia.value){
        alert('El campo contraseña es requerido');
        email.focus();
        verify = false;
    }else if(confirmcontra.value !== contrasenia.value){
        alert('las contraseñas no son iguales, favor verifique');
        constrasenia.focus();
        confirmcontra.focus();
        verify = false;
    }else if(!respuestaSeguridad.value){
        alert('por favor introduzca su respuesta de seguridad');
        respuestaSeguridad.focus();
        verfiy = false;
    }
    if(verify){
        alert('el usuario se ha creado correctamente');
        form.onsubmit();
    }    
}

window.onload = function () {
    
    var btnRedondoCrearUsuario =  document.getElementById('btnRedondoCrearUsuario');
    btnRedondoCrearUsuario.onclick = validaciones;

}

