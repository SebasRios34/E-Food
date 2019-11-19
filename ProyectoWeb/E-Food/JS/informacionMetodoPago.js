$(document).ready(function(){   
    $('.tarjetasDisponibles').on('click', 'li', function(){    
       $(this).appendTo('.tarjetasAsignadas');
    });

    $('.tarjetasAsignadas').on('click', 'li', function(){    
       $(this).appendTo('.tarjetasDisponibles');
    });
});