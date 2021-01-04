<script>
  export let items;
  export let onItemSelect;
</script>

<section class="left-rail">
  {#each items as item}
    <button class="item" on:click={onItemSelect(item)}>
      {item.name}
    </button>
  {/each}
</section>

<style>
	.left-rail {
    width: 200px;
    height: 100%;
    background-color: transparent;
    left: 0;
    color: rgb(223, 223, 223);
    padding: 12px 0;
  }

  .item {
    appearance: none;
    width: 100%;
    display: block;
    margin: 1em 0.5em;
    color: rgb(223, 223, 223);
    text-align: left;
    background-color: transparent;
    border: none;
    margin: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 18px;
    line-height: 1.7;
    font-weight: 300;
    padding: 12px 8px;
  }

  .item:hover {
    background-color:rgba(36, 36, 36, 0.555);
    cursor: pointer;
  }
</style>
