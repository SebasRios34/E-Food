(function()
{
    var arrayProcesadorPago = [];

    var cargarProcesadorPago = () => {
        $.get("https://localhost:44360/api/ProcesadorPago/", function (data, status) {
            data = JSON.parse(data)
            arrayProcesadorPago = data;
            console.table(data);
            console.table(arrayProcesadorPago);
            cargarTablaProcesador();
        });
    }
    
    var cargarTablaProcesador = () =>{
        var div = document.getElementById('datosProcesador');

        var listaProcesador = arrayProcesadorPago.map(function (x) {
            return `<tr>
            <td>${x.CodigoProcesador}</td>
            <td>${x.NombreProcesador}</td>
            <td>${x.Tipo}</td>
            <td>${x.Estado}</td>
            <td>${x.RequiereVerificacion}</td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionMetodoPago.html">Editar</a>
            </td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionMetodoPago.html">Eliminar</a>
            </td>
            </tr>`
        });

        div.innerHTML = listaProcesador.join(" ");
    }

    var init = () =>{
        cargarProcesadorPago();
    }

    init();
})()