<script lang="ts">
	import Example from "../../../../../routes/(app)/(layout)/(create)/components/example.svelte";
	import * as Input from "$lib/registry/ui/input/index.js";
	import * as Select from "$lib/registry/ui/select/index.js";

	const currencyItems = [
		{ label: "USD", value: "usd" },
		{ label: "EUR", value: "eur" },
		{ label: "GBP", value: "gbp" },
	];

	let currency = $state(currencyItems[0].value);
</script>

<Example title="With Select">
	<div class="flex w-full gap-2">
		<Input.Root type="text" placeholder="Enter amount" class="flex-1" />
		<Select.Root type="single" bind:value={currency}>
			<Select.Trigger class="w-32">
				<Select.Value placeholder="USD" />
			</Select.Trigger>
			<Select.Content>
				<Select.Item value="usd" label="USD">USD</Select.Item>
				<Select.Item value="eur" label="EUR">EUR</Select.Item>
				<Select.Item value="gbp" label="GBP">GBP</Select.Item>
			</Select.Content>
		</Select.Root>
	</div>
</Example>
