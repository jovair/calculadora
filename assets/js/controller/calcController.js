class calcController {
  constructor() {
    this._displayCalcEl = document.querySelector("#display");
    this._btnNumber;
    this.initButtonsEvents();
    this._groupButtons;
  }
  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    if (value.toString().length > 11) {
      this.setError();
      return false;
    }
    this._displayCalcEl.innerHTML = value;
  }

  setError() {
    this.displayCalc = "Error";
  }

  addEventListenerAll(element, events, fn) {
    events.split(" ").forEach((event) => {
      element.addEventListener(event, fn, false);
    });
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, "click drag", (e) => {
        let textBtn = btn.innerHTML.toString();
        this.displayCalc = textBtn;
      });
    });
  }
}
