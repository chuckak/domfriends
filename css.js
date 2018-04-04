export function css(styles, element) {
  if (typeof styles === "object") {
    setCss(styles, element);
  } else {
    getCss(styles, element);
  }
}

function getCss(styleProperty, element) {
  var elementStyles = [];
  if (window.getComputedStyle) {
    elementStyles = getComputedStyle(element, null);
  } else {
    elementStyles = element.currentStyle;
  }
  return elementStyles[styleProperty];
}

function setCss(styles, element) {
  for (var property in styles) {
    element.style[property] = styles[property];
  }
}
