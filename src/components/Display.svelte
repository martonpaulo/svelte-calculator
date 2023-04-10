<script lang="ts">
  export let value: string;

  $: fontSize = "big";

  $: if (value.length < 8) {
    fontSize = "big";
  } else if (value.length < 13) {
    fontSize = "big-medium";
  } else if (value.length < 18) {
    fontSize = "medium";
  } else if (value.length < 23) {
    fontSize = "medium-small";
  } else {
    fontSize = "small";
  }
</script>

<div class={`display ${fontSize}`}>
  <span>
    {value}
  </span>
</div>

<style>
  .display {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0.5rem;

    color: var(--text-color);
    font-size: 4rem;

    overflow: hidden;
  }

  .big-medium { font-size: 2.5rem; }
  .medium { font-size: 1.75rem; }
  .medium-small { font-size: 1.4rem; }
  .small { font-size: 1rem; }
</style>
