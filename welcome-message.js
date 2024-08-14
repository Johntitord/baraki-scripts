Ecwid.OnAPILoaded.add(function() {
    console.log('Ecwid JS API is loaded.');

    $(document).ready(function () {
        console.log('DOM completamente cargado y parseado.');
        
        // Verificar la URL actual
        if (window.location.href === 'https://www.baraki.mx/products/checkout/delivery') {
            console.log('Estamos en la página de entrega.');
            showDeliveryMessage();
        } else {
            console.log('No estamos en la página de entrega.');
        }

        function showDeliveryMessage() {
            console.log('Mostrando el mensaje de entrega.');

            const deliveryMessage = $('<div>', { id: 'delivery-message' })
                .css({
                    position: 'fixed',
                    width: '300px',
                    padding: '20px',
                    backgroundColor: '#ffeb3b', // Color amarillo
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    zIndex: '1000',
                    display: 'none'
                });

            if (window.innerWidth <= 768) {
                deliveryMessage.css({
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                });
            } else {
                deliveryMessage.css({
                    top: '20px',
                    right: '20px'
                });
            }

            const closeButton = $('<span>', { html: '&times;' })
                .css({
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#333'
                })
                .on('click', function () {
                    deliveryMessage.hide();
                    console.log('Mensaje cerrado.');
                });

            deliveryMessage.html(`
                <h2 style="text-align: center; font-weight: bold;">¡RECUERDA!</h2>
                <p>Estás por seleccionar un envío por cobrar, es decir, la cuota de envío la pagarás directamente al repartidor en efectivo, esta cuota puede variar dependiendo de tu ubicación y no la cubrimos nosotros.</p>
            `);

            deliveryMessage.append(closeButton);
            $('body').append(deliveryMessage);

            setTimeout(function () {
                deliveryMessage.show();
                console.log('Mensaje mostrado después de 1 segundo.');
            }, 1000);
        }
    });
});



