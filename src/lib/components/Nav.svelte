<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div>
<nav>
	<a href={resolve("/")} class="nav-logo">heedlesssoap<span class="dot">.</span>dev</a>
	<ul class="nav-links">
		<li> <a href={resolve("/")} class="active">home</a>	</li>
		<li> <a href={resolve("/about")}>about</a>			</li>
		<li> <a href={resolve("/projects")}>projects</a>	</li>
		<li> <a href={resolve("/contact")}>contact</a>		</li>
	</ul>
</nav>
</div>

<style>
	nav {
		z-index: 100;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.2rem 2rem;
		border-bottom: 1px solid var(--border);
		background: rgba(8, 11, 15, 0.85);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
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
</style>