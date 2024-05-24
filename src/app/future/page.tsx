import { rubik } from "@/app/fonts"
import AnotherNavbar from "@/components/anothernavbar"

export default function Future() {
	return (
		<main className="h-full flex flex-col bg-cream max-w-full text-sm">
			<AnotherNavbar></AnotherNavbar>
			<div className='max-w-4xl w-3/4 space-y-6 py-16 flex flex-col justify-center self-center gap-8'>
				<h1 className={`${rubik.className} text-center text-xl text-black`}>So what are the plans, you might be asking?</h1>
				<ul className={`${rubik.className} list-disc`}>
					<li>Mint maomao Originals</li>
					<li>Launch $LOV Token (Distribution 70/20/10 (Minters/Treasury/Public)</li>
					<li>Sequentially deploy fragments of maomao</li>
					<li>Build a super strong community</li>
					<li>Mint Looopies, which are playable characters in maomao games</li>
					<li>Brand marketing and establishing partnerships</li>
					<li>Build the lovelylooop digital and physical merchandise store</li>
				</ul>
			</div>
		</main>
	)
}