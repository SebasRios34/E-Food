(function(){
    var arrayLineaComida = [];

    var cargarLineaComida = () =>{
        $.get("https://localhost:44360/api/LineaComida/", function (data, status) {
            data = JSON.parse(data)
            arrayLineaComida = data;
            console.table(data);
            console.table(arrayLineaComida);
            cargarTablaLineaComida();
        });
    }

    var cargarTablaLineaComida = () =>{
        var div = document.getElementById('datosLineaComida');

        var listaLineaComida = arrayLineaComida.map(function (x) {
            return `<tr>
            <td>${x.TipoConsecutivo}</td>
            <td>${x.CodigoLineaComida}</td>
            <td>${x.NombreLineaComida}</td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionLineaComida.html">Editar</a>
            </td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionLineaComida.html">Eliminar</a>
            </td>      
        </tr>`
        });

        div.innerHTML = listaLineaComida.join(" ")
    }

    var init = () =>{
        cargarLineaComida();
    }

    init();
})()