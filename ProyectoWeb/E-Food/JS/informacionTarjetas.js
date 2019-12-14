(function(){
    var arrayTarjetas = [];

    var cargarTarjetas = () => {
        $.get("https://localhost:44360/api/Tarjetas", function (data, status) {
            data = JSON.parse(data)
            arrayTarjetas = data;
            console.table(data);
            console.table(arrayTarjetas);
        });
    }

    var agregarTarjetas = () =>{
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

    var validarTarjetasId = () =>{
        var tarjetaId = $('#codigoTipoTarjeta').val();

        var verifica = false;

        for(var i = 0; i < arrayTarjetas.length; i++){
            if(tarjetaId != $(arrayTarjetas).eq(i).attr('CodigoTarjeta')){
                console.log('verificaCodigo: ' + verifica);
                verifica = true;
                break;
            }
        }
        return verifica;
    }

    var validar = () =>{
        $('btnGuardar').click(function (e){
            e.preventDefault();

            var tarjetaId = $('#codigoTipoTarjeta').val();
            var nombreTarjeta = $('#descripcion').val();

            var verifica = true;

            if(tarjetaId == ''){
                alert('Codigo Tarjeta es obligatorio');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            }else if(!validarTarjetasId()){
                alert('Codigo Tarjeta ya existe');
                verifica = false;
                $('#codigoTipoTarjeta').focus();
                verifica = false;
            } else if(nombreTarjeta == ''){
                alert('Nombre Tarjeta es obligatorio');
                verifica = false;
                $('#descripcion').val();
            }

            if(verifica){
                agregarTarjetas();
            }
        })
    }

    var init = () =>{
        cargarTarjetas();
        validar();
    }

    init();
})()