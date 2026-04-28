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
			href: "https://www.cloudflare.com"
		},
		{
			name: "Netlify",
			href: "https://www.netlify.com/"
		},
	]],
	[ToolType.FRAMEWORKS, [
		{
			name: "Anaconda",
			href: "https://www.anaconda.com/"
		},
		{
			name: "Angular",
			href: "https://angular.dev/"
		},
		{
			name: "Bootstrap",
			href: "https://getbootstrap.com/"
		},
		{
			name: "Express.js",
			href: "https://expressjs.com/"
		},
		{
			name: "Fastify",
			href: "https://fastify.dev/"
		},
		{
			name: "JWT",
			href: "https://www.jwt.io/"
		},
		{
			name: "MUI",
			href: "https://mui.com/"
		},
		{
			name: "NPM",
			href: "https://www.npmjs.com/"
		},
		{
			name: "Next JS",
			href: "https://nextjs.org/"
		},
		{
			name: "Node.js",
			href: "https://nodejs.org/"
		},
		{
			name: "Nodemon",
			href: "https://nodemon.io/"
		},
		{
			name: "React",
			href: "https://react.dev/"
		},
		{
			name: "React Router",
			href: "https://reactrouter.com/"
		},
		{
			name: "Redux",
			href: "https://redux.js.org/"
		},
		{
			name: "Socket.io",
			href: "https://socket.io/"
		},
		{
			name: "Spring (Boot)",
			href: "https://spring.io/"
		},
		{
			name: "Svelte",
			href: "https://svelte.dev/"
		},
		{
			name: "SvelteKit",
			href: "https://svelte.dev/docs/kit/introduction"
		},
		{
			name: "Vite",
			href: "https://vite.dev/"
		},
	]],
	[ToolType.DATABASE, [
		{
			name: "MariaDB",
			href: "https://mariadb.org/"
		},
		{
			name: "MongoDB",
			href: "https://www.mongodb.com/"
		},
		{
			name: "MySQL",
			href: "https://www.mysql.com/"
		},
		{
			name: "Postgres",
			href: "https://www.postgresql.org/"
		},
	]],
	[ToolType.CICD, [
		{
			name: "GitHub Actions",
			href: "https://github.com/features/actions"
		},
		{
			name: "Git",
			href: "https://git-scm.com/"
		},
		{
			name: "GitHub",
			href: "https://github.com/"
		},
	]],
	[ToolType.MISC, [
		{
			name: "Arduino",
			href: "https://www.arduino.cc/"
		},
		{
			name: "Bitwarden",
			href: "https://bitwarden.com/"
		},
		{
			name: "GNU Make",
			href: "https://www.gnu.org/software/make/"
		},
		{
			name: "Docker",
			href: "https://www.docker.com/"
		},
		{
			name: "ESLint",
			href: "https://eslint.org/"
		},
		{
			name: "Gradle",
			href: "https://gradle.org/"
		},
		{
			name: "Postman",
			href: "https://www.postman.com/"
		},
		{
			name: "Raspberry PI",
			href: "https://www.raspberrypi.com/"
		},
		{
			name: "Swagger",
			href: "https://swagger.io/"
		},
		{
			name: "Wireguard",
			href: "https://www.wireguard.com/"
		},
		{
			name: "Unity",
			href: "https://unity.com/"
		},
	]],
]);