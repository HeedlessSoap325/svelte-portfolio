<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
    import HamburgerMenuSVG from '$lib/assets/HamburgerMenuSVG.svelte';
    import { paths } from '$lib/path';

	let hamburgerMenuActive: boolean = $state(false);

	function onLinkClicked() {
		setTimeout(() => {
			hamburgerMenuActive = false;
		}, 250)
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<nav class:hamburger={hamburgerMenuActive}>
	<div class="navs">
		<div class="hamburger-menu" role="button" tabindex="0" onclick={() => {hamburgerMenuActive = !hamburgerMenuActive}}><HamburgerMenuSVG width="32px" height="32px" color="var(--accent)"></HamburgerMenuSVG></div>
		<a href={resolve("/")} class="nav-logo">heedlesssoap<span class="dot">.</span>dev</a>
	</div>
	<ul class="nav-links" class:hamburger={hamburgerMenuActive}>
		{#each paths as path (path.name)}
			<li> <a href={resolve(path.href)} onclick={onLinkClicked} class:active={page.url.pathname === path.href}>{path.name}</a> </li>	
		{/each}
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		width: 100dvw;
		z-index: 1000;
		height: var(--nav);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.2rem 2rem;
		border-bottom: 1px solid var(--border);
		background: rgba(8, 11, 15, 0.85);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
  	}

	.hamburger-menu {
		display: none;
	}

	.nav-logo {
		font-family: var(--display);
		font-weight: 800;
		font-size: 1.1rem;
		color: var(--text);
		text-decoration: none;
		letter-spacing: -0.02em;
	}

	.nav-logo .dot { 
		color: var(--accent); 
	}

	.nav-links {
		display: flex;
		gap: 2.5rem;
		list-style: none;
	}

	.nav-links a {
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted);
		text-decoration: none;
		transition: color 0.2s;
		position: relative;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 1px;
		background: var(--accent);
		transition: width 0.3s ease;
	}

	.nav-links a:hover, .nav-links a.active { 
		color: var(--accent); 
	}

	.nav-links a:hover::after, .nav-links a.active::after { 
		width: 100%; 
	}

	@media (max-width: 640px) {
		nav {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-inline: 0;
		}

		nav.hamburger {
			height: fit-content;
		}

		.navs {
			position: fixed;
			top: 1.2rem;
			height: 2rem;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			width: 100dvw;
		}

		.hamburger-menu {
			display: flex;
		}

		.nav-links {
			display: none;
		}

		.nav-links.hamburger {
			margin-top: 3rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>