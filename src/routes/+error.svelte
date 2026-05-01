<script lang="ts">
	import {page} from "$app/state";
</script>

<div class="content">
	<div class="header">
		<h2 class="error">{page.status}{page.error ? ` - ${page.error.message}` : ""}</h2>
		<p class="text">Well, this probably isn't what you expected...</p>
	</div>
  
	<div class="hints">
		<p class="hint">Please check if you have entered the URL correctly.</p>
		<p class="hint">This page may be under maintenance, so try again in a few minutes.</p>
		<p class="hint">If the issue persists, you can email <a class="mail" href="mailto:me@heedlesssoap.dev">me@heedlesssoap.dev</a> to let me know.</p>
	</div>
</div>

<style>
	.content {
		padding: 1.5rem 3rem 1rem;
	}

	.header {
		max-width: 860px;
		margin: 0 auto 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.error {
		font-family: var(--display);
		font-weight: 800;
		font-size: clamp(2rem, 5vw, 3.5rem);
		letter-spacing: -0.03em;
		line-height: 1;
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.text {
		font-size: 0.875rem;
		color: var(--muted);
		max-width: 480px;
		line-height: 1.8;
		text-align: center;
	}

	.hints {
		margin: 0 auto;
		width: fit-content;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hint {
		color: var(--muted);
		font-size: 1rem;
		text-align: center;
	}

	.mail {
		text-decoration: none;
		color: var(--accent);
	}
</style>