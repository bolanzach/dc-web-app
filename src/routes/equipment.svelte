<script context="module">
	import getWeapons from "../utils/proxy/getWeapons";

	export async function preload() {
		const weapons = await getWeapons();

		return {
			equipment: {
				weapons: [{ name: "EXECUTIONER" }, { name: "asd" }],
				armor: [{ name: "jack" }, { name: "jill" }],
			},
			weapons,
		};
	}
</script>

<script>
	import EquipmentNavbar from "../components/equipment/Navbar";
	import LeftRail from "../components/equipment/LeftRail";
	import { onMount } from "svelte";

	export let equipment;
	export let weapons;

	console.log(weapons);

	let leftRailItems = equipment.weapons || [];

	const onSelectTab = (tab) => {
		console.log(tab);

		leftRailItems = equipment[tab] || [];
	};

	const onEquipmentItemSelect = (item) => {
		console.log(item);
	};
</script>

<style>
	.layout {
		display: flex;
	}
</style>

<div>
	<EquipmentNavbar {onSelectTab} />
	<div class="layout">
		<LeftRail items={leftRailItems} onItemSelect={onEquipmentItemSelect} />
		<slot />
	</div>
</div>
