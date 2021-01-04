<script>
  import { onMount, onDestroy } from 'svelte';

  /**
   * @example
   * <Tab tabId="one" tabList={tabList} />
   */

  export let tabId;
  export let tabList;

  $: isSelected = tabList.selectedTab === tabId;

  onMount(() => {
    tabList.registerTab(tabId);
  });
  
  onDestroy(() => {
    tabList.unregisterTab(tabId);
  });

  const handleTabSelect = () => {
    tabList.onTabSelect(tabId);
  };
</script>

<li>
  <button 
    type="button" 
    class="tab" 
    class:tab__selected="{isSelected}" 
    on:click|preventDefault={handleTabSelect}
  >
    <slot></slot>
  </button>
</li>

<style>
  li {
    display: inline;
    list-style-type: none;
  }

  .tab {
    background-color: rgba(22, 22, 22, 0);
    border-bottom: none;
    border-top: none;
  }

  .tab__selected {
    color: rgb(95, 25, 7);
  }
</style>