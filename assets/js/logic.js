/*tooltip */
const labels = document.querySelectorAll('.Label_Form');
        
        labels.forEach(label => {
            const tooltipText = label.querySelector('.tooltiptext');
            
            label.addEventListener('mouseover', () => {
                tooltipText.style.visibility = 'visible';
                tooltipText.style.opacity = '1';
            });

            label.addEventListener('mouseout', () => {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            });
        });


    /*Alerta de mensaje enviado*/
    const botonEnviar = document.getElementById('botonEnviar');

    botonEnviar.addEventListener('click', () => {
        alert('Mensaje enviado');
    });
