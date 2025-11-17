// script.js: pequeño comportamiento para nav y año dinámico
document.addEventListener('DOMContentLoaded', function () {
  // Nav toggle mobile
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle && toggle.addEventListener('click', function () {
    links.classList.toggle('show');
  });

  // Año en footer
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if (el) el.textContent = y;

  // Reproducir videos cuando entran al viewport (optimización)
  var vids = document.querySelectorAll('video');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.muted = true; e.target.play().catch(()=>{}); }
        else { e.target.pause(); }
      });
    }, { threshold: 0.5 });
    vids.forEach(v => io.observe(v));
  }
});
