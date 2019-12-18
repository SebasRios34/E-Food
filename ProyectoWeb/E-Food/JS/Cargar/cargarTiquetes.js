(function(){
    var arrayTiquetesDescuento = [];

    var cargarTiquetes = () =>{
        $.get("https://localhost:44360/api/TiqueteDescuento", function (data, status) {
            data = JSON.parse(data)
            arrayTiquetesDescuento = data;
            console.table(data);
            console.table(arrayTiquetesDescuento);
            cargarTablaTiquetes();
        });
    }

    var cargarTablaTiquetes = () => {
        var div = document.getElementById('datosTiquetes');

        var listaTiquete = arrayTiquetesDescuento.map(function (x) {
            return ` <tr>
            <td>${x.CodigoTiqueteDescuento}</td>
            <td>${x.NombreTiquete}</td>
            <td>${x.Disponibles}</td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionTipoPrecio.html">Editar</a>
            </td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionTipoPrecio.html">Eliminar</a>
            </td>
        </tr>`
        });
        div.innerHTML = listaTiquete.join(" ");
    }

    var init = () => {
        cargarTiquetes();
    }

    init();

})()