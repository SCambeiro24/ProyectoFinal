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
                    
                    // 1. Creamos las etiquetas con diseño de "píldora" centradas
                    let etiquetasHTML = '';
                    if (lugar.etiquetas_nombres && lugar.etiquetas_nombres.length > 0) {
                        let spans = lugar.etiquetas_nombres.map(tag => 
                            `<span style="background-color: #1e3a8a; color: white; padding: 4px 10px; border-radius: 12px; font-size: 0.75em; margin-right: 6px; font-weight: bold; white-space: nowrap;">${tag}</span>`
                        ).join('');
                        
                        etiquetasHTML = `<div style="margin-bottom: 15px; display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; width: 100%;">${spans}</div>`;
                    }

                    // 2. Título centrado y en MAYÚSCULAS con text-transform
                    const tarjetaHTML = `
                        <div class="fila-detalle">
                            <div class="img-detalle">
                                <img src="${lugar.imagen_url}" alt="${lugar.nombre}">
                            </div>
                            <div class="texto-detalle" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                                <h3 style="margin: 0 0 8px 0; font-size: 1.5em; text-align: center; text-transform: uppercase; width: 100%; color: #1a1a1a;">
                                    ${lugar.nombre}
                                </h3>
                                ${etiquetasHTML}
                                <div style="display: block; width: 100%; margin-top: 5px; text-align: left;">
                                    <p style="margin: 0; line-height: 1.6; color: #333;">${lugar.descripcion}</p>
                                </div>
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