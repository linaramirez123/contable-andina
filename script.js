// ===== ÍCONOS =====
// Convierte las etiquetas <i data-lucide="..."> en íconos.
lucide.createIcons();

// ===== ANIMACIÓN AL BAJAR =====
const elementos = document.querySelectorAll('.revelar');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elementos.forEach((elemento) => observador.observe(elemento));

// ===== MENÚ PARA CELULAR =====
const botonMenu = document.getElementById('botonMenu');
const navegacion = document.getElementById('navegacion');

botonMenu.addEventListener('click', () => {
  navegacion.classList.toggle('abierto');
});

navegacion.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => navegacion.classList.remove('abierto'));
});

// ===== PREGUNTAS FRECUENTES =====
const preguntas = document.querySelectorAll('.pregunta');

preguntas.forEach((pregunta) => {
  pregunta.querySelector('.pregunta-titulo').addEventListener('click', () => {
    const estabaAbierta = pregunta.classList.contains('abierta');
    preguntas.forEach((otra) => otra.classList.remove('abierta'));
    if (!estabaAbierta) pregunta.classList.add('abierta');
  });
});

// ===== FORMULARIO → WHATSAPP =====
const formulario = document.getElementById('formulario');
const numeroWhatsApp = '573000000000'; // número de ejemplo

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value;

  const texto = `Hola, soy ${nombre}. Quisiera una asesoría en: ${servicio}. ${mensaje}`;
  window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`, '_blank');
});