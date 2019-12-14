(function () {

    var arrayDatosUsuariosAdmin = [];
    var arrayDatosRoles = [];
    var arrayDatosPreguntasSeguridad = [];


    var cargarUsuarios = () => {
        fetch('https://localhost:44360/api/UsuariosAdmin')
            .then(res => res.json())
            .then(data => {
                data = JSON.parse(data)
                arrayDatosUsuariosAdmin = data;
                console.table(arrayDatosUsuariosAdmin)
                cargarTablaUsuarios();

            })
            .catch(err => console.log('error', err));
    }

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

    var cargarPreguntasSeguridad = () => {
        fetch('https://localhost:44360/api/PreguntaSeguridad')
            .then(res => res.json())
            .then(data => {
                data = JSON.parse(data)
                arrayDatosPreguntasSeguridad = data;
                console.table(arrayDatosPreguntasSeguridad)
                //cargarTablaUsuarios();
            })
            .catch(err => console.log('error', err));
    }

    var cargarTablaUsuarios = () => {
        var div = document.getElementById('datosUsuariosAdmin');

        var listaUsuarios = arrayDatosUsuariosAdmin.map(function (x) {
            var tipoRol = `${x.RolID}`
            var nombreRol;

            if(tipoRol == 1)
            {
                nombreRol = "Administrador"
            }else if(tipoRol == 2)
            {
                nombreRol = "Seguridad"
            }else if(tipoRol == 3)
            {
                nombreRol = "Mantenimiento"
            }else if (tipoRol == 4)
            {
                nombreRol = "Consultas"
            }

            return `<tr>
           <td>${x.UsuariosAdminID}</td>
           <td>${x.UsuarioNombre}</td>
           <td id="${x.RolID}">${nombreRol}</td>
           <td>${x.Email}</td>
           <td>
               <a id="editarUsuario" href="/ProyectoWeb/E-Food/HTML/InformacionUsuarios.html">Editar</a>
           </td>
           <td>
               <a id="eliminarUsuario" href="/ProyectoWeb/E-Food/HTML/InformacionUsuarios.html">Eliminar</a>
           </td>
       </tr>`;
        });

        div.innerHTML = listaUsuarios.join(" ");
    }

    var init = () => {
        cargarUsuarios();
        cargarRoles();
        cargarPreguntasSeguridad();
    }

    init();

})()