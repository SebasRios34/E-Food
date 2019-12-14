(function()
{
    var arrayTiposPrecio = [];

    var cargarTiposPrecio = () =>{
        $.get("https://localhost:44360/api/TipoPrecio/", function (data, status) {
            data = JSON.parse(data)
            arrayTiposPrecio = data;
            console.table(data);
            console.table(arrayTiposPrecio);
        });
    }

    var init = () => {
        cargarTiposPrecio();
    }

    init();

})()