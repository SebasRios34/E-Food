(function () {
    var arrayConsecutivos = [];
    var arrayRoles = [];

    var cargarConsecutivos = () => {
        $.get("https://localhost:44360/api/Consecutivo/", function (data, status) {
            data = JSON.parse(data)
            arrayConsecutivos = data;
            console.table(data);
            console.table(arrayConsecutivos);
        });
    }

    var cargarRol = () => {
        $.get("https://localhost:44360/api/Rol/", function (data, status) {
            data = JSON.parse(data)
            arrayRoles = data;
            console.table(data);
            console.table(arrayRoles);
        });
    }

    var modificarConsecutivo = () => {
        var url = "https://localhost:44360/api/Consecutivo/" + $('#tipoConsecutivo').val();
        var data =
        {
            "ConsecutivoId": $('#consecutivo').val(),
            "TipoConsecutivo": $('#tipoConsecutivo').val(),
            "RolId": $('#rol').val(),
            "Prefijo": $('#prefijo1').val()
        };

        $.ajax({
            url: url,
            method: 'PUT',
            dataType: 'json',
            data: data,
            success: function (data, text, xhr) {
                alert('Se ha modificado el consecutivo');
                console.table(data);
                console.log(text);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var validarConsecutivo = () => {
        var tipoConsecutivo = $('#tipoConsecutivo').val();
        verifica = false;
        console.table(arrayConsecutivos);

        for (var i = 0; i < arrayConsecutivos.length; i++) {
            if (tipoConsecutivo == $(arrayConsecutivos).eq(i).attr('TipoConsecutivo')) {
                verifica = true;
                console.log('Tipo Consecutivo: ' + tipoConsecutivo + ' existe');
                break;
            }
        }
        return verifica;
    }

    var validarRol = () => {
        var rol = $('#rol').val();
        verifica = false;
        console.table(arrayRoles);

        for (var i = 0; i < arrayRoles.length; i++) {
            if (rol == $(arrayRoles).eq(i).attr('RolID')) {
                verifica = true;
                console.log('Rol: ' + rol + ' existe');
                break;
            }
        }
        return verifica;
    }

    var validar = () => {
        $('#btnRedondoCrearConsecutivo').click(function (e) {
            e.preventDefault();

            var consecutivo = $('#consecutivo').val();
            var tipoConsecutivo = $('#tipoConsecutivo').val();
            var prefijo = $('#prefijo1').val();
            var rol = $('#rol').val();

            var verifica = true;

            if (consecutivo == '') {
                alert('Introduzca un consecutivo');
                $('#consecutivo').focus();
                verifica = false;
            } else if (tipoConsecutivo == '') {
                alert('Introduzca un tipo consecutivo');
                $('#tipoConsecutivo').focus();
                verifica = false;
            } else if (!validarConsecutivo()) {
                alert('Tipo Consecutivo no es modificable, coloque uno existente');
                $('#tipoConsecutivo').focus();
                verifica = false;
            } else if (prefijo == '') {
                alert('Introduzca un prefijo');
                $('#prefijo1').focus();
                verifica = false;
            } else if (rol == '') {
                alert('Introduzca un rol');
                $('#rol').focus();
                verifica = false;
            } else if (!validarRol()) {
                alert('No existe el ID: ' + $('#rol').val());
                $('#rol').focus();
                verifica = false;
            }

            if (verifica) {
                modificarConsecutivo();
            }
        });
    }

    var init = () => {
        cargarConsecutivos();
        cargarRol();
        validar();
    }

    init();
})()