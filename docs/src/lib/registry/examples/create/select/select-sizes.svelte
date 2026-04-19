<script lang="ts">
	import Example from "../../../../../routes/(app)/(layout)/(create)/components/example.svelte";
	import * as Select from "$lib/registry/ui/select/index.js";

	const items = [
		{ label: "Apple", value: "apple" },
		{ label: "Banana", value: "banana" },
		{ label: "Blueberry", value: "blueberry" },
	];

	let selectedValueSm = $state<string | undefined>(undefined);
	let selectedValueDefault = $state<string | undefined>(undefined);
</script>

<Example title="Sizes">
	<div class="flex flex-col gap-4">
		<Select.Root type="single" bind:value={selectedValueSm}>
			<Select.Trigger size="sm">
				<Select.Value placeholder="Small size" />
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
		<Select.Root type="single" bind:value={selectedValueDefault}>
			<Select.Trigger size="default">
				<Select.Value placeholder="Default size" />
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
	</div>
</Example>
