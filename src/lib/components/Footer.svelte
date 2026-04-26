<script lang="ts">
	const fromDate: number    = 2026;
	const currentYear: number = (new Date()).getFullYear();
	let dateString: string 	  = $state(`${fromDate}`);

	if (currentYear > fromDate) dateString = `${fromDate} - ${currentYear}`;
</script>

<footer>
    <span>&#169;{dateString} HeedlessSoap325</span>
    <span>View the <a href="https://www.github.com/HeedlessSoap325/portfolio" target="_blank" class="link">source</a></span>
</footer>

<style>
	footer {
		border-top: 1px solid var(--border);
		padding: 1.5rem 3rem;
		margin-inline: 3rem;
		margin-top: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--muted);
		font-size: 0.7rem;
		letter-spacing: 0.05em;
	}

	.link {
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--accent);
		text-decoration: none;
	}

	.link:hover {  
		border-bottom: 1px solid var(--accent);
	}

	@media (max-width: 640px) {
		footer { 
			flex-direction: column; 
			gap: 0.5rem; 
			text-align: center;
		}
	}
</style>