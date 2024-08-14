document.addEventListener('DOMContentLoaded', function() {
    // Crear el contenedor de la barra de navegación
    var navbar = document.createElement('nav');
    navbar.style.backgroundColor = '#333';
    navbar.style.overflow = 'hidden';
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.width = '100%';
    navbar.style.zIndex = '1000';

    // Crear los enlaces de navegación
    var navItems = [
        { text: 'Inicio', href: 'https://www.baraki.mx' },
        { text: 'Tienda', href: 'https://www.baraki.mx/#!/~/category/id=0&offset=0&sort=normal' },
        { text: 'Nosotros', href: 'https://www.baraki.mx/nosotros' },
        { text: 'Contacto', href: 'https://www.baraki.mx/contacto' }
    ];

    navItems.forEach(function(item) {
        var link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.text;
        link.style.float = 'left';
        link.style.display = 'block';
        link.style.color = 'white';
        link.style.textAlign = 'center';
        link.style.padding = '14px 16px';
        link.style.textDecoration = 'none';
        link.style.fontSize = '17px';
        
        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = '#ddd';
            link.style.color = 'black';
        });

        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = '#333';
            link.style.color = 'white';
        });

        navbar.appendChild(link);
    });

    // Añadir la barra de navegación al cuerpo del documento
    document.body.insertBefore(navbar, document.body.firstChild);
});
