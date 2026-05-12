/// <reference types="vite/client" />

declare module '*.module.scss' {
	const classes: Readonly<Record<string, string>>;
	export default classes;
}

declare module '*.module.sass' {
	const classes: Readonly<Record<string, string>>;
	export default classes;
}
