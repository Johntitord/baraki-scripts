<script>
Ecwid.OnAPILoaded.add(function() {
    console.log('Ecwid JS API is loaded.');

    // Verificar que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function () {
        console.log('DOM completamente cargado y parseado.');

        // Verificar la URL actual
        if (window.location.href.includes('/products/checkout/delivery')) {
            console.log('Estamos en la página de entrega.');
            showDeliveryMessage();
        } else {
            console.log('No estamos en la página de entrega.');
        }

        function showDeliveryMessage() {
            console.log('Mostrando el mensaje de entrega.');

            const deliveryMessage = document.createElement('div');
            deliveryMessage.id = 'delivery-message';
            deliveryMessage.style.position = 'fixed';
            deliveryMessage.style.width = '300px';
            deliveryMessage.style.padding = '20px';
            deliveryMessage.style.backgroundColor = '#ffeb3b'; // Color amarillo
            deliveryMessage.style.border = '1px solid #ccc';
            deliveryMessage.style.borderRadius = '5px';
            deliveryMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
            deliveryMessage.style.zIndex = '1000';

            if (window.innerWidth <= 768) {
                deliveryMessage.style.bottom = '20px';
                deliveryMessage.style.left = '50%';
                deliveryMessage.style.transform = 'translateX(-50%)';
            } else {
                deliveryMessage.style.top = '20px';
                deliveryMessage.style.right = '20px';
            }

            const closeButton = document.createElement('span');
            closeButton.innerHTML = '&times;';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.right = '10px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.fontSize = '20px';
            closeButton.style.fontWeight = 'bold';
            closeButton.style.color = '#333';

            closeButton.addEventListener('click', function () {
                deliveryMessage.style.display = 'none';
                console.log('Mensaje cerrado.');
            });

            deliveryMessage.innerHTML = `
                <h2 style="text-align: center; font-weight: bold;">¡RECUERDA!</h2>
                <p>Estás por seleccionar un envío por cobrar, es decir, la cuota de envío la pagarás directamente al repartidor en efectivo, esta cuota puede variar dependiendo de tu ubicación y no la cubrimos nosotros.</p>
            `;

            deliveryMessage.appendChild(closeButton);
            document.body.appendChild(deliveryMessage);

            setTimeout(function () {
                deliveryMessage.style.display = 'block';
                console.log('Mensaje mostrado después de 1 segundo.');
            }, 1000);
        }
    });
});
</script>


