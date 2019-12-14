(function () {
   var arrayProcesadorPago = [];
   var arrayTarjetas = [];

   var cargarProcesadorPago = () => {
      $.get("https://localhost:44360/api/ProcesadorPago/", function (data, status) {
         data = JSON.parse(data)
         arrayProcesadorPago = data;
         console.table(data);
         console.table(arrayProcesadorPago);
      });
   }

   var cargarTarjetas = () => {
      $.get("https://localhost:44360/api/Tarjetas/", function (data, status) {
         data = JSON.parse(data)
         arrayTarjetas = data;
         console.table(data);
         console.table(arrayTarjetas);
      });
   }

   var agregarProcesador = () => {
      var data =
      {
         TipoConsecutivo: 4,
         CodigoProcesador: $('#codigoMetodoPago').val(),
         NombreProcesador: $('#procesador').val(),
         Tipo: $('#tipo').val(),
         Estado: $('#estado').val(),
         RequiereVerificacion: $('#requiereVerificacion').val(),
         Metodo: $('#metodo').val(),
         CodigoTarjeta: $('#codigoTarjeta').val(),
      }

      $.ajax(
         {
            url: "https://localhost:44360/api/ProcesadorPago",
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function () {
               console.table('Datos insertados: ' + data);
               alert('Se ingreso la tabla: ' + $('#codigoMetodoPago').val())
            },
            error: function (a, b, error) {
               alert('ERROR')
               console.error('ERROR' + error);
            }
         })
   }

   var validarProcesadorId = () => {
      var codigo = $('#codigoMetodoPago').val();

      var verifica = false;

      for (var i = 0; i < arrayProcesadorPago.length; i++) {
         if (codigo != $(arrayProcesadorPago).eq(i).attr('CodigoProcesador')) {
            verifica = true;
            console.log('verificaCodigo: ' + verifica);
            break;
         }
      }
      return verifica;
   }

   var validarTarjetaId2 = () => {
      var tarjetaId = $('#codigoTarjeta').val();

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

         var codigo = $('#codigoMetodoPago').val();
         var nombreProcesador = $('#procesador').val();
         var tipo = $('#tipo').val();
         var estado = $('#estado').val();
         var requiereVerificacion = $('#requiereVerificacion').val();
         var metodo = $('#metodo').val();
         var codigoTarjeta = $('#codigoTarjeta').val();

         var verifica = true;

         if (codigo == '') {
            alert('Codigo Procesador es obligatorio');
            verifica = false;
            $('#codigoMetodoPago').focus();
         } else if (!validarProcesadorId()) {
            alert('Codigo Procesador ya existe');
            verifica = false;
            $('#codigoMetodoPago').focus();
         } else if (nombreProcesador == '') {
            alert('Nombre Procesador es obligatorio');
            verifica = false;
            $('#procesador').focus();
         } else if (tipo == '') {
            alert('Tipo es obligatorio');
            verifica = false;
            $('#tipo').focus();
         } else if (estado == '') {
            alert('Estado es obligatorio');
            verifica = false;
            $('#estado').focus();
         } else if (requiereVerificacion == '') {
            alert('Requiere Verificacion es obligatorio');
            verifica = false;
            $('#requiereVerificacion').focus();
         } else if (metodo == '') {
            alert('Metodo es obligatorio');
            verifica = false;
            $('#metodo').focus();
         } else if (codigoTarjeta == '') {
            alert('Codigo tarjeta es obligatorio');
            verifica = false;
            $('#codigoTarjeta').focus();
         } else if (!validarTarjetaId2()) {
            alert('Codigo tarjeta no existe');
            verifica = false;
            $('#procesador').focus();
         }

         if (verifica) {
            agregarProcesador();
         }
      })
   }

   var init = () => {
      cargarProcesadorPago();
      cargarTarjetas();
      validar();
   }

   init();
})()