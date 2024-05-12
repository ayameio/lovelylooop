import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { fredoka, nunito_sans, quando } from "@/app/fonts"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Navbar from "@/components/navbar";
import Head from "next/head";
import About from "@/components/about";
import CollectionInfo from "@/components/collectionInfo";
import Future from "./future";
import Showcase from "./showcase";
import AnotherNavbar from "@/components/anothernavbar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Home() {
	return (
		<main className="flex flex-col space-y-16 bg-violet max-w-full pb-16 text-sm">
			<AnotherNavbar></AnotherNavbar>
			<div className="flex justify-center">
				<img src="/donut-logo-svg.svg" alt="" width={"768px"} height={"768px"} />
			</div>
			<About></About>

			<div id="maomao-about">
				<div className="flex flex-col justify-center items-center gap-8">
					<div className='max-w-4xl w-3/4 space-y-6'>
						<h1 className="text-7xl font-bold text-white drop-shadow-md text-stroke-1">maomao</h1>
					</div>
					<div className="rounded-lg inset-0 bg-[url('/sc-middle.png')] bg-cover bg-center bg-no-repeat w-3/4 max-w-4xl h-32 drop-shadow-md" />
					<div className='max-w-4xl w-3/4 space-y-6 text-white'>
						maomao is an innovative WEB3 game. It’s hybrid of Farmville, Auto Battle, Tycoon, Turn-based strategy and Tower Defense.

						With dedicated development since late 2023, maomao is now nearing completion, with a test realm release scheduled for this summer.

						This game is the lovelylooop’s first flagship product and has the biggest priority.
						However, many mini-games will be continuously released on Telegram gaming platform to bring as much exposure to our brand.

						Learn more about the game in the Docs page.
					</div>
				</div>
			</div>
			<div id="maomao-originals-nft">
				<div className="flex flex-col justify-center items-center gap-8">
					<div className='max-w-4xl w-3/4 space-y-6'>
						<h1 className="text-7xl font-bold text-white drop-shadow-md text-stroke-1">maomao Originals NFT</h1>
					</div>
					<div className="flex flex-row justify-evenly gap-8 max-w-4xl w-3/4">
						<div id="about-maomao-originals-nft" className="flex flex-col w-1/2 gap-5 text-white">
							<p id="description">
								maomao Originals is the animated (and most important) collection made by lovelylooop and it's the first 888 items in maomao.
								It consists of Wearables, Consumables, Keys, Loot Boxes, Gemstones, Goods and Materials. Each of these types of items have their own purpose, functionality, rarity and attributes.
							</p>
							<h2 className={`${fredoka.className} text-lg text-left font-bold`}>Utility</h2>
							<div className="flex flex-row flex-wrap justify-left gap-2">
								<Badge>Giftbox Airdrops</Badge>
								<Badge>Early Access</Badge>
								<Badge>Starter Loot</Badge>
								<Badge>Revenue Sharing</Badge>
								<Badge>Incentivized Test Realm</Badge>
								<Badge>Free Mint Future Collections</Badge>
							</div>
							<h2 className={`${fredoka.className} text-lg text-left font-bold`}>Mint Details</h2>
							<div className="flex flex-row flex-wrap justify-left gap-2">
								<Badge>May 2?th, 2024</Badge>
								<Badge>888</Badge>
								<Badge>0.88 SOL</Badge>
								<Badge>4.4%</Badge>
							</div>
						</div>
						<img src="/artboard-1.png" alt="" className="rounded-lg w-1/2 drop-shadow-md" />
					</div>
				</div>
			</div>
			<div id="nft-showcase" className="flex justify-center">
				<div className="flex flex-row justify-between max-w-4xl w-3/4">
					<img src="/artboard-1.png" alt="" className="rounded-lg size-32 drop-shadow-md" />
					<img src="/artboard-13.png" alt="" className="rounded-lg size-32 drop-shadow-md" />
					<img src="/artboard-3.png" alt="" className="rounded-lg size-32 drop-shadow-md" />
					<img src="/artboard-4.png" alt="" className="rounded-lg size-32 drop-shadow-md" />
					<img src="/artboard-2.png" alt="" className="rounded-lg size-32 drop-shadow-md" />
				</div>
			</div>
			<div id="year-ahead-schedule">
				<div className="flex flex-col justify-center items-center gap-8 text-white">
					<div className='max-w-4xl w-3/4 space-y-6'>
						<h1 className="text-7xl font-bold text-stroke-1 drop-shadow-md">A year ahead schedule</h1>
						<div id="mint-maomao-originals">
							<h3 className="text-2xl font-bold">Mint maomao Originals</h3>
							<p>The first stepping stone in making lovelylooop successful, is to sell out maomao Originals. This will ensure development progress throughout whole 2024.</p>
						</div>
						<div id="launch-token">
							<h3 className="text-2xl font-bold">Token Launch</h3>
							<p>Airdrop 80% of total supply to community. 25% of mint proceeds will go to token liquidity pool, including future collections.</p>
						</div>
						<div id="season-one">
							<h3 className="text-2xl font-bold">Finalize Season 1 Development</h3>
							<p>There’s still a bit of work to do on Season 1. However it’s only minor things like fixing audio, particle effects and combining individual game components in an organized manner.</p>
						</div>
						<div id="test-realm">
							<h3 className="text-2xl font-bold">Incentivized Test Realm Release</h3>
							<p>After finalizing development, we’ll release the Incentivized Test Realm for holders of maomao Originals, and second testing phase to the public.</p>
						</div>
						<div id="maomao-avatars">
							<h3 className="text-2xl font-bold">Creation of maomao Avatars</h3>
							<p>While the testing phase is running, we’ll be actively working on maomao Avatars collection.</p>
						</div>
						<div id="web2-web3-release">
							<h3 className="text-2xl font-bold">Release maomao for WEB2 and WEB3 + maomao Avatars Mint</h3>
						</div>
						<div id="season-two">
							<h3 className="text-2xl font-bold">Build Season 2</h3>
						</div>
						<div id="maomao-pets">
							<h3 className="text-2xl font-bold">Creation of maomao Pets</h3>
						</div>
						<div id="marketing">
							<h3 className="text-2xl font-bold">Marketing / Partnerships / New Content Development</h3>
						</div>
						<div id="subdomains">
							<h3 className="text-2xl font-bold">Build games.lovelylooop.xyz and store.lovelylooop.xyz subdomains</h3>
						</div>
					</div>
				</div>
			</div>
			<div id="join-our-community">
				<div className="flex flex-col justify-center items-center gap-8 text-white">
					<div className='max-w-4xl w-3/4 space-y-6'>
						<h1 className="text-7xl font-bold  drop-shadow-md text-stroke-1">Join our community!</h1>
						<p>We are a Telegram community and we have three Telegram channels for public announcements, community and holders.
							I give zero fux about Discord. It’s a trash, slow, overrated app and I don’t like it at all. Sorry, not sorry.</p>
					</div>
					<div id="telegram-container" className="flex flex-row gap-8 text-xs">
						<div id="telegram-item-yellow" className="flex flex-col gap-2 text-white font-bold justify-center hover:text-yellow duration-100">
							<a href="https://t.me/lovelylooopCommunity" target="_blank">
								<img src="/donut-logo-yellow.png" alt="" className="border-2 border-black size-16 rounded-xl drop-shadow-md" />
							</a>
							<p className="text-center">Community</p>
						</div>
						<div id="telegram-item-violet" className="flex flex-col gap-2 text-white font-bold justify-center hover:text-yellow duration-100">
							<a href="https://t.me/lovelylooop" target="_blank">
								<img src="/donut-logo-violet.png" alt="" className="border-2 border-black size-16 rounded-xl drop-shadow-md" />
							</a>
							<p className="text-center">Holders</p>
						</div>
						<div id="telegram-item-white" className="flex flex-col gap-2 text-white font-bold justify-center hover:text-yellow duration-100">
							<a href="https://t.me/lovelylooop" target="_blank">
								<img src="/donut-logo-white.png" alt="" className="border-2 border-black size-16 rounded-xl drop-shadow-md" />
							</a>
							<p className="text-center">Announcer</p>
						</div>
						<div id="twitter" className="flex flex-col gap-2 text-white font-bold justify-center hover:text-yellow duration-100">
							<a href="https://x.com/lovelylooop" target="_blank">
								<img src="/donut-logo-black.png" alt="" className="border-2 border-black size-16 rounded-xl drop-shadow-md" />
							</a>
							<p className="text-center">X/Twitter</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
