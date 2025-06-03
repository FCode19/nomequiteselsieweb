
document.addEventListener("DOMContentLoaded", function() {
  const footerHTML = `
  <footer class="bg-principal text-white mt-5 pt-4 pb-2">
    <div class="container">
      <h5>Enlaces de interés</h5>
      <ul class="list-unstyled">
        <li><a href="https://www.gob.pe/minedu" class="text-contraste">Ministerio de Educación</a></li>
        <li><a href="https://www.gob.pe/marina" class="text-contraste">Marina de Guerra</a></li>
        <li><a href="https://dirbiemar.pe/" class="text-contraste">DIRBIEMAR</a></li>
      </ul>
      <p class="mt-3 text-center small">© Copyright - Institución Educativa Inicial “Niño Jesús de Praga”<br>
      Todos los Derechos Reservados</p>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
