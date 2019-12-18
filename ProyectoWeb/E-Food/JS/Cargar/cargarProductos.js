(function(){
    var arrayProductos = [];

    var cargarProductos = () => {
        $.get("https://localhost:44360/api/Producto", function (data, status) {
            data = JSON.parse(data)
            arrayProductos = data;
            console.table(data);
            console.table(arrayProductos);
            cargarTablaProducto();
        });
    }

    var cargarTablaProducto = () => {
        var div = document.getElementById('datosProducto');

        var listaProducto = arrayProductos.map(function (x) {
            return ` <tr>
            <td>${x.TipoConsecutivo}</td>
            <td>${x.CodigoProducto}</td>
            <td>${x.NombreProducto}</td>
            <td>${x.NombreLineaComida}</td>
            <td>${x.Contenido}</td>
            <td>${x.NombrePrecio}</td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionProducto.html">Editar</a>
            </td>
            <td>
                <a href="/ProyectoWeb/E-Food/HTML/InformacionProducto.html">Eliminar</a>
            </td>
        </tr>`
        });
        div.innerHTML = listaProducto.join(" ");
    }

    var init = () =>{
        cargarProductos();
    }

    init();
})()