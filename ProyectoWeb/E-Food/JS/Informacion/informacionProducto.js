(function () {
  var arrayProducto = [];
  var arrayLineaComida = [];
  var arrayTipoPrecio = [];

  var cargarProductos = () => {
    $.get("https://localhost:44360/api/Producto", function (data, status) {
      data = JSON.parse(data)
      arrayProducto = data;
      console.table(arrayProducto);
    });
  }

  var cargarLineaComida = () => {
    $.get("https://localhost:44360/api/LineaComida", function (data, status) {
      data = JSON.parse(data)
      arrayLineaComida = data;
      console.table(arrayLineaComida);
      cargarTablaLinea();
    });
  }

  var cargarTablaLinea = () => {
    $.each(arrayLineaComida, function (key, value) {
      $('#linea')
        .append($("<option value=" + value.CodigoLineaComida + "></option>")
          .attr("value", key.CodigoLineaComida)
          .text("Tipo Consecutivo: " + value.TipoConsecutivo + " Linea Comida: " + value.NombreLineaComida));
    });
  }

  var cargarTipoPrecio = () => {
    $.get("https://localhost:44360/api/TipoPrecio ", function (data, status) {
      data = JSON.parse(data)
      arrayTipoPrecio = data;
      console.table(arrayTipoPrecio);
      cargarTablaTipoPrecio();
    });
  }

  var cargarTablaTipoPrecio = () => {
    $.each(arrayTipoPrecio, function (key, value) {
      $('#tipoPrecio')
        .append($("<option value=" + value.CodigoTipoPrecio + "></option>")
          .attr("value", key.CodigoTipoPrecio)
          .text("Tipo Consecutivo: " + value.TipoConsecutivo + " Linea Comida: " + value.NombrePrecio));
    });
  }

  var agregarProducto = () => {
    var data =
    {
      "TipoConsecutivo": $("#tipoConsecutivo").val(),
      "CodigoProducto": $("#codigoProducto").val(),
      "CodigoLineaComida": $("#linea").val(),
      "CodigoTipoPrecio": $("#tipoPrecio").val(),
      "NombreProducto": $("#descripcion").val(),
      "Contenido": $("#contenido").val()
    }

    $.ajax(
      {
        url: "https://localhost:44360/api/Producto",
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function () {
          console.table('Datos insertados: ' + data);
          alert('Se ingreso la tabla: ' + $('#codigoProducto').val())
        },
        error: function (a, b, error) {
          alert('ERROR')
          console.error('ERROR' + error);
        }
      })
  }

  var eliminarProducto = () => {
    var url = "https://localhost:44360/api/Producto/" + $('#codigoProducto').val();

    $.ajax({
      url: url,
      method: 'DELETE',
      dataType: 'json',
      data:
      {
        "CodigoProducto": $('#codigoProducto').val()
      },
      success: function (data, text, xhr) {
        alert('Se ha eliminado el producto: ' + $('#codigoProducto').val());
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
    var url = "https://localhost:44360/api/Producto/" + $('#codigoProducto').val();
    var data =
    {
      "TipoConsecutivo": $("#tipoConsecutivo").val(),
      "CodigoProducto": $("#codigoProducto").val(),
      "CodigoLineaComida": $("#linea").val(),
      "CodigoTipoPrecio": $("#tipoPrecio").val(),
      "NombreProducto": $("#descripcion").val(),
      "Contenido": $("#contenido").val()
    }

    $.ajax({
      url: url,
      method: 'PUT',
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

  var validarProductoId = () => {
    var codigo = $('#codigoProducto').val();

    var verifica = true;

    for (var i = 0; i < arrayProducto.length; i++) {
      if (codigo == $(arrayProducto).eq(i).attr('CodigoProducto')) {
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

      var codigo = $("#codigoProducto").val();
      var nombre = $("#descripcion").val();
      var contenido = $("#contenido").val();

      var verifica = true;

      if (codigo == '') {
        alert('Codigo Producto es obligatorio');
        verifica = false;
        $('#codigoProducto').focus();
      } else if (!validarProductoId()) {
        alert('Codigo Producto ya existe');
        verifica = false;
        $('#codigoProducto').focus();
      } else if (nombre == '') {
        alert('Descripcion es obligatorio');
        verifica = false;
        $('#descripcion').focus();
      } else if (contenido == '') {
        alert('Contenido es obligatorio');
        verifica = false;
        $('#contenido').focus();
      }

      if (verifica) {
        agregarProducto();
        alert('Se ha agregado el producto: ' + nombre);
      }
    })

    $("[name = 'btnEliminar']").click(function (e) {
      e.preventDefault();

      var codigo = $("#codigoProducto").val();

      var verifica = true;

      if (codigo == '') {
        alert('Codigo Producto es obligatorio');
        verifica = false;
        $('#codigoProducto').focus();
      } else if (validarProductoId()) {
        alert('Codigo Producto no existe');
        verifica = false;
        $('#codigoProducto').focus();
      }

      if (verifica) {
        eliminarProducto();
        alert('Se ha eliminado el producto: ' + codigo);
      }
    })

    $("[name = 'btnModificar']").click(function (e) {
      e.preventDefault();

      var codigo = $("#codigoProducto").val();
      var nombre = $("#descripcion").val();
      var contenido = $("#contenido").val();

      var verifica = true;

      if (codigo == '') {
        alert('Codigo Producto es obligatorio');
        verifica = false;
        $('#codigoProducto').focus();
      } else if (validarProductoId()) {
        alert('Codigo Producto no existe');
        verifica = false;
        $('#codigoProducto').focus();
      }

      if(verifica){
        modificarProducto();
        alert('Se ha modificado el producto: ' + codigo);
      }
    })
  }

  var init = () => {
    cargarProductos();
    cargarLineaComida();
    cargarTipoPrecio();
    validar();
  }

  init();

})()