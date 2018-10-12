(function addCssLink(cssId, href) {
  if (!document.getElementById(cssId)) {
    var head = document.head;
    var link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    link.media = "all";
    head.appendChild(link);
  }
})("dynamically-loaded-main-dfds-font", "https://unpkg.com/@kunukn/dfds-fonts/fonts/main/font.css");
