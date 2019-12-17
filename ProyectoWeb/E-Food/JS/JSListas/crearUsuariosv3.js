(function () {
    var arrayUsuariosAdmin = [];
    var arrayRol = [];
    var arrayPreguntaSeguridad = [];

    var cargarUsuariosAdmin = () => {
        $.get("https://localhost:44360/api/UsuariosAdmin/", function (data, status) {
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

    var cargarPreguntasSeguridad = () =>{
        $.get("https://localhost:44360/api/PreguntaSeguridad", function (data, status) {
            data = JSON.parse(data)
            arrayPreguntaSeguridad = data;
            console.table(data);
            console.table(arrayPreguntaSeguridad);
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

    var validarUsuariosAdminId = () =>{
        var usuarioID = $('#usuarioId').val();

        var verifica = false;

        for(var i = 0; i < arrayUsuariosAdmin.length; i++){
            if(usuarioID != $(arrayUsuariosAdmin).eq(i).attr('UsuarioAdminID')){
                console.log('verificaCodigo: ' + verifica);
                verifica = true;
                break;
            }
        }
        return verifica;
    }

    var validarRolId = () => {
        var rolID = $('#rol').val();

        var verifica = false;

        for(var i = 0; i < arrayRol.length; i++){
            if(rolID != $(arrayRol).eq(i).attr('RolID')){
                console.log('verificaRol: ' + verifica);
                verifica = true;
                break;
            }
        }
        return verifica;
    }

    var validarPreguntaSeguridadID = () => {
        var preguntaSeguridadID = $('#preguntaSeguridad').val();

        var verifica = false;

        for (var i = 0; arrayPreguntaSeguridad.length > i; i++) {
            if (preguntaSeguridadID != $(arrayPreguntaSeguridad).eq(i).attr('PreguntaSeguridadID')) {
                console.log('verificaPreguntaSeguridad: ' + verifica);
                verifica = true;
                break;
            } 
        }
        return verifica;
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
            } else if (contrasena != confirmarContrasena) {
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
        cargarRoles();
        cargarPreguntasSeguridad();
        validar();
    }

    init();
})()