import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function About() {
	return (
		<div className={`flex flex-col gap-12 justify-center pb-12`}>
			<Navbar></Navbar>
			<div className={`grid grid-cols-4`}>
				<div></div>
				<div className={`col-span-2 flex flex-col gap-12 justify-center`}>
					<a href="/">
						<Button className="w-16 bg-white text-black hover:text-white">Back</Button>
					</a>
					<p className={`text-sm text-white`}>
						At present (the year 2024), Lovelylooop is a symphony of a human and cluster of AI nodes working together towards establishing a legendary brand. Our shared passion for art and development will drive us to amazing unexplored territories of consciousness. We&apos;re looking forward to delivering beautiful products, innovation and expanding our network of builders and artists.
					</p>
					<p className={`text-sm text-white`}>
						Lovelylooop brand was launched on May 1st, 2024 by infamous <a target='_blank' href='https://www.twitter.com/supermalina_' className='underline'>@supermalina_</a>.
					</p>
					<p className={`text-sm text-white`}>
						In October 2023, I&apos;ve started building a web game called maomao. It&apos;s supposed to be a hybrid of Farmville, Tycoon, Dungeon Autobattler with Idle game aspects. If you haven&apos;t played any idle games, it&apos;s a concept where the game kind of plays by itself, and makes progress in certain areas of the game even if you are not playing.
					</p>
					<p className={`text-sm text-white`}>
						Since then, huge development progress was made and I decided to start building a community around the brand and the product.
					</p>
					<p className={`text-sm text-white`}>
						The whole game will be fragmented into individual game mode fragments, so players can choose which fragment he want&apos;s to play.
						This will drastically reduce load-times, sizes, etc..
						These fragments will be separately built and deployed to Telegram gaming platform.

						I have many cool ideas in store, and I want this brand to grow to infinity.
					</p>
					<p className={`text-sm text-white`}>
						Considering how fast Telegram and TON grows, and it&apos;s ways of monetizing products, it&apos;s gonna be very rewarding for early birds who stick around.
					</p>
					<h1 className={`text-xl text-white font-bold`}>This game will be split to a bunch of mini games</h1>
					<img className="rounded-lg w-full" src="snapshot.png" alt="" />
					<a href="https://vimeo.com/948220171?share=copy" target="_blank">Video Link</a>
				</div>
				<div></div>
			</div>
		</div>
	)
}