<script>
	import Tablist from '../tabs/Tablist';
	import Tab from '../tabs/Tab';

	export let onSelectTab;
</script>

<section class="tablist">
	<Tablist onSelectTab={onSelectTab} let:tabList={tabList}>
		<Tab tabId="weapons" tabList={tabList} class="tab">
			WEAPONS
		</Tab>
		<Tab tabId="armor" tabList={tabList} class="tab">
			ARMOR
		</Tab>
	</Tablist>
</section>

<style>
	.tablist :global(.tab) {
		color: yellow;
	}
</style>