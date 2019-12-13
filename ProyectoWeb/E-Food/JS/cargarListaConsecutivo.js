(function(){
    var arrayConsecutivos = [];

    var cargarConsecutivos = () => {
        $.get("https://localhost:44360/api/Consecutivo/", function (data, status) {
            data = JSON.parse(data)
            arrayConsecutivos = data;
            console.table(data);
            console.table(arrayConsecutivos);
            cargarTablaConsecutivos();
        });
    }

    var cargarTablaConsecutivos = () =>{
        var div = document.getElementById('datosConsecutivos');

        var listaConsecutivos = arrayConsecutivos.map(function (x) {
            return `<tr>
            <td>${x.ConsecutivoID}</td>
            <td>${x.Prefijo}</td>
            <td>${x.NombreRol}</td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionConsecutivo.html">Editar</a>
            </td>
        </tr>`
        });

        div.innerHTML = listaConsecutivos.join(" ")
    }

    var init = () =>{
        cargarConsecutivos();
    }

    init();
})()