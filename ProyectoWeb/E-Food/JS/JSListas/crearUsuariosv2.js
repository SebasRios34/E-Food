(function () {
    var arrayUsuariosAdmin = [];
    var arrayRol = [];
    var arrayPreguntaSeguridad = [];

    var cargarUsuariosAdmin = () => {
        $.get("https://localhost:44360/api/UsuariosAdmin/1", function (data, status) {
            data = JSON.parse(data)
            arrayUsuariosAdmin = data;
            console.table(data);
            console.table(arrayUsuariosAdmin);
        });
    }

    var cargarRoles = () => {
        $.get("https://localhost:44360/api/Rol", function (data, status) {
            data = JSON.parse(data)
            arrayRol = data;
            console.table(data);
            console.table(arrayRol);
        });
    }

    var insertarUsuariosAdmin = () => {
        var data =
        {
            UsuariosAdminID: $('#usuarioId').val(),
            UsuariosNombre: $('#usuario').val(),
            Contrasena: $('#contrasenia').val(),
            Email: $('#email').val(),
            RolID: $('#rol').val(),
            PreguntaSeguridadID: $('#preguntaSeguridad').val(),
            RespuestaSeguridad: $('#respuestaSeguridad').val(),
            Estado: $('#estado').val()
        }

        $.ajax(
            {
                url: "https://localhost:44360/api/UsuariosAdmin",
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function () {

                    console.table("Datos insertados: " + data);
                    alert('Se ingreso el usuario ' + $('#usuario').val());

                },
                error: function (a, b, error) {
                    alert('ERROR')
                    console.error('ERROR' + error);
                }
            })

    }

    var validarUsuariosAdminId = () => {
        var usuariosAdminId = $('#usuarioId').val();
        var verifica = false;
        console.table(arrayUsuariosAdmin);

        for(var i = 0; i<arrayUsuariosAdmin.length; i++){
            var idArray = arrayUsuariosAdmin[i];
            if(idArray != usuariosAdminId){
                console.log('UsuarioAdminId: ' + usuariosAdminId + ' existe');
                verifica = true;
                break;
            }
            continue;
        }

        return verifica;

        // if(jQuery.inArray(usuariosAdminId, arrayUsuariosAdmin) != -1){
        //     verifica = true;
        //     console.log('codigoVerifica: ' + verifica);
        //     return verifica;
        // }else {
        //     verifica = false;
        //     console.log('codigoVerifica: ' + verifica);
        //     return verifica;
        // }

        //for(var i = 0; arrayUsuariosAdmin.length < i; i++){
            // if(/*$(arrayUsuariosAdmin).eq(i).*/jQuery.inArray(usuariosAdminId, arrayUsuariosAdmin) == -1){
            //     console.log(usuariosAdminId);
            //     verifica = false;
            //     console.log('verificaCodigo: ' + verifica);
            //     return verifica;
            // }
       // }
        // for (var i = 0; arrayUsuariosAdmin.length < i; i++) {
        //     if (usuariosAdminId != $(arrayUsuariosAdmin).eq(i).attr('UsuariosAdminID')) {
        //         verifica = true;
        //         console.log('verificaCodigo: ' + verifica);
        //         return verifica;
        //     } else {
        //         verifica = false;
        //         console.log('verificaCodigo: ' + verifica);
        //         return verifica;
        //     }
        // }

        // for(var i = 0; arrayUsuariosAdmin.length > i; i++){
        //     console.log('entre en el for');
        //     if(usuariosAdminId == $(arrayUsuariosAdmin).eq(i).attr('UsuariosAdminID')){
        //         console.log(i);
        //         verifica = true;
                
        //     }else{
        //         console.log(i);
        //         console.log('no existe <3');
        //         verifica = false
        //         break;
        //     }
        // }
        // return verifica;

        // while(arrayUsuariosAdmin.length>cont) {

        //     console.log('entre en el ciclo');
        //     if (usuariosAdminId != $(arrayUsuariosAdmin).eq(cont).attr('UsuariosAdminID')) {
        //         verifica = true;
        //         console.log('verficaCodigo: ' + verifica);
        //         break;
        //     } 
        //         cont++;
        //         verifica = false;
        //         console.log('verficaCodigo: ' + verifica);
        //         continue;

        // }
        // return verifica;
    }


    var encuentraUsuario = () => {
        var usuariosAdminId = $('#usuarioId').val();
        var cont = 0;
        var verifica = true;
        if (usuariosAdminId != $(arrayUsuariosAdmin).eq(cont).attr('UsuariosAdminID')) {
            return verifica;
        } else {
            cont = cont + 1;
            verifica = false;
            return verifica;
        }
    }

    var validarRolId = () => {
        var rolID = $('#rol').val();

        var verifica = true;

        for (var i = 0; arrayRol.length > i; i++) {
            if (rolID == $(arrayRol).eq(i).attr('RolID')) {
                console.log('verficaCodigoRol: ' + verifica);
                return verifica;
            } else {
                verifica = false;
                console.log('verficaCodigoRol: ' + verifica);
                return verifica;
            }
        }
    }

    var validarPreguntaSeguridadID = () => {
        var preguntaSeguridadID = $('#preguntaSeguridad').val();

        var verifica = true;

        for (var i = 0; arrayPreguntaSeguridad.length > i; i++) {
            if (preguntaSeguridadID == $(arrayPreguntaSeguridad).eq(i).attr('PreguntaSeguridadID')) {
                console.log('verificaPreguntaSeguridad: ' + verifica);
                return verifica;
            } else {
                verifica = false;
                console.log('verificaPreguntaSeguridad: ' + verifica);
                return verifica;
            }
        }
    }

    validar = () => {
        $('#btnRedondoCrearUsuario').click(function (e) {
            e.preventDefault();

            var usuarioID = $('#usuarioId').val();
            var usuarioNombre = $('#usuario').val();
            var contrasena = $('#contrasenia').val();
            var confirmarContrasena = $('#confirmarContrasenia').val();
            var email = $('#email').val();
            var rolID = $('#rol').val();
            var preguntaSeguridadID = $('#preguntaSeguridad').val();
            var respuestaSeguridad = $('#respuestaSeguridad').val();
            var estado = $('#estado').val();

            var verifica = true;

            if (usuarioID == '') {
                alert('Codigo Usuario es obligatorio');
                $('#usuarioId').focus();
                verifica = false;
            } else if (isNaN(usuarioID)) {
                alert('Codigo Usuario solo permite numeros');
                $('#usuarioId');
                verifica = false;
            } else if (!validarUsuariosAdminId()) {
                alert('Codigo Usuario ya existe');
                $('#usuarioId').focus();
                verifica = false;
            } else if (usuarioNombre == '') {
                alert('Usuario Nombre es obligatorio');
                $('#usuario').focus();
                verifica = false;
            } else if (contrasena == '') {
                alert('Contraseña es obligatorio');
                $('#contrasenia').focus();
                verifica = false;
            } else if (contrasena == confirmarContrasena) {
                alert('Confirmar la contraseña correctamente');
                $('#contrasenia').focus();
                verifica = false;
            } else if (email == '') {
                alert('Email es obligatorio');
                $('#email').focus();
                verifica = false;
            } else if (rolID == '') {
                alert('Rol ID es obligatorio');
                $('#rol').focus();
                verifica = false;
            } else if (!validarRolId()) {
                alert('Indique un Rol Id que se existente');
                $('#usuarioId').focus();
                verifica = false;
            } else if (preguntaSeguridadID == '') {
                alert('Pregunta Seguridad ID es obligatorio');
                $('#preguntaSeguridad').focus();
                verifica = false;
            } else if (!validarPreguntaSeguridadID()) {
                alert('Indique un Pregunta Seguridad ID que sea obligatorio');
                $('#preguntaSeguridad').focus();
                verifica = false;
            } else if (respuestaSeguridad == '') {
                alert('Respuesta Seguridad es obligatorio');
                $('#respuestaSeguridad').focus();
                verifica = false;
            } else if (estado == '') {
                alert('Estado es obligatorio');
                $('#estado').focus();
                verifica = false;
            }

            if (verifica) {
                insertarUsuariosAdmin();
            }
        })
    }

    var init = () => {
        cargarUsuariosAdmin();
        validar();
    }

    init();
})()