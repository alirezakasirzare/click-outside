// list the elements have clickoutside event
let elementsHaveClickoutsideEvent = [];
// save the original methods before overwriting them
Element.prototype._addEventListener = Element.prototype.addEventListener;

Element.prototype.addEventListener = function (
  type,
  listener,
  useCapture = false
) {
  // declare listener
  this._addEventListener(type, listener, useCapture);
  if (type == "clickoutside" && !elementsHaveClickoutsideEvent.includes(this)) {
    elementsHaveClickoutsideEvent.push(this);
  }
};

// create the clickoutside event
const clickoutsideEvent = new CustomEvent("clickoutside");
// target the event
document.addEventListener("click", (e) => {
  elementsHaveClickoutsideEvent.forEach((element) => {
    let isClickInsideElement = element.contains(e.target);
    if (!isClickInsideElement) {
      element.dispatchEvent(clickoutsideEvent);
    }
  });
});
