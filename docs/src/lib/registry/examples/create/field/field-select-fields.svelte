<script lang="ts">
	import Example from "../../../../../routes/(app)/(layout)/(create)/components/example.svelte";
	import * as Field from "$lib/registry/ui/field/index.js";
	import * as Select from "$lib/registry/ui/select/index.js";

	const basicItems = [
		{ label: "Option 1", value: "option1" },
		{ label: "Option 2", value: "option2" },
		{ label: "Option 3", value: "option3" },
	];
	const countryItems = [
		{ label: "United States", value: "us" },
		{ label: "United Kingdom", value: "uk" },
		{ label: "Canada", value: "ca" },
	];
	const timezoneItems = [
		{ label: "UTC", value: "utc" },
		{ label: "Eastern Time", value: "est" },
		{ label: "Pacific Time", value: "pst" },
	];
	const invalidItems = [
		{ label: "Option 1", value: "option1" },
		{ label: "Option 2", value: "option2" },
		{ label: "Option 3", value: "option3" },
	];
	const disabledItems = [
		{ label: "Option 1", value: "option1" },
		{ label: "Option 2", value: "option2" },
		{ label: "Option 3", value: "option3" },
	];

	let basicValue = $state<string | undefined>(undefined);
	let countryValue = $state<string | undefined>(undefined);
	let timezoneValue = $state<string | undefined>(undefined);
	let invalidValue = $state<string | undefined>(undefined);
	let disabledValue = $state<string | undefined>(undefined);
</script>

<Example title="Select Fields">
	<Field.Group>
		<Field.Field>
			<Field.Label for="select-basic">Basic Select</Field.Label>
			<Select.Root type="single" bind:value={basicValue}>
				<Select.Trigger id="select-basic">
					<Select.Value placeholder="Choose an option" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each basicItems as item (item.value)}
							<Select.Item value={item.value} label={item.label}
								>{item.label}</Select.Item
							>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</Field.Field>
		<Field.Field>
			<Field.Label for="select-country">Country</Field.Label>
			<Select.Root type="single" bind:value={countryValue}>
				<Select.Trigger id="select-country">
					<Select.Value placeholder="Select your country" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each countryItems as item (item.value)}
							<Select.Item value={item.value} label={item.label}
								>{item.label}</Select.Item
							>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
			<Field.Description>Select the country where you currently reside.</Field.Description>
		</Field.Field>
		<Field.Field>
			<Field.Label for="select-timezone">Timezone</Field.Label>
			<Field.Description
				>Choose your local timezone for accurate scheduling.</Field.Description
			>
			<Select.Root type="single" bind:value={timezoneValue}>
				<Select.Trigger id="select-timezone">
					<Select.Value placeholder="Select timezone" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each timezoneItems as item (item.value)}
							<Select.Item value={item.value} label={item.label}
								>{item.label}</Select.Item
							>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</Field.Field>
		<Field.Field data-invalid>
			<Field.Label for="select-invalid">Invalid Select</Field.Label>
			<Select.Root type="single" bind:value={invalidValue}>
				<Select.Trigger id="select-invalid" aria-invalid>
					<Select.Value placeholder="This field has an error" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each invalidItems as item (item.value)}
							<Select.Item value={item.value} label={item.label}
								>{item.label}</Select.Item
							>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
			<Field.Description>This field contains validation errors.</Field.Description>
		</Field.Field>
		<Field.Field data-disabled>
			<Field.Label for="select-disabled-field">Disabled Field</Field.Label>
			<Select.Root type="single" bind:value={disabledValue} disabled>
				<Select.Trigger id="select-disabled-field">
					<Select.Value placeholder="Cannot select" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each disabledItems as item (item.value)}
							<Select.Item value={item.value} label={item.label}
								>{item.label}</Select.Item
							>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
			<Field.Description>This field is currently disabled.</Field.Description>
		</Field.Field>
	</Field.Group>
</Example>
