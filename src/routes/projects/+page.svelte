<div class="content">
	<div class="header">
		<h2 class="title">Projects.</h2>
		<p class="desc">A selection of my most recent Projects.</p>
		<p class="desc">To see all my Projects, even the unfinished ones, head to my <a class="github" href="https://www.github.com/HeedlessSoap325/?tab=repositories" target="_blank">GitHub</a>.</p>
	</div>
  
	<div class="projects-grid">
		<a href="#" class="project-card featured">
			<div class="project-arrow">&nearr;</div>
			<div class="project-name">Test Project</div>
			<div class="project-desc">Test Project Description</div>
			<div class="project-tags">
				<span class="project-tag">Tag 1</span>
				<span class="project-tag">Tag 2</span>
				<span class="project-tag">Tag 3</span>
				<span class="project-tag">Tag 4</span>
			</div>
		</a>

		<a href="#" class="project-card">
			<div class="project-arrow">&nearr;</div>
			<div class="project-name">Test Project 2</div>
			<div class="project-desc">Test Project 2 Description</div>
			<div class="project-tags">
				<span class="project-tag">Tag 1</span>
				<span class="project-tag">Tag 2</span>
				<span class="project-tag">Tag 3</span>
			</div>
		</a>

		<a href="#" class="project-card">
			<div class="project-arrow">&nearr;</div>
			<div class="project-name">Test Project 3</div>
			<div class="project-desc">Test Project 3 Description</div>
			<div class="project-tags">
				<span class="project-tag">Tag 1</span>
				<span class="project-tag">Tag 2</span>
				<span class="project-tag">Tag 3</span>
				<span class="project-tag">Tag 4</span>
				<span class="project-tag">Tag 5</span>
				<span class="project-tag">Tag 6</span>
				<span class="project-tag">Tag 7</span>
				<span class="project-tag">Tag 8</span>
			</div>
		</a>
	</div>
</div>

<style>
	.content {
		padding: 1.5rem 3rem 5rem;
	}

	.header {
		max-width: 860px;
		margin: 0 auto 4rem;
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
	}

	.github {
		text-decoration: none;
		color: var(--accent);
	}

	.projects-grid {
		max-width: 860px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.project-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 2rem;
		position: relative;
		overflow: hidden;
		cursor: pointer;
		transition: border-color 0.3s, transform 0.3s;
		text-decoration: none;
		display: block;
	}

	.project-card:hover {
		border-color: rgba(0,229,160,0.3);
		transform: translateY(-4px);
	}

	.project-card:hover .project-arrow {
		opacity: 1;
		transform: translate(2px, -2px);
	}

	.project-card.featured {
		grid-column: 1 / -1;
	}

	.project-card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(0,229,160,0.05) 0%, transparent 60%);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
	}

	.project-card:hover::after { 
		opacity: 1; 
	}

	.project-name {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.3rem;
		color: var(--text);
		letter-spacing: -0.02em;
		margin-bottom: 0.75rem;
	}

	.project-card.featured .project-name { 
		font-size: 1.7rem; 
	}

	.project-desc {
		font-size: 0.8rem;
		color: var(--muted);
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.project-tag {
		padding: 0.25rem 0.6rem;
		background: rgba(0,229,160,0.08);
		border: 1px solid rgba(0,229,160,0.2);
		border-radius: 2px;
		font-size: 0.65rem;
		color: var(--accent);
		letter-spacing: 0.05em;
	}

	.project-arrow {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		width: 20px;
		height: 20px;
		color: var(--accent);
		opacity: 0;
		transition: opacity 0.2s, transform 0.2s;
		font-size: 1.2rem;
	}
</style>