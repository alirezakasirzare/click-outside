// get elements
let allElements = document.querySelectorAll("*");
allElements = Array.from(allElements);
// list the elements have clickoutside event
let elementsHaveClickoutsideEvent = [];
allElements.forEach((element) => {
  let clickEvent = element.getEventListeners().clickoutside;
  if (clickEvent) {
    let doingFunctions = [];
    element.getEventListeners().clickoutside?.forEach((e) => {
      doingFunctions.push(e.listener);
    });
    const newItem = { element: element, functions: doingFunctions };
    elementsHaveClickoutsideEvent.push(newItem);
  }
});
