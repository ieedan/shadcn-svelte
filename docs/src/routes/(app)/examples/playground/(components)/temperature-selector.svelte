<script lang="ts">
	import type { Slider as SliderPrimitive } from "bits-ui";
	import * as HoverCard from "$lib/registry/ui/hover-card/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import { Slider } from "$lib/registry/ui/slider/index.js";

	let { value = $bindable(), ...restProps }: SliderPrimitive.RootProps = $props();
</script>

<div class="grid gap-2 pt-2">
	<HoverCard.Root openDelay={200} closeDelay={100}>
		<HoverCard.Trigger>
			{#snippet child({ props })}
				<div class="grid gap-4" {...props}>
					<div class="flex items-center justify-between">
						<Label for="temperature">Temperature</Label>
						<span
							class="text-muted-foreground hover:border-border w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm"
						>
							{value}
						</span>
					</div>
					<Slider
						id="temperature"
						max={1}
						bind:value={value as never}
						step={0.1}
						class="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
						aria-label="Temperature"
						{...restProps}
					/>
				</div>
			{/snippet}
		</HoverCard.Trigger>
		<HoverCard.Content class="w-[260px] text-sm" align="start" side="left">
			Controls randomness: lowering results in less random completions. As the temperature
			approaches zero, the model will become deterministic and repetitive.
		</HoverCard.Content>
	</HoverCard.Root>
</div>
