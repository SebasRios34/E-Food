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

        $.ajax(
            {
                url: "https://localhost:44360/api/Tarjetas/1?CodigoTarjeta=" + $('#codigoTipoTarjeta').val(),
                type: 'DELETE',
                success: function () {
                    console.table('Datos eliminado: ' + $('#codigoTipoTarjeta').val());
                    alert('Se eliminio el dato: ');
                },
                error: function (a, b, error) {
                    alert('ERROR')
                    console.error('ERROR' + error);
                }
            })
    }
    var modificarTarjetas = () => {
        var data =
        {
            TipoConsecutivo: 3,
            CodigoTarjeta: $('#codigoTipoTarjeta').val(),
            NombreTarjeta: $('#descripcion').val()
        }

        $.ajax(
            {
                url: "https://localhost:44360/api/Tarjetas/1",
                type: 'PUT',
                dataType: 'json',
                data: JSON.stringify(data),
                success: function () {
                    console.table(arrayTarjetas);
                    alert('Se modifico la tarjeta: ' + $('#codigoTipoTarjeta').val());
                },
                error: function (a, b, error) {
                    alert('ERROR');
                    console.error('ERROR: ' + error);
                }
            })
    }

    var validarTarjetasId = () => {
        var tarjetaId = $('#codigoTipoTarjeta').val();

        var verifica = false;

        for (var i = 0; i < arrayTarjetas.length; i++) {
            if (tarjetaId != $(arrayTarjetas).eq(i).attr('CodigoTarjeta')) {
                verifica = true;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var validarTarjetaId2 = () => {
        var tarjetaId = $('#codigoTipoTarjeta').val();

        var verifica = false;

        for (var i = 0; i < arrayTarjetas.length; i++) {
            if (tarjetaId == $(arrayTarjetas).eq(i).attr('CodigoTarjeta')) {
                verifica = true;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var validar = () => {
        $("[name='btnGuardar']").click(function (e) {
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
            }
        })

        $("[name='btnEliminar']").click(function (e) {
            e.preventDefault();

            var tarjetaId = $('#codigoTipoTarjeta').val();

            var verifica = true;

            if (tarjetaId == '') {
                alert('Codigo Tarjeta es obligatorio');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
            } else if (!validarTarjetaId2()) {
                alert('Codigo Tarjeta no existe');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            }

            if (verifica) {
                eliminarTarjetas();
            }
        })

        $("[name='btnModificar']").click(function (e) {
            e.preventDefault();

            var tipoConsecutivo = $('#codigoTipoTarjeta');
            var nombreTarjeta = $('#descripcion');

            var verifica = true;

            if (tipoConsecutivo == '') {
                alert('Introduzca un consecutivo');
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            } else if (!validarTarjetaId2()) {
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
            }
        })
    }

    var init = () => {
        cargarTarjetas();
        validar();
    }

    init();
})()