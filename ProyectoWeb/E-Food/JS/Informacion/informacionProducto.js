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
      cargarLineaComida();
    });
  }

  var cargarLineaComida = () => {
    var output = [];

    $.each(arrayLineaComida, function(x, value){
      output.push('<option value="' + x + '"> ' + value +  ' </option>')
    });

    console.table(output);
    $('#linea').html(output.join(' '));
}

  var cargarTipoPrecio = () => {
    $.get("https://localhost:44360/api/TipoPrecio ", function (data, status) {
      data = JSON.parse(data)
      arrayTipoPrecio = data;
      console.table(arrayTipoPrecio);
    });
  }

  var init = () => {
    cargarProductos();
    cargarLineaComida();
    cargarTipoPrecio();
  }

  init();

})()