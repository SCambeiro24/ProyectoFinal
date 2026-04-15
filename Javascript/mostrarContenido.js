document.addEventListener('DOMContentLoaded', function() {
    
    var extra = document.getElementById('contenido-extra');
    var btnMas = document.getElementById('btn-mostrar-mas');
    var btnMenos = document.getElementById('btn-mostrar-menos');

    btnMas.addEventListener('click', function() {
        extra.style.display = 'block';     
        btnMas.style.display = 'none';      
        btnMenos.style.display = 'inline-block'; 
    });

    btnMenos.addEventListener('click', function() {
        extra.style.display = 'none';      
        btnMas.style.display = 'inline-block'; 
        btnMenos.style.display = 'none';    
    });

});