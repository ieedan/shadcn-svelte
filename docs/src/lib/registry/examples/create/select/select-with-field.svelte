<script lang="ts">
	import Example from "../../../../../routes/(app)/(layout)/(create)/components/example.svelte";
	import * as Select from "$lib/registry/ui/select/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";

	const items = [
		{ label: "Apple", value: "apple" },
		{ label: "Banana", value: "banana" },
		{ label: "Blueberry", value: "blueberry" },
		{ label: "Grapes", value: "grapes" },
		{ label: "Pineapple", value: "pineapple" },
	];

	let selectedValue = $state<string | undefined>(undefined);
</script>

<Example title="With Field">
	<Field.Field>
		<Field.Label for="select-fruit">Favorite Fruit</Field.Label>
		<Select.Root type="single" bind:value={selectedValue}>
			<Select.Trigger id="select-fruit">
				<Select.Value placeholder="Select a fruit" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					{#each items as item (item.value)}
						<Select.Item value={item.value} label={item.label}>{item.label}</Select.Item
						>
					{/each}
				</Select.Group>
			</Select.Content>
		</Select.Root>
		<Field.Description>Choose your favorite fruit from the list.</Field.Description>
	</Field.Field>
</Example>
