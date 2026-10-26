(function () {
  var ids = ["about", "publications", "scholar", "cv", "contact"];
  var panels = ids.map(function (id) { return document.getElementById(id); });
  var links = document.querySelectorAll(".tabs a");
  document.documentElement.classList.add("js");

  function show() {
    var id = location.hash.replace("#", "");
    if (ids.indexOf(id) === -1) id = "about";
    panels.forEach(function (p) { p.hidden = p.id !== id; });
    links.forEach(function (a) {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var label = document.querySelector('.tabs a[href="#' + id + '"]').textContent;
    document.title = label + " | Aiysha Varraich";
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", show);
  show();
})();
