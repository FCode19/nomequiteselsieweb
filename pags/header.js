
document.addEventListener("DOMContentLoaded", function() {
  const headerHTML = `
  <header class="bg-principal text-white py-3">
    <div class="container">
      
    </div>
  </header>
  <header class="bg-contraste text-white py-1">
    <div class="container">
      
    </div>
  </header>
  <!-- Barra de navegación -->
  <nav class="navbar navbar-expand-lg bg-principal">
    <div class="container">
      <a class="navbar-brand text-white fw-bold" href="/index.html">¡Bienvenido a la Familia Praguina!</a>
  
      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ms-auto">
  
          <li class="nav-item">
            <a class="nav-link text-white" href="/index.html">INICIO</a>
          </li>
  
          <!-- NOSOTROS dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
              NOSOTROS
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/pags/mision.html">MISIÓN</a></li>
              <li><a class="dropdown-item" href="/pags/vision.html">VISIÓN</a></li>
              <li><a class="dropdown-item" href="/pags/valores.html">VALORES</a></li>
            </ul>
          </li>
  
          <!-- ÁREA ACADÉMICA dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
              ÁREA ACADÉMICA
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/pags/direccion.html">DIRECCIÓN</a></li>
              <li><a class="dropdown-item" href="/pags/subdireccion.html">SUBDIRECCIÓN GENERAL</a></li>
              <li><a class="dropdown-item" href="/pags/coordinacion.html">COORD. SERVICIOS COMPLEMENTARIOS</a></li>
              <li><a class="dropdown-item" href="/pags/actividades.html">COORD. ACTIVIDADES</a></li>
            </ul>
          </li>
  
          <li class="nav-item">
            <a class="nav-link text-white" href="https://cunanavalpraga.sieweb.com.pe/sistema/login"
              target="_blank">SIEWEB</a>
          </li>
  
          <!-- ÁREA ADMINISTRATIVA dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
              ÁREA ADMINISTRATIVA
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/pags/administracion.html">ADMINISTRACIÓN</a></li>
              <li><a class="dropdown-item" href="/pags/rrhh.html">RECURSOS HUMANOS Y SEGURIDAD</a></li>
              <li><a class="dropdown-item" href="/pags/calidad.html">CALIDAD Y ACREDITACIÓN EDUCATIVA</a></li>
            </ul>
          </li>
  
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.fbn.org.pe/">FUNDACIÓN BIENESTAR</a>
          </li>
  
        </ul>
      </div>
    </div>
  </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
