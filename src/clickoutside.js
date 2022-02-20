// get elements
let allElements = document.querySelectorAll("*");
allElements = Array.from(allElements);
// list the elements have clickoutside event
let elementsHaveClickoutsideEvent = [];
allElements.forEach((element) => {
  let clickEvent = element.getEventListeners().clickoutside;
  if (clickEvent) {
    elementsHaveClickoutsideEvent.push(element);
  }
});
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
