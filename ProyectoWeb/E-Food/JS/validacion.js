(function(){
    var val ={
        usuario:{},
        contrasenia:{},
        confirmcontra:{},
        email:{},
        respuestaSeguridad:{},
        btnRedondoCrearUsuario:{},
        form:{},
        inicializar: function(){
            this.form = document.getElementById('frmCrearSesion');
            this.btnRedondoCrearUsuario = document.getElementById('btnRedondoCrearUusario');
            this.confirmcontra= document.getElementById('ConfirmarContrasenia');
            this.constrasenia = document.getElementById('contrasenia');
            this.email = document.getElementById('email');
            this.respuestaSeguridad = document.getElementById('respuestaSeguridad');
            this.usuario = document.getElementById('usuario');
            this.bind();
        },
        bind: function(){
            this.btnRedondoCrearUsuario = this.validar;

        },
        validar = function (e) {
            e.preventDefault();
            var verify = true;
            var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if(!val.usuario.value){
                alert('El campo usuario es requerido');
                validacion.usuario.focus();
                verify = false;
            }
            else if(!val.email.value){
                alert('El campo email o correo es requerido');
                val.email.focus();
                verify = false;
            }else if(!expRegEmail.exec(validacion.email.value)){
                alert('El campo email no tiene formato');
                val.email.focus();
                verify = false;
            }else if(!val.contrasenia.value){
                alert('El campo contraseña es requerido');
                val.email.focus();
                verify = false;
            }else if(val.confirmcontra.value !== val.contrasenia.value){
                alert('las contraseñas no son iguales, favor verifique');
                val.constrasenia.focus();
                val.confirmcontra.focus();
                verify = false;
            }else if(!val.respuestaSeguridad.value){
                alert('por favor introduzca su respuesta de seguridad');
                val.respuestaSeguridad.focus();
                verfiy = false;
            }

            if(verify){
                alert('el usuario se ha creado correctamente');
                val.form.onsubmit();
            }
        }
    }
    val.inicializar();
})()