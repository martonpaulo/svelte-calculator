<script lang="ts">
  export let text: string;
  export let double: boolean = false;
  export let triple: boolean = false;
  export let secondary: boolean = false;
  export let tertiary: boolean = false;
  export let onClick: (value: string) => void = () => {};
</script>

<button
  class="button"
  on:click={() => onClick(text)}
  class:double
  class:triple
  class:secondary
  class:tertiary
>
  {text}
</button>

<style>
  .button {
    background-color: var(--primary-button-color);
    color: var(--text-color);
    cursor: pointer;

    border: none;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 10%;

    font-size: 2rem;
    margin: 0.2rem 0;
  }

  .double {
    width: 9.5rem;
    border-radius: 0.5rem;
  }

  .triple {
    width: 14.5rem;
    border-radius: 0.5rem;
  }

  .secondary {
    background-color: var(--secondary-button-color);
    color: var(--background-color);
  }

  .tertiary {
    background-color: var(--tertiary-button-color);
  }
</style>
