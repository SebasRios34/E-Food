(function () {

    var arrayDatosUsuariosAdmin = [];
    var arrayDatosRoles = [];
    var arrayDatosPreguntasSeguridad = [];

    var cargarUsuarios = () => 
    {
        fetch('https://localhost:44360/api/UsuariosAdmin')
        .then(res => res.json())
        .then(data => 
            {
                data = JSON.parse(data)
                arrayDatosUsuariosAdmin = data;
                console.table(arrayDatosUsuariosAdmin)
                cargarTablaUsuarios();


            })
            .catch(err => console.log('error', err));
    }

    var cargarRoles = () => 
    {
        fetch('https://localhost:44360/api/Rol')
        .then(res => res.json())
        .then(data => 
            {
                data = JSON.parse(data)
                arrayDatosRoles = data;
                console.table(arrayDatosRoles)
                //cargarTablaUsuarios();
            })
            .catch(err => console.log('error', err));
    }

    var cargarPreguntasSeguridad = () => 
    {
        fetch('https://localhost:44360/api/PreguntaSeguridad')
        .then(res => res.json())
        .then(data => 
            {
                data = JSON.parse(data)
                arrayDatosPreguntasSeguridad = data;
                console.table(arrayDatosPreguntasSeguridad)
                //cargarTablaUsuarios();
            })
            .catch(err => console.log('error', err));
    }

    var cargarTablaUsuarios = () =>
    {
       var div = document.getElementsByName('datosUsuariosAdmin');

       var listaUsuarios = arrayDatosUsuariosAdmin.map(function(x)
       {
           return `<a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
           href="#list-home" role="tab" aria-controls="home">${x.UsuarioNombre}</a>`;
       });

       div[0].innerHTML = listaUsuarios;
    }

    var init = () =>
    {
        cargarUsuarios();
        cargarRoles();
        cargarPreguntasSeguridad();
    }

    init();

})()