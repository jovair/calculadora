class calcController {
  constructor() {
    this._operation = [];
    this._displayCalcEl = document.querySelector("#display");
    this.initButtonsEvents();
    this.initialize();
  }
  initialize() {
    this.setLastNumberToDisplay();
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
    this.setLastNumberToDisplay();
  }

  clearEntry() {
    this._operation.pop();
    this.setLastNumberToDisplay();
  }

  getLastOperation() {
    return this._operation[this._operation.length - 1];
  }
  setLastOperation(value) {
    this._operation[this._operation.length - 1] = value;
  }

  isOperator(value) {
    return ["+", "-", "/", "*", "%", "√", "x²"].indexOf(value) > -1;
  }

  pushOperation(value) {
    this._operation.push(value);
    if (this._operation.length > 3) {
      this.calc();
    }
  }

  calc() {
    let last = "";
    if (this._operation.length > 3) {
      last = this._operation.pop();
    }
    let result = eval(this._operation.join(""));
    if (last == "%") {
      result /= 100;
      this._operation = [result];
    } else {
      this._operation = [result];
    }
    this.setLastNumberToDisplay();
  }

  setLastNumberToDisplay() {
    let lastNumber;
    for (let i = this._operation.length - 1; i >= 0; i--) {
      if (!this.isOperator(this._operation[i])) {
        lastNumber = this._operation[i];
        break;
      }
    }
    if (!lastNumber) lastNumber = 0;
    this.displayCalc = lastNumber;
  }

  addOperation(value) {
    if (isNaN(this.getLastOperation())) {
      if (this.isOperator(value)) {
        this.setLastOperation(value);
      } else if (isNaN(value)) {
        console.log("outra coisa");
      } else {
        this.pushOperation(value);
        this.setLastNumberToDisplay();
      }
    } else {
      if (this.isOperator(value)) {
        this.pushOperation(value);
      } else {
        let newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(parseInt(newValue));
        this.setLastNumberToDisplay();
      }
    }
  }

  execBtn(btnText) {
    switch (btnText) {
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
        this.addOperation(",");
        break;
      case "=":
        this.calc();
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
        this.addOperation(parseInt(btnText));
        break;
      case "%":
        this.addOperation("%");
        break;
      case "√":
        this.addOperation("√");
        break;
      case "x²":
        this.addOperation("x²");
        break;
      case "¹/x":
        this.addOperation("¹/x");
        break;
      case "÷":
        this.addOperation("/");
        break;
      case "x":
        this.addOperation("*");
        break;
      case "-":
        this.addOperation("-");
        break;
      case "+":
        this.addOperation("+");
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
        let btnText = btn.innerHTML;
        this.execBtn(btnText);
      });
    });
  }
}
