(function () {

    var arrayDatosRoles = [];

    var cargarRoles = () => {
        fetch('https://localhost:44360/api/Rol')
            .then(res => res.json())
            .then(data => {
                data = JSON.parse(data)
                arrayDatosRoles = data;
                console.table(arrayDatosRoles)
                //cargarTablaUsuarios();
            })
            .catch(err => console.log('error', err));
    }

    var cargarTablaRoles = () => {
        var div = document.getElementById('datosRol');

        var listaRoles = arrayDatosUsuariosAdmin.map(function (x) {

            return `<tr>
           <td>${x.RolID}</td>
           <td>${x.NombreRol}</td>`;
        });

        div.innerHTML = listaRoles.join(" ");
    }

    var init = () => {
        cargarRoles();
    }

    init();

})()