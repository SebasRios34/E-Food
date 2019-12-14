(function () {
    var arrayConsecutivos = [];

    var cargarConsecutivos = () => {
        $.get("https://localhost:44360/api/Consecutivo/", function (data, status) {
            data = JSON.parse(data)
            arrayConsecutivos = data;
            console.table(data);
            console.table(arrayConsecutivos);
        });
    }

    var modificarConsecutivo = () => {
        var data = 
        {
            ConsecutivoID: $('#consecutivo').val(),
            TipoConsecutivo: $('#tipoConsecutivo').val(),
            Prefijo: $('#prefijo').val(),
            RolID: $('#rol').val()
        }

        $.ajax(
            {
                url: "https://localhost:44360/api/Consecutivo/1",
                type: 'PUT',
                dataType: 'json',
                //contentType: 'application/json',
                headers: {
                    'Content-Type': 'application/json',
                    //'Access-Control-Allow-Origin':'http://127.0.0.1:5500'
                    'Access-Control-Allow-Origin':'https://localhost' //Este es muy importante para abilitar
                },
                data: JSON.stringify(data),
                success: function(){
                    console.table(arrayConsecutivos);
                    alert('Se modifico el consecutivo: ' + $('#tipoConsecutivo').val());
                },
                error: function(a, b, error){
                    alert('ERROR');
                    console.error('ERROR: ' + error);
                }
            })
    }

    var validarConsecutivo = () => {
        var tipoConsecutivo = $('#tipoConsecutivo').val();
        verifica = false;
        console.table(arrayConsecutivos);

        for(var i = 0; i < arrayConsecutivos.length; i++){
            if(tipoConsecutivo == $(arrayConsecutivos).eq(i).attr('TipoConsecutivo')){
                verifica = true;
                console.log('Tipo Consecutivo: ' + tipoConsecutivo + ' existe');
                break;
            }
        }
        return verifica;
    }

    var validar = () => {
        $('#btnRedondoCrearConsecutivo').click(function (e){
            e.preventDefault();

            var consecutivo = $('#consecutivo').val();
            var tipoConsecutivo = $('#tipoConsecutivo').val();
            var prefijo = $('#prefijo').val();
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
            }else if(!validarConsecutivo()){
                alert('Tipo Consecutivo no es modificable, coloque uno existente');
                $('#tipoConsecutivo').focus();
                verifica = false;
            } else  if (prefijo == '') {
                alert('Introduzca un prefijo');
                $('#prefijo').focus();
                verifica = false;
            }  else if (rol == '') {
                alert('Introduzca un rol');
                $('#rol').focus();
                verifica = false;
            }

            if(verifica){
                modificarConsecutivo();
            }
        });
    }

    var init = () => {
        cargarConsecutivos();
        validar();
    }

    init();
})()