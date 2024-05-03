import { Badge } from "@/components/ui/badge"
import { nunito_sans, quando } from "@/app/fonts"

export default function Future() {
	return (
		<div className='max-w-4xl w-3/4 space-y-6'>
			<div className="flex flex-col gap-2 justify-left items-center md:flex-row">
				<div className="size-4 bg-violet rounded-full min-w-4 min-h-4 border-2 border-black"></div>
				<div className="size-4 bg-blue rounded-full min-w-4 min-h-4 border-2 border-black"></div>
				<div className="size-4 bg-yellow rounded-full min-w-4 min-h-4 border-2 border-black"></div>
				<h1 className="text-4xl font-bold text-center">So, what&apos;s coming in the nearest future?</h1>
			</div>
			<ul className="list-disc justify-center list-inside">
				<li>Mint maomao Originals</li>
				<li>Finalize maomao Season 1 development (98% done)</li>
				<li>Launch the $LOVELYLOOOP token (25% of mint proceeds go to LP, 80% of token supply will be airdropped)</li>
				<li>Release of maomao Test Realm</li>
				<li>Create a PFP Collection</li>
				<li>Release of maomao for Web2 and Web3</li>
				<li>Build maomao Season 2 (25% done)</li>
				<li>Create a Pets Collection</li>
				<li>Marketing and new content</li>
				<li>Build games.lovelylooop.xyz subdomain for hosting Web2 and Web3 games</li>
			</ul>
		</div>
	)
}