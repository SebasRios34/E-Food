(function () {

    var arrayUsuariosAdmin = [];

    var cargarUsuariosAdmin = () => {
        $.get("https://localhost:44360/api/UsuariosAdmin/", function (data, status) {
            data = JSON.parse(data)
            arrayUsuariosAdmin = data;
            console.table(data);
            console.table(arrayUsuariosAdmin);
        });
    }

    var validarUsuarioContrasena = () => {
        var usuarioNombre = $('#usuario').val();
        var contrasena = $('#password').val();
        verifica = false;
        console.table(arrayUsuariosAdmin);

        for (var i = 0; i < arrayUsuariosAdmin.length; i++) {
            if ((usuarioNombre == $(arrayUsuariosAdmin).eq(i).attr('UsuarioNombre')) && (contrasena == $(arrayUsuariosAdmin).eq(i).attr('Contrasena'))) {
                verifica = true;
                console.log('Usuario: ' + usuarioNombre + '\nPassword: ' + contrasena);
                break;
            }
        }
        return verifica;
    }

    var validarEstado = () => {
        var usuarioNombre = $('#usuario').val();

        verifica = false;


        for (var i = 0; i < arrayUsuariosAdmin.length; i++) {
            if (usuarioNombre == $(arrayUsuariosAdmin).eq(i).attr('UsuarioNombre') && 'Activo' == $(arrayUsuariosAdmin).eq(i).attr('Estado')) {
                verifica = true;
                console.log('Usuario: ' + $('#usuario').val() + ':\nEstado: Activo');
                break;
            }
        }
        return verifica;
    }

    var validar = () => {
        $('#btnIngresar').click(function (e) {
            e.preventDefault();

            var usuarioNombre = $('#usuario').val();
            var contrasena = $('#password').val();

            var verifica = true;

            if (usuarioNombre == '') {
                alert('Introduzca un nombre usuario');
                $('#usuario').focus();
                verifica = false;
            } else if (contrasena == '') {
                alert('Introduzca una contraseña')
                $('#password').focus();
                verifica = false;
            } else if (!validarUsuarioContrasena()) {
                alert('Usuario: ' + usuarioNombre + ' Contraseña: ' + contrasena + '\nNo estan en la base de datos');
                $('#usuario').focus();
                verifica = false;
            } else if (!validarEstado()) {
                alert('Usuario: ' + usuarioNombre + '\nSu estado se encuentra: Inactivo');
                $('#usuario').focus();
                verifica = false;
            }

            if (verifica) {
                for (var i = 0; i < arrayUsuariosAdmin.length; i++) {
                    if ((usuarioNombre == $(arrayUsuariosAdmin).eq(i).attr('UsuarioNombre')) && 1 == $(arrayUsuariosAdmin).eq(i).attr('RolID')) {
                        alert(usuarioNombre + " ha entrado como usuario administrativo");
                        $(location).attr('href', 'http://127.0.0.1:5502/ProyectoWeb/E-Food/HTML/MenuPrincipal.html')
                    } else if ((usuarioNombre == $(arrayUsuariosAdmin).eq(i).attr('UsuarioNombre')) && 2 == $(arrayUsuariosAdmin).eq(i).attr('RolID')) {
                        alert(usuarioNombre + " ha entrado como usuario de seguridad");
                        $(location).attr('href', 'http://127.0.0.1:5502/ProyectoWeb/E-Food/HTML/MenuPrincipalSeguridad.html')
                    } else if ((usuarioNombre == $(arrayUsuariosAdmin).eq(i).attr('UsuarioNombre')) && 3 == $(arrayUsuariosAdmin).eq(i).attr('RolID')) {
                        alert(usuarioNombre + " ha entrado como usuario de mantenimiento");
                        $(location).attr('href', 'http://127.0.0.1:5502/ProyectoWeb/E-Food/HTML/MenuPrincipal.html')
                    } else if ((usuarioNombre == $(arrayUsuariosAdmin).eq(i).attr('UsuarioNombre')) && 4 == $(arrayUsuariosAdmin).eq(i).attr('RolID')) {
                        alert(usuarioNombre + " ha entrado como usuario de consulta");
                        $(location).attr('href', 'http://127.0.0.1:5502/ProyectoWeb/E-Food/HTML/MenuPrincipalConsulta.html')
                    }
                }
            }
        })
    }

    var init = () => {
        cargarUsuariosAdmin();
        validar();
    }

    init();

})()


