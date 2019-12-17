(function () {
    var arrayDatosUsuarios = [];
    var arrayPreguntaDatos = [];

    var cargarUsuariosAdmin = () => {
        $.get("https://localhost:44360/api/UsuariosAdmin/", function (data, status) {
            data = JSON.parse(data)
            arrayDatosUsuarios = data;
            console.table(data);
            console.table(arrayDatosUsuarios);
        });
    }

    var cargarPreguntasSeguridad = () => {
        $.get("https://localhost:44360/api/PreguntaSeguridad", function (data, status) {
            data = JSON.parse(data)
            arrayPreguntaDatos = data;
            console.table(data);
            console.table(arrayPreguntaDatos);
        });
    }

    var validarUsuariosAdminId = () => {
        var usuarioID = $('#usuariosId').val();

        var verifica = false;

        for (var i = 0; i < arrayDatosUsuarios.length; i++) {
            if (usuarioID != $(arrayDatosUsuarios).eq(i).attr('UsuarioAdminID')) {
                console.log('verificaCodigo: ' + verifica);
                verifica = true;
                break;
            }
        }
        return verifica;
    }

    var validarRespuestaUsuario = () => {
        var preguntaSeguridad = $('#preguntaSeguridad').val();
        var respuestaSeguridad = $('#respuestaSeguridad').val();

        console.table(arrayDatosUsuarios);

        var verifica = false;

        for (var i = 0; i < arrayDatosUsuarios.length; i++) {
            if (
                (preguntaSeguridad == $(arrayDatosUsuarios).eq(i).attr('PreguntaSeguridadID')) &&
                (respuestaSeguridad == $(arrayDatosUsuarios).eq(i).attr('RespuestaSeguridad'))) {
                verifica = true;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    validar = () => {
        $('#btnCambiar1').click(function (e) {
            e.preventDefault();

            var usuarioID = $('#usuariosId').val();
            var preguntaSeguridad = $('#preguntaSeguridad').val();
            var respuestaSeguridad = $('#respuestaSeguridad').val();


            var verifica = true;

            if (usuarioID == '') {
                alert('Codigo Usuario es oblgatorio');
                $('#usuariosId').focus();
                verifica = false;
            } else if (!validarUsuariosAdminId()) {
                alert('Codigo Usuario no es existente');
                $('#usuariosId').focus();
                verifica = false;
            } else if (preguntaSeguridad == '') {
                alert('Pregunta Seguridad ID es obligatorio');
                $('#preguntaSeguridad').focus();
                verifica = false;
            } else if (respuestaSeguridad == '') {
                alert('Respuesta Seguridad es obligatorio');
                $('#respuestaSeguridad').focus();
                verifica = false;
            } else if (!validarRespuestaUsuario()) {
                alert('Los datos no coiciden con la base de datos');
                $('#usuariosId').focus();
                verifica = false;
            }

            if (verifica) {
                alert('Cambio de Contraseña valido');
                $(location).attr('href', 'http://127.0.0.1:5501/ProyectoWeb/E-Food/HTML/CambiarContrasena.html')
            }
        })
    }

    var init = () => {
        cargarUsuariosAdmin();
        cargarPreguntasSeguridad();
        validar();
    }

    init();

})()