<script lang="ts">
  import CalculatorModel from "../model/CalculatorModel";
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Row from "./Row.svelte";

  let calc = new CalculatorModel();

  const pressedNumber = (num: string) => (calc = calc.pressedNumber(num));
	const pressedOperation = (op: string) => (calc = calc.pressedOperation(op));
	const pressedDecimal = () => (calc = calc.pressedDecimal());
	const pressedClear = () => (calc = calc.pressedClear());
	const calculate = () => (calc = calc.calculate());
</script>

<div class="calculator">
  <Display value={calc.value} />
  <Row>
    <Button triple secondary text="AC" onClick={pressedClear} />
    <Button tertiary text="/" onClick={pressedOperation} />
  </Row>
  <Row>
    <Button text="7" onClick={pressedNumber} />
    <Button text="8" onClick={pressedNumber} />
    <Button text="9" onClick={pressedNumber} />
    <Button tertiary text="*" onClick={pressedOperation} />
  </Row>
  <Row>
    <Button text="4" onClick={pressedNumber} />
    <Button text="5" onClick={pressedNumber} />
    <Button text="6" onClick={pressedNumber} />
    <Button tertiary text="-" onClick={pressedOperation} />
  </Row>
  <Row>
    <Button text="1" onClick={pressedNumber} />
    <Button text="2" onClick={pressedNumber} />
    <Button text="3" onClick={pressedNumber} />
    <Button tertiary text="+" onClick={pressedOperation} />
  </Row>
  <Row>
    <Button double text="0" onClick={pressedNumber} />
    <Button text="." onClick={pressedDecimal} />
    <Button tertiary text="=" onClick={calculate} />
  </Row>
</div>

<style>
  .calculator {
    background-color: var(--background-color);
    height: 32rem;
    width: 20rem;

    display: flex;
    flex-direction: column;

    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 0.4rem rgba(255, 255, 255, 0.15);
  }
</style>
