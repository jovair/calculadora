class calcController {
  constructor() {
    this._operation = [];
    this._displayCalcEl = document.querySelector("#display");
    this.initButtonsEvents();
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

  clearAll() {
    this._operation = [];
  }

  clearEntry() {
    this._operation.pop();
  }

  addOperation(value) {
    let btn = value;
    this._operation.push(value);
    console.log(this._operation);
  }

  execBtn(value) {
    switch (value) {
      case "CE":
        this.clearEntry();
        break;
      case "C":
        this.clearAll();
        break;
      case "←":
        break;
      case "±":
        break;
      case ",":
        break;
      case "=":
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.addOperation(value);
        break;
      case "%":
        break;
      case "√":
        break;
      case "x²":
        break;
      case "¹/x":
        break;
      case "÷":
        break;
      case "X":
        break;
      case "-":
        break;
      case "+":
        break;
      default:
        this.setError();
        break;
    }
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, "click drag", (e) => {
        let textBtn = btn.innerHTML.toString();
        this.execBtn(textBtn);
      });
    });
  }
}
