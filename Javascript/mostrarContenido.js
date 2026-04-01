document.addEventListener('DOMContentLoaded', () => {
    const extraContent = document.getElementById('contenido-extra');
    const btnMas = document.getElementById('btn-mostrar-mas');
    const btnMenos = document.getElementById('btn-mostrar-menos');

    btnMas.addEventListener('click', () => {
        extraContent.style.display = 'block'; 
        btnMas.style.display = 'none';        
        btnMenos.style.display = 'inline-block'; 
    });

    btnMenos.addEventListener('click', () => {
        extraContent.style.display = 'none';  
        btnMas.style.display = 'inline-block'; 
        btnMenos.style.display = 'none';       
        
        
    });
});