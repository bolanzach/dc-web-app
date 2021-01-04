<script context="module">
	export function preload() {

    return {
			equipment: {
				weapons: [
					{ name: 'EXECUTIONER'},
					{ name: 'DOOM'},
				],
				armor: [
					{ name: 'jack'},
					{ name: 'jill'},
				],
			},
    };
	}
</script>

<script>
	import EquipmentNavbar from '../components/equipment/Navbar'
	import LeftRail from '../components/equipment/LeftRail';

	export let equipment;

	let leftRailItems = equipment.weapons || [];

	const onSelectTab = (tab) => {
		console.log(tab);

		leftRailItems = equipment[tab] || [];
	};

	const onEquipmentItemSelect = (item) => {
		console.log(item);
	}
</script>

<div>
	<EquipmentNavbar onSelectTab={onSelectTab} />
	<div class="layout">
		<LeftRail items={leftRailItems} onItemSelect={onEquipmentItemSelect} />
		<slot></slot>
	</div>
</div>

<style>
	.layout {
		display: flex;
	}
</style>