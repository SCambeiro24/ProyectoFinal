document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-api-lugares');
    if (!contenedor) return;

    const categoriaPagina = contenedor.getAttribute('data-categoria');

    fetch('http://127.0.0.1:8000/api/lugares/')
        .then(response => {
            if (!response.ok) throw new Error('Error de red');
            return response.json();
        })
        .then(datos => {
            contenedor.innerHTML = '';
            
            let htmlPrincipal = '';
            let htmlExtra = '';
            let contador = 0;
            
            datos.forEach(lugar => {
                if (lugar.categoria_nombre === categoriaPagina) {
                    const tarjetaHTML = `
                        <div class="fila-detalle">
                            <div class="img-detalle">
                                <img src="${lugar.imagen_url}" alt="${lugar.nombre}">
                            </div>
                            <div class="texto-detalle">
                                <p><strong>${lugar.nombre}</strong> ${lugar.descripcion}</p>
                            </div>
                        </div>
                    `;
                    
                    if (contador < 4) {
                        htmlPrincipal += tarjetaHTML;
                    } else {
                        htmlExtra += tarjetaHTML;
                    }
                    contador++;
                }
            });

            contenedor.innerHTML = htmlPrincipal;
            
            const btnMas = document.getElementById('btn-mostrar-mas');
            const btnMenos = document.getElementById('btn-mostrar-menos');

            if (htmlExtra !== '') {
                contenedor.innerHTML += `
                    <div id="contenido-extra" style="display: none;">
                        ${htmlExtra}
                    </div>
                `;
                
                const divExtra = document.getElementById('contenido-extra');
                
                if (btnMas) btnMas.style.display = 'inline-block';
                
                if (btnMas && btnMenos) {
                    btnMas.onclick = function() {
                        divExtra.style.display = 'block';
                        btnMas.style.display = 'none';
                        btnMenos.style.display = 'inline-block';
                    };
                    btnMenos.onclick = function() {
                        divExtra.style.display = 'none';
                        btnMas.style.display = 'inline-block';
                        btnMenos.style.display = 'none';
                    };
                }
            } else {
                if (btnMas) btnMas.style.display = 'none';
                if (btnMenos) btnMenos.style.display = 'none';
            }
        })
        .catch(error => console.error('Error:', error));
});