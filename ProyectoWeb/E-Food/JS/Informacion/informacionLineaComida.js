(function () {
    var arrayLineaComida = [];

    var cargarLineaComida = () => {
        $.get("https://localhost:44360/api/LineaComida/", function (data, status) {
            data = JSON.parse(data)
            arrayLineaComida = data;
            console.table(data);
            console.table(arrayLineaComida);
        });
    }

    var agregarLineaComida = () => {
        var data =
        {
            "TipoConsecutivo": $('#tipoConsecutivo').val(),
            "CodigoLineaComida": $('#codigoLineaComida').val(),
            "NombreLineaComida": $('#descripcion').val()
        }

        $.ajax(
            {
                url: "https://localhost:44360/api/LineaComida",
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function () {
                    console.table('Datos insertados: ' + data);
                    alert('Se ingreso la tabla: ' + $('#codigoLineaComida').val())
                },
                error: function (a, b, error) {
                    alert('ERROR')
                    console.error('ERROR' + error);
                }
            })
    }

    var eliminarLineaComida = () => {
        var url = "https://localhost:44360/api/LineaComida/" + $('#codigoLineaComida').val();

        $.ajax({
            url: url,
            method: 'DELETE',
            dataType: 'json',
            data:
            {
                "CodigoLineaComida": $('#codigoLineaComida').val()
            },
            success: function (data, text, xhr) {
                alert('Se ha eliminado el procesador: ' + $('#codigoLineaComida').val());
                console.log(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var modificarLineaComida = () => {
        var url = "https://localhost:44360/api/LineaComida/" + $('#codigoLineaComida').val();
        var data =
        {
            "TipoConsecutivo": $('#tipoConsecutivo').val(),
            "CodigoLineaComida": $('#codigoLineaComida').val(),
            "NombreLineaComida": $('#descripcion').val()
        }

        $.ajax({
            url: url,
            method: 'PUT',
            dataType: 'json',
            data: data,
            success: function (data, text, xhr) {
                alert('Se ha modificado el procesador');
                console.table(data);
                console.log(text);
                console.table(xhr);
            },
            error: function (xhr, text, error) {
                console.error("Error: " + error);
            }
        })
    }

    var validarLineaComidaId = () => {
        var codigo = $('#codigoLineaComida').val();

        var verifica = false;

        for (var i = 0; i < arrayLineaComida.length; i++) {
            if (codigo != $(arrayLineaComida).eq(i).attr('codigoLineaComida')) {
                verifica = true;
                console.log('verificaCodigo: ' + verifica);
                break;
            }
        }
        return verifica;
    }

    var validar = () => {
        $("[name = 'btnGuardar']").click(function (e){
            e.preventDefault();

            var codigo = $('#codigoLineaComida').val();
            var nombre = $('#descripcion').val();

            var verifica = true;

            if(codigo == ''){
                alert('Codigo Linea Comida es obligatorio');
                verifica = false;
                $('#codigoLineaComida').focus();
            } else 
        })
    }

    var init = () => {
        cargarLineaComida();
    }

    init();
})()