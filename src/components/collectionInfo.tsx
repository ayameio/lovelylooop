import { Badge } from "@/components/ui/badge"

export default function CollectionInfo() {
	return (
		<div className="flex justify-center items-center">
			<div className="max-w-4xl w-3/4 space-y-6">
				<h1 className="text-4xl font-bold text-center">What's maomao Originals?</h1>
				<p className="text-gray-700">
					maomao Originals is an animated collection of first 888 items in the game. It consists of Wearables, Consumables, Keys, Loot Boxes, Gemstones, Goods and Materials. Each of these types of items have their own purpose, functionality, rarity and attributes.
				</p>
				<h2 className="text-xl font-bold text-left">Purpose</h2>
				<p className="text-gray-700">
					Launch lovelylooop. Create beautiful products. Make all dreams come true. Give back to community tenfold.
				</p>
				<h2 className="text-xl font-bold text-left">Mint Details</h2>
				<div className="flex flex-row justify-left space-x-6">
					<Badge variant="outline">May 20th, 2024</Badge>
					<Badge>888</Badge>
					<Badge>0.88 SOL</Badge>
				</div>
			</div>
		</div>
	)
}