<script>
    import DiscordSVG from "$lib/assets/DiscordSVG.svelte";
    import GitHubSVG from "$lib/assets/GitHubSVG.svelte";

</script>
<div class="content">
	<div class="header">
		<h2 class="title fade-up">Let's talk.</h2>
		<p class="desc fade-up">Have a project in mind? I'd love to hear about it.</p>
	</div>
  
	<div class="contact-info">
		<div class="desc" style="color: var(--muted);">
			Whether you want to build something together, ask a question, or just chat — my inbox is always open.
		</div>
		<div class="contact-links">
			<a href="mailto:me@heedlesssoap.dev" target="_blank" class="contact-link">
				<div class="contact-link-icon">✉</div>
				me@heedlesssoap.dev
			</a>
			<a href="https://www.github.com/HeedlessSoap325" target="_blank" class="contact-link">
				<div class="contact-link-icon"><GitHubSVG width="25px" height="25px" color="var(--muted)"></GitHubSVG></div>
				github.com/HeedlessSoap325
			</a>
			<a href="https://www.linkedin.com/in/heedlessSoap325" target="_blank" class="contact-link">
				<div class="contact-link-icon">in</div>
				linkedin.com/in/heedlessSoap325
			</a>
			<a href="https://discord.com/users/811664195518857236" target="_blank" class="contact-link">
				<div class="contact-link-icon"><DiscordSVG width="25px" height="25px" color="var(--muted)"></DiscordSVG></div>
				@HeedlessSoap325
			</a>
		</div>
	</div>
</div>

<style>
	.content {
		display: flex;
		padding: 3rem 3rem 1rem;
		flex-direction: column;
	}

	.header {
		max-width: 860px;
		margin: 0 auto 2rem;
	}

	.title {
		font-family: var(--display);
		font-weight: 800;
		font-size: clamp(2rem, 5vw, 3.5rem);
		letter-spacing: -0.03em;
		line-height: 1;
		margin-bottom: 1.5rem;
	}

	.desc {
		font-size: 0.875rem;
		color: var(--muted);
		max-width: 480px;
		line-height: 1.8;
		text-align: center;
	}

	.contact-info {
		position: sticky;
		top: 6rem;
		max-width: fit-content;
		margin: 0 auto;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.contact-links {
		margin-top: 2.5rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		text-decoration: none;
		color: var(--muted);
		font-size: 0.8rem;
		transition: color 0.2s;
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--border);
	}

	.contact-link:hover { 
		color: var(--accent); 
	}

	.contact-link-icon {
		width: 32px;
		height: 32px;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
		transition: border-color 0.2s;
		flex-shrink: 0;
	}

	.contact-link:hover .contact-link-icon {
		border-color: var(--accent);
		background: rgba(0,229,160,0.06);
	}

	@media (max-width: 640px) {
    	.content { 
			padding-left: 1.5rem; 
			padding-right: 1.5rem; 
		}

		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.contact-links { 
			grid-template-columns: 1fr; 
		}
  }
</style>