(function () {
    var arrayDatosUsuarios = [];

    var cargarUsuariosAdmin = () => {
        $.get("https://localhost:44360/api/UsuariosAdmin/", function (data, status) {
            data = JSON.parse(data)
            arrayDatosUsuarios = data;
            console.table(data);
            console.table(arrayDatosUsuarios);
        });
    }

    var validarUsuariosAdminId = () => {
        var usuarioID = $('#idcambiar').val();

        var verifica = false;

        for (var i = 0; i < arrayDatosUsuarios.length; i++) {
            if (usuarioID != $(arrayDatosUsuarios).eq(i).attr('UsuariosAdminID')) {
                verifica = true;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var nuevaContrasena = () => {
        var url = "https://localhost:44360/api/UsuariosAdmin/" + $('#idcambiar').val();
        var data = 
        {
            "UsuariosAdminId": $('#idcambiar').val(),
            "RolId": 2,
            "PreguntaSeguridadId": 3,
            "UsuariosNombre": "sample string 4",
            "Contrasena": $('#contrasena1').val(),
            "Email": "sample string 6",
            "RespuestaSeguridad": "sample string 7",
            "Estado": "sample string 8"
          };

        $.ajax({
            url: url,
            method: 'PUT',
            dataType: 'json',
            data: data,
            success: function(data, text, xhr){
                alert('Se ha cambiado la contraseña');
                console.table(data);
                console.log(text);
            },
            error: function(xhr, text, error){
                console.error("Error: " + error);   
            }
        })
    }

    var validar = () => {
        $('#btnCambiar2').click(function (e) {
            e.preventDefault();

            var usuarioId = $('#idcambiar').val();
            var contrasena = $('#contrasena1').val();
            var confirmarContrasena = $('#contrasenaRe').val();


            var verifica = true;

            if (usuarioId == '') {
                alert('Codigo Usuario es obligatorio');
                $('#idcambiar').focus();
                verifica = false;
            } else if (!validarUsuariosAdminId()) {
                alert('Codigo Usuario no existe');
                $('#idcambiar').focus();
                verifica = false;
            } else if (contrasena == '') {
                alert('Contraseña es obligatorio');
                $('#contrasena1').focus();
                verifica = false;
            } else if (confirmarContrasena == '') {
                alert('Confirmar Contraseña es obligatorio');
                $('#contrasenaRe').focus();
                verifica = false;
            } else if (contrasena != confirmarContrasena) {
                alert('Contraseña y Confirmar Contraseña deben de ser iguales');
                $('#contrasena1').focus();
                verifica = false;
            }

            if (verifica) {
                nuevaContrasena();
                $(location).attr('href', 'http://127.0.0.1:5501/ProyectoWeb/E-Food/HTML/IniciarSesion.html')
            }
        })
    }

    var init = () => {
        cargarUsuariosAdmin();
        validar();
    }

    init();
})()