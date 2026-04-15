document.addEventListener('DOMContentLoaded', function() {
    
    var track = document.querySelector('.slider-track');
    var btnSiguiente = document.getElementById('nextBtn');
    var btnAnterior = document.getElementById('prevBtn');
    
    var fotos = document.getElementsByClassName('slide');
    var indiceActual = 0;

    function moverSlider(indice) {
        var desplazamiento = indice * -100;
        track.style.transform = 'translateX(' + desplazamiento + '%)';
    }

    btnSiguiente.addEventListener('click', function() {
        indiceActual = indiceActual + 1;
        
        if (indiceActual >= fotos.length) {
            indiceActual = 0;
        }
        moverSlider(indiceActual);
    });

    btnAnterior.addEventListener('click', function() {
        indiceActual = indiceActual - 1;
        
        if (indiceActual < 0) {
            indiceActual = fotos.length - 1;
        }
        moverSlider(indiceActual);
    });

});