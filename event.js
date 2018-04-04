export function triggerEvent(eventType, element) {
  var event = document.createEvent("HTMLEvents");
  event.initEvent(eventType, true, false);
  element.dispatchEvent(event);
}
