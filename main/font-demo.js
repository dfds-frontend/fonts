(function addCssLink(cssId, href) {
  if (!document.getElementById(cssId)) {
    var head = document.head;
    var link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    link.media = "all";

    var css = '* { font-family: DFDS, sans-serif !important; }';
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    head.appendChild(link);
    head.appendChild(style);
  }
})("dynamically-loaded-main-dfds-font", "https://unpkg.com/@dfds-frontend/fonts/main/font.css");
