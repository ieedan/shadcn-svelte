<script lang="ts">
	import Example from "../../../../../routes/(app)/(layout)/(create)/components/example.svelte";
	import * as Input from "$lib/registry/ui/input/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import * as Button from "$lib/registry/ui/button/index.js";
	import * as Select from "$lib/registry/ui/select/index.js";

	const countryItems = [
		{ label: "United States", value: "us" },
		{ label: "United Kingdom", value: "uk" },
		{ label: "Canada", value: "ca" },
	];

	let country = $state(countryItems[0].value);
</script>

<Example title="Form">
	<form class="w-full">
		<Field.Group>
			<Field.Field>
				<Field.Label for="form-name">Name</Field.Label>
				<Input.Root id="form-name" type="text" placeholder="John Doe" />
			</Field.Field>
			<Field.Field>
				<Field.Label for="form-email">Email</Field.Label>
				<Input.Root id="form-email" type="email" placeholder="john@example.com" />
				<Field.Description>We'll never share your email with anyone.</Field.Description>
			</Field.Field>
			<div class="grid grid-cols-2 gap-4">
				<Field.Field>
					<Field.Label for="form-phone">Phone</Field.Label>
					<Input.Root id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
				</Field.Field>
				<Field.Field>
					<Field.Label for="form-country">Country</Field.Label>
					<Select.Root type="single" bind:value={country}>
						<Select.Trigger id="form-country">
							<Select.Value placeholder="United States" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="us" label="United States">United States</Select.Item
							>
							<Select.Item value="uk" label="United Kingdom"
								>United Kingdom</Select.Item
							>
							<Select.Item value="ca" label="Canada">Canada</Select.Item>
						</Select.Content>
					</Select.Root>
				</Field.Field>
			</div>
			<Field.Field>
				<Field.Label for="form-address">Address</Field.Label>
				<Input.Root id="form-address" type="text" placeholder="123 Main St" />
			</Field.Field>
			<Field.Field orientation="horizontal">
				<Button.Root type="button" variant="outline">Cancel</Button.Root>
				<Button.Root type="submit">Submit</Button.Root>
			</Field.Field>
		</Field.Group>
	</form>
</Example>
