(function () {
    var arrayTarjetas = [];

    var cargarTarjetas = () => {
        $.get("https://localhost:44360/api/Tarjetas", function (data, status) {
            data = JSON.parse(data)
            arrayTarjetas = data;
            console.table(data);
            console.table(arrayTarjetas);
        });
    }

    var agregarTarjetas = () => {
        var data =
        {
            TipoConsecutivo: 3,
            CodigoTarjeta: $('#codigoTipoTarjeta').val(),
            NombreTarjeta: $('#descripcion').val()
        }

        $.ajax(
            {
                url: "https://localhost:44360/api/Tarjetas",
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function () {
                    console.table('Datos insertados: ' + data);
                    alert('Se ingreso la tabla: ' + $('#codigoTipoTarjeta').val())
                },
                error: function (a, b, error) {
                    alert('ERROR')
                    console.error('ERROR' + error);
                }
            })
    }

    var eliminarTarjetas = () => {
        var url = "https://localhost:44360/api/Tarjetas/" + $('#codigoTipoTarjeta').val();

        $.ajax({
            url: url,
            method: 'DELETE',
            dataType: 'json',
            data: 
            {
                "CodigoTarjeta": $('#codigoTipoTarjeta').val()
            },
            success: function (data, text, xhr) {
                alert('Se ha eliminado la tarjeta: ' + $('#codigoTipoTarjeta').val());
                console.log(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }
    
    var modificarTarjetas = () => {
        var url = "https://localhost:44360/api/Tarjetas/" + $('#codigoTipoTarjeta').val();
        var data =
        {
            TipoConsecutivo: 3,
            CodigoTarjeta: $('#codigoTipoTarjeta').val(),
            NombreTarjeta: $('#descripcion').val()
        }

        $.ajax({
            url: url,
            method: 'PUT',
            dataType: 'json',
            data: data,
            success: function (data, text, xhr) {
                alert('Se ha modificado la tarjeta');
                console.table(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var validarTarjetasId = () => {
        var tarjetaId = $('#codigoTipoTarjeta').val();

        var verifica = true;

        for (var i = 0; i < arrayTarjetas.length; i++) {
            if (tarjetaId == $(arrayTarjetas).eq(i).attr('CodigoTarjeta')) {
                verifica = false;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var validar = () => {
        $("#btnGuardar").click(function (e) {
            e.preventDefault();

            var tarjetaId = $('#codigoTipoTarjeta').val();
            var nombreTarjeta = $('#descripcion').val();

            var verifica = true;

            if (tarjetaId == '') {
                alert('Codigo Tarjeta es obligatorio');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            } else if (!validarTarjetasId()) {
                alert('Codigo Tarjeta ya existe');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            } else if (nombreTarjeta == '') {
                alert('Nombre Tarjeta es obligatorio');
                verifica = false;
                $('#descripcion').val();
            }

            if (verifica) {
                agregarTarjetas();
                $(location).attr('href', 'http://127.0.0.1:5501/ProyectoWeb/E-Food/HTML/ListaTarjetas.html')
            }
        })

        $("#btnEliminar").click(function (e) {
            e.preventDefault();

            var tarjetaId = $('#codigoTipoTarjeta').val();

            var verifica = true;

            if (tarjetaId == '') {
                alert('Codigo Tarjeta es obligatorio');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
            } else if (validarTarjetasId()) {
                alert('Codigo Tarjeta no existe');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            }

            if (verifica) {
                eliminarTarjetas();
                $(location).attr('href', 'http://127.0.0.1:5501/ProyectoWeb/E-Food/HTML/ListaTarjetas.html')
            }
        })

        $("#btnModificar").click(function (e) {
            e.preventDefault();

            var tipoConsecutivo = $('#codigoTipoTarjeta');
            var nombreTarjeta = $('#descripcion');

            var verifica = true;

            if (tipoConsecutivo == '') {
                alert('Introduzca un consecutivo');
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            } else if (validarTarjetasId()) {
                alert('Codigo Tarjeta no existe');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            } else if (nombreTarjeta == '') {
                alert('Introduzca un nombre tarjeta');
                $('#descripcion').focus();
                verifica = false;
            }

            if(verifica){
                modificarTarjetas();
                $(location).attr('href', 'http://127.0.0.1:5501/ProyectoWeb/E-Food/HTML/ListaTarjetas.html')
            }
        })
    }

    var init = () => {
        cargarTarjetas();
        validar();
    }

    init();
})()