(function () {
    var arrayUsuariosAdmin = [];

    var cargarUsuariosAdmin = () => {
        fetch('https://localhost:44360/api/UsuariosAdmin')
            .then(res => res.json())
            .then(data => {
                data = JSON.parse(data)
                arrayUsuariosAdmin = data;
                console.table(arrayUsuariosAdmin)

            })
            .catch(err => console.log('error', err));
    }

    var eliminarUsuarios = () => {
        var url = "https://localhost:44360/api/UsuariosAdmin/" + $('#codigo').val();

        $.ajax({
            url: url,
            method: 'DELETE',
            dataType: 'json',
            data:
            {
                "UsuariosAdminID": $('#codigo').val()
            },
            success: function (data, text, xhr) {
                alert('Se ha eliminado el producto: ' + $('#codigo').val());
                console.log(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var modificarProducto = () => {
        var url = "https://localhost:44360/api/UsuariosAdmin/" + $('#codigo').val();
        var data =
        {
            "UsuariosAdminId": $('#codigo').val(),
            "RolId": $('#rol').val(),
            "PreguntaSeguridadId": $('#preguntaSeguridad').val(),
            "UsuariosNombre": $('#nombre').val(),
            "Contrasena": "",
            "Email": $('#mail').val(),
            "RespuestaSeguridad": $('#respuesta').val(),
            "Estado": $('#estado').val()
        }

        $.ajax({
            url: url,
            method: 'PATCH',
            dataType: 'json',
            data: data,
            success: function (data, text, xhr) {
                alert('Se ha modificado el producto');
                console.table(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var validarUsuariosId = () => {
        var codigo = $('#codigo').val();

        var verifica = true;

        for (var i = 0; i < arrayUsuariosAdmin.length; i++) {
            if (codigo == $(arrayUsuariosAdmin).eq(i).attr('UsuariosAdminID')) {
                verifica = false;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var validar = () => {
        $("[name = 'btnModificar']").click(function (e) {
            e.preventDefault();

            var codigo = $('#codigo').val();
            var nombre = $('#nombre').val();
            var email = $('#mail').val();
            var respuesta = $('#respuesta').val();

            var verifica = true;

            if (codigo == '') {
                alert('Codigo es obligatorio');
                verifica = false;
                $('#codigo').focus();
            } else if (validarUsuariosId()) {
                alert('Codigo no existe');
                verifica = false;
                $('#codigo').focus();
            } else if (nombre == ''){
                alert('Nombre es obligatorio');
                verifica = false;
                $('#nombre').focus();
            } else if (email == ''){
                alert('Correo es obligatorio');
                verifica = false;
                $('#email').focus();
            }else if (respuesta == ''){
                alert('La respuesta es obligatoria');
                verifica = false;
                $('#respuesta').focus();
            }  

            if (verifica){
                modificarProducto();
                alert('Se ha modificado el usuario: ' + codigo);
            }
        })
    }

    var init = () => {
        cargarUsuariosAdmin();
        validar();
    }

    init();

})()