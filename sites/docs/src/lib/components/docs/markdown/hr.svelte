<script lang="ts">
	import { type PrimitiveElementAttributes, cn } from "$lib/utils/utils.js";

	let { class: className, ...restProps }: PrimitiveElementAttributes = $props();
</script>

<hr class={cn("my-4 md:my-8", className)} {...restProps} />
