(function () {
    var arrayTiquetesDescuento = [];

    var cargarTiquetes = () => {
        $.get("https://localhost:44360/api/TiqueteDescuento", function (data, status) {
            data = JSON.parse(data)
            arrayTiquetesDescuento = data;
            console.table(data);
            console.table(arrayTiquetesDescuento);
        });
    }

    var agregarTiquetesDescuento = () => {
        var data =
        {
            "TipoConsecutivo": 6,
            "CodigoTiqueteDescuento": $('#codigo').val(),
            "Disponibles": $('#disponibles').val(),
            "DescuentoPorcentaje": $('#descuentoPorcentaje').val(),
            "DescuentoCantidad": $('#descuentoMonto').val(),
            "NombreTiquete": $('#descripcion').val()
        }

        $.ajax(
            {
                url: "https://localhost:44360/api/TiqueteDescuento",
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function () {
                    console.table('Datos insertados: ' + data);
                    alert('Se ingreso la tabla: ' + $('#codigo').val())
                },
                error: function (a, b, error) {
                    alert('ERROR')
                    console.error('ERROR' + error);
                }
            })
    }

    var eliminarTiqueteDescuento = () => {
        var url = "https://localhost:44360/api/TiqueteDescuento/" + $('#codigo').val();

        $.ajax({
            url: url,
            method: 'DELETE',
            dataType: 'json',
            data:
            {
                "CodigoTiqueteDescuento": $('#codigo').val()
            },
            success: function (data, text, xhr) {
                alert('Se ha eliminado el tiquete descuento: ' + $('#codigo').val());
                console.log(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var modificarTiqueteDecuento = () => {
        var url = "https://localhost:44360/api/TiqueteDescuento/" + $('#codigo').val();
        var data =
        {
            "TipoConsecutivo": 6,
            "CodigoTiqueteDescuento": $('#codigo').val(),
            "Disponibles": $('#disponibles').val(),
            "DescuentoPorcentaje": $('#descuentoPorcentaje').val(),
            "DescuentoCantidad": $('#descuentoMonto').val(),
            "NombreTiquete": $('#descripcion').val()
        }

        $.ajax({
            url: url,
            method: 'PUT',
            dataType: 'json',
            data: data,
            success: function (data, text, xhr) {
                alert('Se ha modificado el tiquete descuento');
                console.table(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var validarTiqueteId = () => {
        var tiqueteId = $('#codigo').val();

        var verifica = true;

        for (var i = 0; i < arrayTiquetesDescuento.length; i++) {
            if (tiqueteId == $(arrayTiquetesDescuento).eq(i).attr('CodigoTiqueteDescuento')) {
                verifica = false;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var validar = () => {
        $("[name = 'btnGuardar']").click(function (e) {
            e.preventDefault();

            var codigo = $('#codigo').val();
            var disponibles = $('#disponibles').val();
            var descuentoPorcentaje = $('#descuentoPorcentaje').val();
            var descuentoCantidad = $('#descuentoMonto').val();
            var nombre = $('#descripcion').val();

            var verifica = true;

            if (codigo == '') {
                alert('Codigo Tiquete es obligatorio');
                verifica = false;
                $('#codigo').focus();
            } else if (!validarTiqueteId()) {
                alert('Codigo Tiquete ya existe');
                verifica = false;
                $('#codigo').focus();
            } else if (nombre == '') {
                alert('Descripcion es obligatorio');
                verifica = false;
                $('#descripcion').focus();
            } else if (disponibles == '') {
                alert('Dispoonibles es obligatorio');
                verifica = false;
                $('#disponibles').focus();
            } else if (descuentoPorcentaje == '') {
                alert('Descuento Porcentaje es obligatorio');
                verifica = false;
                $('#descuentoPorcentaje').focus();
            } else if (0 >= descuentoPorcentaje || descuentoPorcentaje > 100) {
                alert('Descuento Porcentaje debe estar entre 1 y 100');
                verifica = false;
                $('#descuentoPorcentaje').focus();
            } else if (descuentoCantidad == '') {
                alert('Descuento Cantidad es obligatorio');
                verifica = false;
                $('#descuentoMonto').focus();
            } else if (0 >= descuentoCantidad) {
                alert('Descuento Cantidad debe ser mayor a 0');
                verifica = false;
                $('#descuentoMonto').focus();
            }

            if (verifica) {
                agregarTiquetesDescuento();
                alert('Se agrego el tiquete: ' + nombre);
            }
        })

        $("[name = 'btnEliminar']").click(function (e) {

            var codigo = $('#codigo').val();

            var verifica = true;

            if (codigo == '') {
                alert('Codigo Tiquete es obligatorio');
                verifica = false;
                $('#codigo').focus();
            } else if (validarTiqueteId()) {
                alert('Codigo Tiquete no existe');
                verifica = false;
                $('#codigo').focus();
            }

            if (verifica) {
                eliminarTiqueteDescuento();
                alert('Se ha elminado el tiquete: ' + codigo);
            }
        })

        $("[name = 'btnModificar']").click(function (e) {
            var codigo = $('#codigo').val();
            var descuentoPorcentaje = $('#descuentoPorcentaje').val();
            var descuentoCantidad = $('#descuentoMonto').val();

            var verifica = true;

            if (codigo == '') {
                alert('Codigo Tiquete es obligatorio');
                verifica = false;
                $('#codigo').focus();
            } else if (validarTiqueteId()) {
                alert('Codigo Tiquete no existe');
                verifica = false;
                $('#codigo').focus();
            } else if (0 >= descuentoPorcentaje || descuentoPorcentaje > 100) {
                alert('Descuento Porcentaje debe estar entre 1 y 100');
                verifica = false;
                $('#descuentoPorcentaje').focus();
            } else if (0 >= descuentoCantidad) {
                alert('Descuento Cantidad debe ser mayor a 0');
                verifica = false;
                $('#descuentoMonto').focus();
            }

            if(verifica){
                modificarTiqueteDecuento();
                alert('Se ha modificado el tiquete: ' + codigo);
            }
        })

    }

    var init = () => {
        cargarTiquetes();
        validar();
    }

    init();
})()