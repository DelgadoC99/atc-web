// Menú móvil, año del footer, fotos de fondo, galería y animaciones
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Carga una imagen y avisa si existe (si no, se ignora en silencio)
  function loadImage(src, ok) {
    var img = new Image();
    img.onload = function () { ok(src); };
    img.src = src;
  }

  // ---------- Fotos de fondo del hero (data-slides="a.jpg,b.jpg") ----------
  document.querySelectorAll(".hero[data-slides]").forEach(function (hero) {
    var sources = hero.dataset.slides.split(",").map(function (s) { return s.trim(); });
    var holder = document.createElement("div");
    holder.className = "hero-slides";
    hero.insertBefore(holder, hero.firstChild);

    var slides = [];
    var current = 0;
    var timer = null;
    var dots = null;

    function show(i) {
      slides.forEach(function (s, n) { s.classList.toggle("active", n === i); });
      if (dots) {
        Array.prototype.forEach.call(dots.children, function (d, n) {
          d.classList.toggle("active", n === i);
        });
      }
      current = i;
    }

    function start() {
      if (timer || slides.length < 2) return;
      timer = setInterval(function () { show((current + 1) % slides.length); }, 6000);
    }

    sources.forEach(function (src) {
      loadImage(src, function () {
        var slide = document.createElement("div");
        slide.className = "hero-slide";
        slide.style.backgroundImage = "url('" + src + "')";
        holder.appendChild(slide);
        slides.push(slide);
        hero.classList.add("has-photo");

        if (slides.length === 1) show(0);
        if (slides.length === 2) {
          dots = document.createElement("div");
          dots.className = "hero-dots";
          hero.appendChild(dots);
        }
        if (dots) {
          var dot = document.createElement("button");
          dot.setAttribute("aria-label", "Foto " + slides.length);
          var idx = slides.length - 1;
          dot.addEventListener("click", function () { show(idx); });
          if (slides.length === 2) {
            // el punto de la primera foto aparece recién cuando hay dos
            var first = document.createElement("button");
            first.setAttribute("aria-label", "Foto 1");
            first.addEventListener("click", function () { show(0); });
            dots.appendChild(first);
          }
          dots.appendChild(dot);
          show(current);
        }
        start();
      });
    });
  });

  // ---------- Galería: muestra solo las fotos que existen ----------
  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = "<img alt=''>";
  document.body.appendChild(lightbox);
  lightbox.addEventListener("click", function () { lightbox.classList.remove("open"); });

  document.querySelectorAll(".photo[data-src]").forEach(function (box) {
    var src = box.dataset.src;
    loadImage(src, function () {
      box.style.backgroundImage = "url('" + src + "')";
      box.classList.add("has-img");
      box.addEventListener("click", function () {
        lightbox.firstChild.src = src;
        lightbox.classList.add("open");
      });
    });
  });

  // ---------- Aparición suave al hacer scroll ----------
  var items = document.querySelectorAll(".card, .news-item, .timeline li, .photo, .stats > div");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
});
