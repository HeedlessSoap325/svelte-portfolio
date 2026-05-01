<script>
    import { skills, tools, toolTypes } from "$lib/tools";
</script>

<div id="content">
	<div class="header">
		<h2 class="title">Who I am.</h2>
		<p class="desc">A developer obsessed with the details that make software feel good.</p>
	</div>
	
	<div class="grid">
		<div class="bio">
			<div class="bio-name">HeedlessSoap325</div>
			<p>I'm a full-stack developer with a passion for building websites and other projects that just work.</p>
			<p>When I'm not writing code, I'm exploring open-source projects and learning new skills & tools that help me improve my projects even more.</p>
		</div>
		
		<div class="skills-card">
			<div class="skills-title">// Core skills</div>
			{#each skills as skill (skill.name)}
				<div class="skill-item">
					<div class="skill-row">
						<span class="skill-name">{skill.name}</span>
						<span class="skill-pct">{skill.familiarity} / 10</span>
					</div>
					<div class="skill-bar"><div class="skill-fill" style={`--w: ${skill.familiarity * 10}%`}></div></div>
				</div>
			{/each}
		</div>
		
		<div class="tools-card">
			{#each tools.keys() as type (type)}
				<div class="skills-title">// {toolTypes[type]}</div>
				<div class="tools-list">
					{#each tools.get(type) as tool (tool.name)}
						<a href={tool.href} rel="external" target="_blank" class="tool-tag">{tool.name}</a>
					{/each}
				</div>
			{/each}	
		</div>
	</div>
</div>	

<style>
	#content {
		padding: 1.5rem 3rem 1rem;
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

	.grid {
		max-width: 860px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.bio {
		grid-column: 1 / -1;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 2.5rem;
		position: relative;
		overflow: hidden;
	}

	.bio::before {
		content: '';
		position: absolute;
		top: 0; left: 0; right: 0;
		height: 2px;
		background: var(--accent);
	}

	.bio p {
		font-size: 0.875rem;
		color: var(--muted);
		line-height: 1.9;
		max-width: 640px;
	}

	.bio p + p { margin-top: 1rem; }

	.bio-name {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.3rem;
		color: var(--text);
		margin-bottom: 1rem;
	}

	.skills-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 2rem;
	}

	.skills-title {
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 1rem;
		margin-top: 1.5rem;
	}

	.skills-title:first-of-type {
		margin-top: 0;
	}

	.skill-item {
		margin-bottom: 1.2rem;
	}

	.skill-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.4rem;
	}

	.skill-name {
		font-size: 0.8rem;
		color: var(--text);
	}

	.skill-pct {
		font-size: 0.7rem;
		color: var(--muted);
	}

	.skill-bar {
		height: 2px;
		background: var(--border);
		border-radius: 1px;
		overflow: hidden;
	}

	.skill-fill {
		height: 100%;
		background: var(--accent);
		border-radius: 1px;
		width: 0;
		transition: width 1s ease 0.3s;
	}

	.skill-fill { 
		width: var(--w); 
	}

	.tools-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 2rem;
	}

	.tools-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	.tool-tag {
		padding: 0.35rem 0.8rem;
		background: rgba(255,255,255,0.04);
		border: 1px solid var(--border);
		border-radius: 3px;
		font-size: 0.72rem;
		color: var(--muted);
		transition: all 0.2s;
		text-decoration: none;
		text-transform: uppercase;
	}

	.tool-tag:hover {
		color: var(--accent);
		border-color: var(--accent);
		background: rgba(0,229,160,0.05);
	}

	@media (max-width: 640px) {
		#content { 
			padding-left: 1.5rem; 
			padding-right: 1.5rem; 
		}

		.header {
			margin-bottom: 2rem;
		}

		.title, .desc {
			text-align: center;
		}

		.grid { 
			grid-template-columns: 1fr; 
		}

		.bio { 
			grid-column: auto; 
		}
	}
</style>