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
	let selectedValueInvalid = $state<string | undefined>(undefined);
</script>

<Example title="Invalid">
	<div class="flex flex-col gap-4">
		<Select.Root type="single" bind:value={selectedValue}>
			<Select.Trigger aria-invalid="true">
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
		<Field.Field data-invalid>
			<Field.Label for="select-fruit-invalid">Favorite Fruit</Field.Label>
			<Select.Root type="single" bind:value={selectedValueInvalid}>
				<Select.Trigger id="select-fruit-invalid" aria-invalid>
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
			<Field.Error errors={[{ message: "Please select a valid fruit." }]} />
		</Field.Field>
	</div>
</Example>
