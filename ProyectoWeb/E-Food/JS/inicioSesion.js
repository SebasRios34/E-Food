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

        for(var i = 0; i < arrayUsuariosAdmin.length; i++){
            if((usuarioNombre == $(arrayUsuariosAdmin).eq(i).attr('UsuarioNombre')) && (contrasena == $(arrayUsuariosAdmin).eq(i).attr('Contrasena'))){
                verifica = true;
                console.log('Usuario: ' + usuarioNombre + '\nPassword: ' + contrasena + 'Tiene acceso!');
                break;
            } 
        }
        return verifica;
    }

    var validarEstado = () => {
        verifica = false;
        console.table(arrayUsuariosAdmin);

        for(var i = 0; i < arrayUsuariosAdmin.length; i++){
            if('Activo' == $(arrayUsuariosAdmin).eq(i).attr('Estado')){
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
            } else if (!validarUsuarioContrasena()){
                alert('Usuario: ' + usuarioNombre + ' Contraseña: ' + contrasena + '\nNo estan en la base de datos');
                $('#usuario').focus();
                verifica = false;
            } else if(!validarEstado()){
                alert('Usuario: '+ usuarioNombre + '\nSu estado se encuentra: Inactivo');
                $('#usuario').focus();
                verifica = false;
            }

            if(verifica){
                alert('Bienvenido: ' + usuarioNombre);
                $(location).attr('href', 'http://127.0.0.1:5501/ProyectoWeb/E-Food/HTML/MenuPrincipal.html')
            }
        })
    }

    var init = () => {
        cargarUsuariosAdmin();
        validar();
    }

    init();

})()


