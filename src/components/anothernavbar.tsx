import { Button } from "./ui/button";

export default function AnotherNavbar() {
	return (
		<header className="relative w-full">
			<div className="absolute inset-0 bg-[url('/sc-middle.png')] bg-cover bg-center bg-no-repeat"/>
			<div className="container mx-auto flex h-20 items-center justify-center px-4 md:px-6">
				<nav className="rounded-lg bg-white/10 backdrop-blur-md px-6 py-3 shadow-lg dark:bg-gray-950/80 flex items-center gap-6 text-black">
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/mint">
						Mint
					</a>
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/mintlist">
						Mintlist Checker
					</a>
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">
						Collections
					</a>
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="https://ayameio.github.io/maomao-docs" target="_blank">
						Docs
					</a>
				</nav>
			</div>
		</header>
	)
}