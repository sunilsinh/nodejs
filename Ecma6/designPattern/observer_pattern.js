//There are many times when one part of the application changes, other parts needs to be updated.
//In AngularJS, if the $scope object updates, an event can be triggered to notify another component
// The observer pattern incorporates just that - if an object is modified it broadcasts to dependent
// objects that a change has occurred.

/*
Another prime example is the model-view-controller (MVC) architecture; The view updates when the model changes.
One benefit is decoupling the view from the model to reduce dependencies.
*/


class EventObserver {
  constructor() {
    this.observers = [];
    this.observers.name = "sunil singh";
  }
}
var objectObserver = new EventObserver();

console.log(objectObserver);
