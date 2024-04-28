import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<div className="bg-white py-2">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center">
				<a className={"flex flex-row items-center font-bold"}href="/">
					<img src="/lll.png" width={"64px"} height={"64px"}></img>
					<p>lovelylooop</p>
				</a>
				<nav className="hidden md:flex space-x-8 flex-row justify-center">
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">
						Mint
					</a>
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">
						Collections
					</a>
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="https://ayameio.github.io/maomao-docs" target="_blank">
						Docs
					</a>
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="https://discord.com/invite/pZ2jYXU2Us" target="_blank">
						Discord
					</a>
					<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="https://t.me/maomaoAnnouncer" target="_blank">
						Telegram
					</a>
				</nav>
				<Button className="border-2 flex items-center space-x-2 text-white hover:bg-black font-bold py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black hover:border-2 border-black">
					<span>Connect</span>
				</Button>
			</div>
		</div>
	)
}