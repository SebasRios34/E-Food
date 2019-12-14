(function () {
    var arrayTarjetas = [];

    var cargarTarjetas = () => {
        $.get("https://localhost:44360/api/Tarjetas", function (data, status) {
            data = JSON.parse(data)
            arrayTarjetas = data;
            console.table(data);
            console.table(arrayTarjetas);
            cargarTablaTarjetas();
        });
    }

    var cargarTablaTarjetas = () => {
        var div = document.getElementById('datosTarjetas');

        var listaTarjetas = arrayTarjetas.map(function (x) {
            return ` <tr>
            <td>${x.CodigoTarjeta}</td>
            <td>${x.NombreTarjeta}</td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionTarjetas.html">Editar</a>
            </td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionTarjetas.html">Eliminar</a>
            </td>
        </tr>`
        });
        div.innerHTML = listaTarjetas.join(" ");
    }

    var init = () => {
        cargarTarjetas();
    }

    init(); 
   
})()