// ============================================
// MENÚ MÓVIL — Eugenia Cosama
// ============================================
// Este script hace que el botón "hamburguesa"
// (las 3 rayitas) abra y cierre el menú en móvil.

// 1. Buscamos los dos elementos que necesitamos del HTML
const botonMenu = document.getElementById('menuToggle');
const menu = document.getElementById('menuPrincipal');

// 2. Cuando el usuario haga clic en el botón...
botonMenu.addEventListener('click', () => {
  // ...le añadimos o quitamos la clase "abierto"
  // (el CSS ya sabe qué hacer visualmente con esa clase)
  menu.classList.toggle('abierto');
});

// 3. Bonus: si el usuario hace clic en un enlace del menú,
// lo cerramos automáticamente (mejor experiencia en móvil)
const enlacesMenu = menu.querySelectorAll('a');
enlacesMenu.forEach(enlace => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('abierto');
  });
});
