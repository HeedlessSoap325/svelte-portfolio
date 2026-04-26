import { page } from '$app/state';

export interface Path {
	name: string,
	href: typeof page.url.pathname,
};

export const paths: Path[] = [
	{
		name: "home",
		href: "/",
	},
	{
		name: "about",
		href: "/about",
	},
	{
		name: "projects",
		href: "/projects",
	},
	{
		name: "contact",
		href: "/contact",
	},
];