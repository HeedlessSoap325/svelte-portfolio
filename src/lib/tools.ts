enum ToolType {
	HOSTING,
	FRAMEWORKS,
	DATABASE,
	CICD,
	MISC,
}

interface Skill {
	name: string,
	familiarity: number,
}

interface Tool {
	href: string,
	name: string,
}

export const skills: Skill[] = [
	{
		name: "TypeScript / JavaScript",
		familiarity: 9
	},
	{
		name: "HTML / CSS",
		familiarity: 8
	},
	{
		name: "React",
		familiarity: 8
	},
	{
		name: "Svelte",
		familiarity: 6
	},
	{
		name: "Angular",
		familiarity: 5
	},
	{
		name: "Java",
		familiarity: 7
	},
	{
		name: "Python",
		familiarity: 6
	},
	{
		name: "C / C#",
		familiarity: 3
	},
	{
		name: "Rust",
		familiarity: 2
	},
	{
		name: "DevOps / Cloud",
		familiarity: 3
	},
];

export const toolTypes: Record<ToolType, string> = {
	[ToolType.HOSTING] : "Hosting / SaaS",
	[ToolType.FRAMEWORKS] : "Frameworks, Platforms & Libraries",
	[ToolType.DATABASE] : "Database / ORM",
	[ToolType.CICD] : "CI / CD",
	[ToolType.MISC] : "Other",
}

export const tools: Map<ToolType, Tool[]> = new Map([
	[ToolType.HOSTING, [
		{
			name: "AWS",
			href: "https://aws.amazon.com/"
		},
		{
			name: "Cloaudflare",
			href: "https://TODO/"
		},
		{
			name: "Netlify",
			href: "https://TODO/"
		},
	]],
	[ToolType.FRAMEWORKS, [
		{
			name: "Anaconda",
			href: "https://TODO/"
		},
		{
			name: "Angular",
			href: "https://TODO/"
		},
		{
			name: "Bootstrap",
			href: "https://TODO/"
		},
		{
			name: "Express.js",
			href: "https://TODO/"
		},
		{
			name: "Fastify",
			href: "https://TODO/"
		},
		{
			name: "JWT",
			href: "https://TODO/"
		},
		{
			name: "MUI",
			href: "https://TODO/"
		},
		{
			name: "NPM",
			href: "https://TODO/"
		},
		{
			name: "Next JS",
			href: "https://TODO/"
		},
		{
			name: "Node.js",
			href: "https://TODO/"
		},
		{
			name: "Nodemon",
			href: "https://TODO/"
		},
		{
			name: "React",
			href: "https://TODO/"
		},
		{
			name: "React Router",
			href: "https://TODO/"
		},
		{
			name: "Redux",
			href: "https://TODO/"
		},
		{
			name: "Socket.io",
			href: "https://TODO/"
		},
		{
			name: "Spring",
			href: "https://TODO/"
		},
		{
			name: "Svelte",
			href: "https://TODO/"
		},
		{
			name: "SvelteKit",
			href: "https://TODO/"
		},
		{
			name: "Vite",
			href: "https://TODO/"
		},
	]],
	[ToolType.DATABASE, [
		{
			name: "MariaDB",
			href: "https://TODO/"
		},
		{
			name: "MongoDB",
			href: "https://TODO/"
		},
		{
			name: "MySQL",
			href: "https://TODO/"
		},
		{
			name: "Postgres",
			href: "https://TODO/"
		},
	]],
	[ToolType.CICD, [
		{
			name: "GitHub Actions",
			href: "https://TODO/"
		},
		{
			name: "Git",
			href: "https://TODO/"
		},
		{
			name: "GitHub",
			href: "https://TODO/"
		},
	]],
	[ToolType.MISC, [
		{
			name: "Arduino",
			href: "https://TODO/"
		},
		{
			name: "Bitwarden",
			href: "https://TODO/"
		},
		{
			name: "Make",
			href: "https://TODO/"
		},
		{
			name: "Docker",
			href: "https://TODO/"
		},
		{
			name: "ESLint",
			href: "https://TODO/"
		},
		{
			name: "Gradle",
			href: "https://TODO/"
		},
		{
			name: "Postman",
			href: "https://TODO/"
		},
		{
			name: "Raspberry PI",
			href: "https://TODO/"
		},
		{
			name: "Swagger",
			href: "https://TODO/"
		},
		{
			name: "Wireguard",
			href: "https://TODO/"
		},
		{
			name: "Unity",
			href: "https://TODO/"
		},
	]],
]);