import { rubik } from "@/app/fonts"
import AnotherNavbar from "@/components/anothernavbar"
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export default function Future() {
	return (
		<main className="h-full flex flex-col bg-cream max-w-full text-sm">
			<AnotherNavbar></AnotherNavbar>
			<div className='max-w-4xl w-3/4 space-y-6 py-16 flex flex-col justify-center self-center gap-8'>
				<h1 className={`${rubik.className} text-center text-xl text-black`}>What is the future of lovelylooop</h1>
				<div className="gap-2 flex flex-col justify-center">
					<p className={`${rubik.className}`}>1. Mint maomao Originals</p>
					<p className={`${rubik.className}`}>2. Launch our community token $LOV</p>
					<p className={`${rubik.className}`}>3. Sequentially deploy monetized mini-games to Telegram Gaming Platform</p>
					<p className={`${rubik.className}`}>4. Build a super strong community and presence on social media</p>
					<p className={`${rubik.className}`}>5. Mint Looopies (coming sooon)</p>
					<p className={`${rubik.className}`}>6. Brand marketing and establishing partnerships</p>
					<p className={`${rubik.className}`}>7. Build a lovelylooop store for digital and physical products</p>
				</div>
			</div>
		</main>
	)
}