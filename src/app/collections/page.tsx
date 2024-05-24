import { Badge } from "@/components/ui/badge";
import { rubik } from "@/app/fonts"
import AnotherNavbar from "@/components/anothernavbar";

export default function Collections() {
	return (
		<main className="flex flex-col bg-cream max-w-full text-sm">
			<AnotherNavbar></AnotherNavbar>
			<div className={`${rubik.className} max-w-4xl w-3/4 space-y-6 py-16 flex flex-col justify-center self-center`}>
				<h2 className={`${rubik.className} text-lg text-left font-bold`}>Non-animated showcase</h2>
				<div id="nft-showcase" className="flex justify-center">
					<div className="flex flex-wrap justify-between max-w-4xl overflow-auto gap-8 p-2">
						<img src="/2.png" alt="" className="rounded-lg size-48" />
						<img src="/10.png" alt="" className="rounded-lg size-48" />
						<img src="/11.png" alt="" className="rounded-lg size-48" />
						<img src="/12.png" alt="" className="rounded-lg size-48" />
						<img src="/13.png" alt="" className="rounded-lg size-48" />
						<img src="/14.png" alt="" className="rounded-lg size-48" />
						<img src="/15.png" alt="" className="rounded-lg size-48" />
						<img src="/16.png" alt="" className="rounded-lg size-48" />
					</div>
				</div>
				<p id="description">
					maomao Originals is the animated (and most important) collection made by lovelylooop and it&apos;s the first 888 items in maomao ecosystem.
					It consists of Wearables, Consumables, Keys, Loot Boxes, Gemstones, Goods and Materials. Each of these types of items have their own purpose, functionality, rarity and attributes.
				</p>
				<p>
					The collection was supposed to launch on Solana, however I must admit that launching on TON will be much better for the future.
				</p>
				<h2 className={`${rubik.className} text-lg text-left font-bold`}>Utility</h2>
				<div className="flex flex-row flex-wrap justify-left gap-2">
					<Badge>Surprise Airdrops</Badge>
					<Badge>Revenue Sharing</Badge>
					<Badge>Incentivized Test Access</Badge>
					<Badge>Free Mint Looopies!</Badge>
				</div>
				<h2 className={`${rubik.className} text-lg text-left font-bold`}>Mint Details</h2>
				<div className="flex flex-row flex-wrap justify-left gap-2">
					<Badge>May/June, 2024</Badge>
					<Badge>888</Badge>
					<Badge className="gap-2">
						<p>20 TON</p>
						<img className="size-4" src="ton_symbol.svg" alt="" />
					</Badge>
					<Badge>4.4%</Badge>
				</div>
			</div>
		</main>
	)
}