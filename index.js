function addCssLink(props) {
    var p = props || {};
    var id = p.cssId || "dynamically-loaded-dfds-font";
    var href = p.href || "https://unpkg.com/@dfds-frontend/fonts/main/font.css";

    if (!document.getElementById(id)) {
				var head = document.head;
				var link = document.createElement("link");
				link.id = id;
				link.rel = "stylesheet";
				link.type = "text/css";
				link.href = href;
				link.media = "all";
				head.appendChild(link);
		}
}

module.exports = addCssLink;
