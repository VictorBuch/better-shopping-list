<script>
	import { shoppingItems, tickedShoppingItems } from '../stores//shoppingItem';
	import { get } from 'svelte/store';
	import autoAnimate from '@formkit/auto-animate';

	let newItem;

	function addNewItem() {
		shoppingItems.update((items) => [...items, newItem.toLowerCase()]);
		newItem = '';
	}

	function removeItem(index) {
		const filterdItems = get(shoppingItems).filter((item, i) => i !== index);
		shoppingItems.set(filterdItems);
	}

	function removeTickedItem(index) {
		const filterdItems = get(tickedShoppingItems).filter((item, i) => i !== index);
		tickedShoppingItems.set(filterdItems);
	}

	function tickItem(index) {
		if (get(tickedShoppingItems).includes(get(shoppingItems)[index])) {
			removeItem(index);
		} else {
			tickedShoppingItems.update((items) => [...items, get(shoppingItems)[index]]);
			const filtered = get(shoppingItems).filter((item, i) => i !== index);
			shoppingItems.set(filtered);
		}
	}

	function untickItem(index) {
		shoppingItems.update((items) => [...items, get(tickedShoppingItems)[index]]);
		const filtered = get(tickedShoppingItems).filter((item, i) => i !== index);
		tickedShoppingItems.set(filtered);
	}
</script>

<main class="flex flex-col py-6">
	<h1 class="text-2xl font-bold px-6 pt-6 text-blue">Shopping List</h1>
	<form on:submit|preventDefault={addNewItem} class="w-full flex pt-6 items-center justify-center">
		<input
			bind:value={newItem}
			type="text"
			placeholder="Add items"
			class="input w-full mx-6 placeholder-blue ring-blue border border-blue"
		/>
	</form>

	<!-- <hr class="my-6 border border-blue" /> -->

	<ul class="px-6 pt-12" use:autoAnimate>
		{#each $shoppingItems as item, index}
			<li class="flex items-center justify-between text-neutral-content py-4 w-full">
				<span>{item}</span>
				<div class="flex items-center space-x-6">
					<svg
						on:click={() => tickItem(index)}
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					<svg
						on:click={() => removeItem(index)}
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</div>
			</li>
		{:else}{/each}
	</ul>
	<ul class="px-6" use:autoAnimate>
		{#each $tickedShoppingItems as item, index}
			<li class="flex items-center justify-between text-neutral-content py-4 w-full">
				<span class="line-through">{item}</span>
				<div class="flex items-center space-x-6">
					<svg
						on:click={() => untickItem(index)}
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
					</svg>
					<svg
						on:click={() => removeTickedItem(index)}
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</div>
			</li>
		{:else}{/each}
	</ul>
</main>

<style>
	span,
	svg {
		@apply text-flamingo;
	}
</style>
