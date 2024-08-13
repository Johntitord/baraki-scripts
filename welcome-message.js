<script>
document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el mensaje fue cerrado en las últimas 12 horas
    const lastClosed = localStorage.getItem('welcomeMessageClosed');
    const twelveHours = 12 * 60 * 60 * 1000;

    if (!lastClosed || (Date.now() - lastClosed) >= twelveHours) {
        // Crear el contenedor del mensaje de bienvenida
        const welcomeMessage = document.createElement('div');
        welcomeMessage.id = 'welcome-message';
        welcomeMessage.style.position = 'fixed';
        welcomeMessage.style.width = '300px';
        welcomeMessage.style.padding = '20px';
        welcomeMessage.style.backgroundColor = '#ffeb3b'; // Color amarillo
        welcomeMessage.style.border = '1px solid #ccc';
        welcomeMessage.style.borderRadius = '5px';
        welcomeMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
        welcomeMessage.style.zIndex = '1000';

        // Establecer la posición del mensaje según el dispositivo
        if (window.innerWidth <= 768) {
            welcomeMessage.style.bottom = '20px';
            welcomeMessage.style.left = '50%';
            welcomeMessage.style.transform = 'translateX(-50%)';
        } else {
            welcomeMessage.style.top = '20px';
            welcomeMessage.style.right = '20px';
        }

        // Crear el botón de cerrar
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontSize = '20px';
        closeButton.style.fontWeight = 'bold';
        closeButton.style.color = '#333';

        // Función para cerrar el mensaje
        closeButton.addEventListener('click', function () {
            welcomeMessage.style.display = 'none';
            localStorage.setItem('welcomeMessageClosed', Date.now());
        });

        // Título y texto del mensaje
        welcomeMessage.innerHTML = `
            <h2 style="text-align: center; font-weight: bold;">BIENVENIDO!</h2>
            <p>No necesitas crear una cuenta para realizar pedidos 🎉 Si alguna sección no aparece, solo refresca la página 🤓.</p>
            <p>🛵 <em>*Para pedidos a domicilio únicamente se entrega a pie de calle (banqueta)*</em>.</p>
        `;

        // Agregar el botón de cerrar y el mensaje al contenedor
        welcomeMessage.appendChild(closeButton);
        document.body.appendChild(welcomeMessage);

        // Mostrar el mensaje con un retraso de 1 segundo
        setTimeout(function () {
            welcomeMessage.style.display = 'block';
        }, 1000);
    }
});


</script>


