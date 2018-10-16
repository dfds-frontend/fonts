# DFDS fonts

## main font from CDN

load the font by inluding this in html

```html
 <link rel="stylesheet"
       href="https://unpkg.com/@dfds-frontend/fonts/main/font.css">
```

or import it from css

```html
<style>
  @import "https://unpkg.com/@dfds-frontend/fonts/main/font.css";
</style>
```

or load it dynamically from javascript

```html
<script
  src="https://unpkg.com/@dfds-frontend/fonts/main/font.js">
</script>
```

apply the font in css

```css
body {
	font-family: DFDS, sans-serif;
}
.font-bold {
	font-weight: 700;
}
.font-thin {
	font-weight: 100;
}
.font-italic {
	font-style: italic;
}
```

use the font

```html
<p>this is a normal font</p>
<p class="font-bold">this is a bold font</p>
<p class="font-thin">this is a thin font</p>
<p class="font-italic">this is a italic style</p>
```

## main font from npm

-   npm install @dfds-frontend/fonts
-   the files are in node_modules/@dfds-frontend/fonts

load the font by inluding this in html

```html
<link rel="stylesheet"
      href="node_modules/@dfds-frontend/fonts/main/font.css">
```

## demo

-   https://codepen.io/kunukn/pen/63b15fbc49c236e54d2981ddbf3daf5b
-   https://codesandbox.io/s/p7oqjovn8m
-   https://codepen.io/kunukn/pen/f8e01e22b7a7c080fca0b31d5acfb1b6?editors=0010

## preload fonts

```html
 <link rel="preload"
       href="https://unpkg.com/@dfds-frontend/fonts/main/DFDS-Regular.woff2"
       as="font" type="font/woff2" crossorigin>

 <link rel="preload"
       href="https://unpkg.com/@dfds-frontend/fonts/main/DFDS-Bold.woff2"
       as="font" type="font/woff2" crossorigin>

<link rel="preload"
       href="https://unpkg.com/@dfds-frontend/fonts/main/DFDS-Light.woff2"
       as="font" type="font/woff2" crossorigin>

<link rel="preload"
       href="https://unpkg.com/@dfds-frontend/fonts/main/DFDS-Italic.woff2"
       as="font" type="font/woff2" crossorigin>
```

## more

To see all the available CDN files go to

https://unpkg.com/@dfds-frontend/fonts/
