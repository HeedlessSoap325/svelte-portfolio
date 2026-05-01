import type { PathnameWithSearchOrHash } from '$app/types';
import type { RouteIdWithSearchOrHash } from '$app/types';

export interface Path {
	name: string,
	href: RouteIdWithSearchOrHash | PathnameWithSearchOrHash,
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