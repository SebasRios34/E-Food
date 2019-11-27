(function()
{

    var usuarioNombre = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasenia').value;
    var correo = document.getElementById('email').value;
    var rol = document.getElementById('rol').value;
    var preguntaSeguridad = document.getElementById('preguntaSeguridad').value;
    var respuestaSeguridad = document.getElementById('respuestaSeguridad').value;

    var agregarUsuarios = () =>
    {
        fetch('https://localhost:44360/api/UsuariosAdmin', 
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    UsuariosAdminId: 3,
                    RolId: rol,
                    PreguntaSeguridadId: preguntaSeguridad,
                    UsuariosNombre: usuarioNombre,
                    Contrasena: contrasena,
                    Email: correo,
                    RespuestaSeguridad: respuestaSeguridad,
                    Estado: "Activo"
                }),
            headers: 
            {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
            },
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
        .then(response => console.log('Sucess: ', response));
    }

    var btnAgregarUsuario = document.getElementById('btnRedondoCrearUsuario');
    btnAgregarUsuario.onclick = function()
    {
        agregarUsuarios();
    }

})()