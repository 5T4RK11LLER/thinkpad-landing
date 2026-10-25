(function () {
  var root = document.documentElement;
  var saved = 'dark';
  try { saved = localStorage.getItem('theme') || 'dark'; } catch (e) {}
  root.setAttribute('data-bs-theme', saved);

  function setTheme(theme, icon) {
    root.setAttribute('data-bs-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    // En oscuro se muestra el sol (para pasar a claro); en claro, la luna
    if (icon) icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggle');
    var icon = document.getElementById('themeIcon');
    if (!btn) return;
    setTheme(root.getAttribute('data-bs-theme'), icon);
    btn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark', icon);
    });
  });
})();