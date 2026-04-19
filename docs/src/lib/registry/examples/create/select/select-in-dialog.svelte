<script lang="ts">
	import Example from "../../../../../routes/(app)/(layout)/(create)/components/example.svelte";
	import * as Select from "$lib/registry/ui/select/index.js";
	import * as Dialog from "$lib/registry/ui/dialog/index.js";
	import * as Button from "$lib/registry/ui/button/index.js";

	const items = [
		{ label: "Apple", value: "apple" },
		{ label: "Banana", value: "banana" },
		{ label: "Blueberry", value: "blueberry" },
		{ label: "Grapes", value: "grapes" },
		{ label: "Pineapple", value: "pineapple" },
	];

	let selectedValue = $state<string | undefined>(undefined);
</script>

<Example title="In Dialog">
	<Dialog.Root>
		<Dialog.Trigger>
			{#snippet child({ props })}
				<Button.Root variant="outline" {...props}>Open Dialog</Button.Root>
			{/snippet}
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Select Example</Dialog.Title>
				<Dialog.Description>Use the select below to choose a fruit.</Dialog.Description>
			</Dialog.Header>
			<Select.Root type="single" bind:value={selectedValue}>
				<Select.Trigger>
					<Select.Value placeholder="Select a fruit" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each items as item (item.value)}
							<Select.Item value={item.value} label={item.label}
								>{item.label}</Select.Item
							>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</Dialog.Content>
	</Dialog.Root>
</Example>
