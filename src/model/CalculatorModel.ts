const CLEAR_DISPLAY = true;
const DO_NOT_CLEAR_DISPLAY = false;

export default class CalculatorModel {
  #value: string;
  #accumulator: number;
  #operation: string;
  #clearDisplay: boolean;

  constructor(
    value: string = null,
    accumulator: number = null,
    operation: string = null,
    clearDisplay = false
  ) {
    this.#value = value;
    this.#accumulator = accumulator;
    this.#operation = operation;
    this.#clearDisplay = clearDisplay;
  }

  get value() {
    return this.#value || "0";
  }

  pressedNumber(newValue: string) {
    let resultValue: string;

    if (this.value === "0" || this.#clearDisplay || !this.#value) {
      resultValue = newValue;
    } else {
      resultValue = this.#value + newValue;
    }

    return new CalculatorModel(
      resultValue,
      this.#accumulator,
      this.#operation,
      DO_NOT_CLEAR_DISPLAY
    );
  }

  pressedDecimal() {
    return new CalculatorModel(
      this.#value?.includes(".") ? this.#value : this.#value + ".",
      this.#accumulator,
      this.#operation,
      DO_NOT_CLEAR_DISPLAY
    );
  }

  pressedClear() {
    return new CalculatorModel();
  }

  pressedOperation(nextOperation: string) {
    return this.calculate(nextOperation);
  }

  calculate(nextOperation: string = null) {
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);
    const resultValue = !this.#operation ? this.#value : `${accumulator}`;

    return new CalculatorModel(
      resultValue,
      accumulator,
      nextOperation,
      nextOperation ? CLEAR_DISPLAY : DO_NOT_CLEAR_DISPLAY
    );
  }
}
