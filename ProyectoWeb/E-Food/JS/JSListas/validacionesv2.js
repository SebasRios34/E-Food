(function(){
    var validacion={
        nombre:{},
        edad:{},
        email:{},
        asunto:{},
        genero:{},
        comentario:{},
        btnEnviar:{},
        btnLimpiar:{},
        inicilizar:function(){
            this.btnEnviar = document.getElementById('enviar');
            this.btnLimpiar = document.getElementById('limpiar');
            this.nombre = document.getElementById('nombre');
            this.edad = document.getElementById('edad');
            this.email = document.getElementById('email');
            this.genero = document.getElementsByName('rdGenero');
            this.asunto = document.getElementById('asunto');
            this.comentario= document.getElementById('comentario');
            this.bind();
        }, 
        bind: function(){
            this.btnEnviar = this.validarForm;
            this.btnLimpiar= this.limpiarForm;
        },
        limpiarForm = function (evento) {
            evento.preventDefault();
            var nombreBtn = evento.target.name;
            alert(nombreBtn);
            console.log('limpiando formulario...');
            document.getElementById('frmValidacion').reset();
        },
        validarForm = function (e) {
            e.preventDefault();
            var verifica = true;
            var expRegNombre = /^[a-zA-ZÑñÁÉÍÓÚáéíóúÜü\s]+$/;
            var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;          
            if (!validacion.nombre.value) {
                alert('El campo nombre es requerido');
                validacion.nombre.focus();
                verifica = false;
            } else if (!expRegNombre.exec(validacion.nombre.value)) {
                alert('El campo nombre solo acepta letras y espacios en blanco');
                nombre.focus();
                verifica = false;
            } else if (isNaN(validacion.edad.value)) {
                alert('El campo edad solo acepta números');
                validacion.edad.focus();
                verifica = false;
            } else if (validacion.edad.value < 18 || validacion.edad.value > 60) {
                alert('El campo edad tiene un rango de 18 a 60 años');
                edad.focus();
                verifica = false;
            } else if (!validacion.email.value) {
                alert('El campo email o correo es requerido');
                validacion.email.focus();
                verifica = false;
            }else if(!expRegEmail.exec(validacion.email.value)){
                alert('El campo email no tiene formato');
                validacion.email.focus();
                verifica = false;
            }else if(!validacion.asunto.value){
                alert('El campo asunto es requerido');
                validacion.asunto.focus();
                verifica = false;
            }else if(!validacion.comentario.value){
                alert('El campo comentario es requerido');
                validacion.comentario.focus();
                verifica = false;
            }else if(validacion.comentario.value.length> 255){
                alert('El campo comentario solo admite 255 caracteres');
                validacion.comentario.focus();
                verifica = false;
            }        
        
            if (verifica) {
                alert('Se ha enviado el formulario');
                validacion.formulario.onsubmit();
            }
        
        }
    }
    validacion.inicilizar();
})()