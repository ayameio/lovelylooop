import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<div>
			<nav className="gap-4 flex flex-row justify-center py-4">
				<a className="relative text-sm" href="/artwork">
					Artwork
				</a>
				<a className="relative text-sm" href="/about">
					About
				</a>
			</nav>
		</div>
	)
}