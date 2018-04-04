export function hasClass(className, element) {
  if (element.classList) {
    return element.classList.contains(className);
  }
  return new RegExp("\\b" + className + "\\b").test(element.className);
}

export function addClass(className, element) {
  if (element.classList) {
    element.classList.add(className);
  } else if (!hasClass(element, className)) {
    element.className += " " + className;
  }
}

export function removeClass(className, element) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp("\\b" + className + "\\b", "g"),
      ""
    );
  }
}

export function toggleClass(className, element) {
  if (!hasClass(className, element)) {
    addClass(className, element);
  } else {
    removeClass(className, element);
  }
}
