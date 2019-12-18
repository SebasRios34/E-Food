(function () {
    var arrayTipoPrecio = [];

    var cargarTiposPrecio = () => {
        $.get("https://localhost:44360/api/TipoPrecio/", function (data, status) {
            data = JSON.parse(data)
            arrayTipoPrecio = data;
            console.table(data);
            console.table(arrayTipoPrecio);
        });
    }

    var agregarTipoPrecio = () => {
        var data =
        {
            "TipoConsecutivo": $('#tipoConsecutivo').val(),
            "CodigoTipoPrecio": $('#codigoTipoPrecio'),
            "PrecioMonto": $('#monto').val(),
            "NombrePrecio": $('#descripcion').val()
        }

        $.ajax(
            {
                url: "https://localhost:44360/api/TipoPrecio",
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function (a, b, xhr) {
                    console.table('Datos insertados: ' + data);
                    alert('Se ingreso la tabla: ' + $('#codigoTipoPrecio').val());
                    console.table(xhr);
                },
                error: function (a, b, error) {
                    alert('ERROR')
                    console.error('ERROR' + error);
                }
            })
    }

    var eliminarTipoPrecio = () => {
        var url = "https://localhost:44360/api/TipoPrecio/" + $('#codigoTipoPrecio').val();

        $.ajax({
            url: url,
            method: 'DELETE',
            dataType: 'json',
            data:
            {
                "CodigoTipoPrecio": $('#codigoTipoPrecio').val()
            },
            success: function (data, text, xhr) {
                alert('Se ha eliminado el tipo de precio: ' + $('#codigoTipoPrecio').val());
                console.log(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var modificarTipoPrecio = () => {
        var url = "https://localhost:44360/api/TipoPrecio/" + $('#codigoTipoPrecio').val();
        var data =
        {
            "TipoConsecutivo": $('#tipoConsecutivo').val(),
            "CodigoTipoPrecio": $('#codigoTipoPrecio'),
            "PrecioMonto": $('#monto').val(),
            "NombrePrecio": $('#descripcion').val()
        }

        $.ajax({
            url: url,
            method: 'PUT',
            dataType: 'json',
            data: data,
            success: function (data, text, xhr) {
                alert('Se ha modificado el tipo de precio');
                console.table(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var validarTipoPrecioId = () => {
        var codigo = $('#codigoTipoPrecio').val();

        var verifica = false;

        for (var i = 0; i < arrayTipoPrecio.length; i++) {
            if (codigo != $(agregarTipoPrecio).eq(i).attr('CodigoTipoPrecio')) {
                verifica = true;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var validarTipoPrecioId1 = () => {
        var codigo = $('#codigoTipoPrecio').val();

        var verifica = false;

        for (var i = 0; i < arrayTipoPrecio.length; i++) {
            if (codigo == $(agregarTipoPrecio).eq(i).attr('CodigoTipoPrecio')) {
                verifica = true;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var validar = () =>{
        $("[name='btnGuardar']").click(function (e){
            e.preventDefualt();

            var codigoTipoPrecio = $('#codigoTipoPrecio').val();
            var nombre = $('#descripcion').val();
            var monto = $('#monto').val();

            var verifica = true;
            
            if(codigoTipoPrecio == ''){
                alert('Codigo Tipo Precio es obligatorio');
                $('#codigoTipoPrecio').focus();
                verifica = false;
            } else if (!validarTipoPrecioId()){
                alert('Codigo Tipo Precio ya existe');
                $('#codigoTipoPrecio');
                verifica = false;
            } else if(nombre == ''){
                alert('Nombre es obligatorio');
                $('#descripcion').focus();
                verifica = false;
            } else if(monto == ''){
                alert('Monto es obligatorio');
                $('#monto').focus();
                verifica = false;
            } else if((monto <= 0)){
                alert('Monto tiene que ser mayor que 0');
                $('#monto').focus();
                verifica = false;
            }

            if(verifica){
                agregarTipoPrecio();
            }
        })

        $("[name='btnEliminar']").click(function (e){
            e.preventDefualt();

            var codigoTipoPrecio = $('#codigoTipoPrecio').val();

            var verifica = true;

            if(codigoTipoPrecio == ''){
                alert('Codigo Tipo Precio es obligatorio');
                $('#codigoTipoPrecio').focus();
                verifica = false;
            } else if (!validarTipoPrecioId1()){
                alert('Codigo Tipo Precio no existe');
                $('#codigoTipoPrecio');
                verifica = false;
            }

            if(verifica){
                eliminarTipoPrecio();
            }
        })

        $("[name='btnModificar']").click(function (e){
            e.preventDefualt();

            var codigoTipoPrecio = $('#codigoTipoPrecio').val();
            var nombre = $('#descripcion').val();
            var monto = $('#monto').val();

            var verifica = true;

            if(codigoTipoPrecio == ''){
                alert('Codigo Tipo Precio es obligatorio');
                $('#codigoTipoPrecio').focus();
                verifica = false;
            } else if (!validarTipoPrecioId1()){
                alert('Codigo Tipo Precio no existe');
                $('#codigoTipoPrecio');
                verifica = false;
            } else if((monto <= 0)){
                alert('Monto tiene que ser mayor que 0');
                $('#monto').focus();
                verifica = false;
            }

            if(verifica){
                
            }
        })
    }

    var init = () => {
        cargarTiposPrecio();
        validar();
    }

    init();
})()