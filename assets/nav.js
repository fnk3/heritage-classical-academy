// Mobile nav toggle + dropdown tap support
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }
  // On mobile, let a tap on a parent item open its submenu
  document.querySelectorAll('.menu .dd-toggle').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        var li = link.parentElement;
        li.classList.toggle('sub-open');
        var sub = li.querySelector('.submenu');
        if (sub) sub.style.display = li.classList.contains('sub-open') ? 'block' : 'none';
      }
    });
  });
});
