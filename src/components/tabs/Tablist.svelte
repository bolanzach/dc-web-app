<script>
  /**
   * @example
   * <TabList onSelectTab={onSelectTab} let:tabList={tabList}>
   *    <Tab tabId="firstTab" tabList={tabList}>First Tab</Tab>
   *    <Tab tabId="secondTab" tabList={tabList}>Second Tab</Tab>
   * </TabList>
   */

  // callback for when a tab is selected
  export let onSelectTab;

  const registeredTabs = new Set();

  // API that should only be used by a Tab
  const tabList = {
    selectedTab: undefined,

    registerTab(tab) {
      registeredTabs.add(tab);
      
      if (!this.selectedTab) {
        setCurrentTab(tab);
        return true
      }

      return false;
    },

    unregisterTab(tab) {
      registeredTabs.delete(tab);
      if (this.selectedTab == tab) {
        this.selectedTab = registeredTabs[0];
      }
    },

    onTabSelect(tab) {
      if (tab === this.selectedTab) {
        return;
      }

      setCurrentTab(tab);
      
      if (onSelectTab) {
        onSelectTab(tab);
      }
    }
  }

  const setCurrentTab = (tab) => tabList.selectedTab = tab;
</script>

<ul>
  <slot tabList={tabList}></slot>
</ul>

<style>
  ul {
    display: inline;
    padding-inline-start: 0;
  }
</style>