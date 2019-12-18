(function()
{
    var arrayTiposPrecio = [];

    var cargarTiposPrecio = () =>{
        $.get("https://localhost:44360/api/TipoPrecio/", function (data, status) {
            data = JSON.parse(data)
            arrayTiposPrecio = data;
            console.table(data);
            console.table(arrayTiposPrecio);
            cargarTablaTipoPrecio();
        });
    }

    var cargarTablaTipoPrecio = () => {
        var div = document.getElementById('datosTipoPrecio');

        var listaTipoPrecio = arrayTiposPrecio.map(function (x) {
            return ` <tr>
            <td>${x.CodigoTipoPrecio}</td>
            <td>${x.NombrePrecio}</td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionTipoPrecio.html">Editar</a>
            </td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionTipoPrecio.html">Eliminar</a>
            </td>
        </tr>`
        });
        div.innerHTML = listaTipoPrecio.join(" ");
    }

    var init = () => {
        cargarTiposPrecio();
    }

    init();

})()