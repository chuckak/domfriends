export function getParent(element, filter) {
  if (!filter) {
    return element.parentNode;
  } else if (filter(element)) {
    return element;
  }
  return getParent(element.parentNode, filter);
}
