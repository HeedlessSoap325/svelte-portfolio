<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Footer from '$lib/components/Footer.svelte';
    import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/shared.css">
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<Nav></Nav>

<main>
	{@render children()}
</main>

<Footer></Footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>