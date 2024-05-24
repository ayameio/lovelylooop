import Link from "next/link";
import { Button } from "./ui/button";

import { rubik } from "@/app/fonts"

export default function AnotherNavbar() {
	return (
		<header className={`${rubik.className} text-lg text-left font-medium relative w-full`}>
			<div className="container mx-auto flex h-20 items-center justify-center px-4 md:px-6">
				<nav className="flex items-center gap-6 text-black">
					<a className="relative text-sm font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/">
						Home
					</a>
					<a className="relative text-sm font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/about">
						About
					</a>
					<a className="relative text-sm font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/collections">
						Collections
					</a>
					<a className="relative text-sm font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/future">
						Future
					</a>
				</nav>
			</div>
		</header>
	)
}