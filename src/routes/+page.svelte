<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="home-content">
	<h1 class="home-title">
		<span class="accent">Heedless</span><br>
		<span class="white">Soap<span class="stroke">325</span></span>
	</h1>
	<p class="home-subtitle">
		Hi! I'm a Full-stack developer & am learning low level languages!<br>
		On this Page you can find everything about what I do.
	</p>
	<div class="home-actions">
		<a href={resolve("/projects")} class="btn btn-accent">View Projects</a>
		<a href={resolve("/contact")}  class="btn btn-stroke">Get in touch</a>
	</div>
</div>

<style>
	.home-content {
		display: flex;
		flex-direction: column;
		max-width: fit-content;
		margin: 0 auto;
		width: 100%;
	}

	.home-title {
		font-family: var(--display);
		font-weight: 800;
		font-size: clamp(2.3rem, 8vw, 6rem);
		line-height: 0.95;
		letter-spacing: -0.04em;
		margin-bottom: 1.5rem;
	}

	.home-title .stroke {
		color: transparent;
		-webkit-text-stroke: 1px rgba(255,255,255,0.25);
	}

	.home-title .accent { 
		color: var(--accent);
	}

	.home-subtitle {
		font-size: 0.9rem;
		color: var(--muted);
		max-width: 450px;
		line-height: 1.8;
		margin-bottom: 3rem;
	}

	.home-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.75rem;
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.2s;
		border: none;
	}

	.btn-accent {
		background: var(--accent);
		color: var(--bg);
		font-weight: 700;
	}

	.btn-accent:hover {
		background: #00ffb3;
		transform: translateY(-2px);
		box-shadow: 0 3px 10px rgba(0,229,160,0.25);
	}

	.btn-stroke {
		background: transparent;
		color: var(--muted);
		border: 1px solid var(--border);
	}

	.btn-stroke:hover {
		color: var(--text);
		border-color: rgba(255,255,255,0.2);
		transform: translateY(-2px);
	}
</style>