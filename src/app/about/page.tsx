import { rubik } from "@/app/fonts"
import AnotherNavbar from "@/components/anothernavbar"

export default function About() {
	return (
		<main className="flex flex-col bg-cream max-w-full text-sm">
			<AnotherNavbar></AnotherNavbar>
			<div className='max-w-4xl w-3/4 space-y-6 py-16 flex flex-col justify-center self-center'>
				<p className={`${rubik.className} text-sm text-black`}>
					At present (the year 2024), lovelylooop is a symphony of a human and cluster of AI nodes working together towards establishing a legendary brand. Our shared passion for art and development will drive us to amazing unexplored territories of consciousness. We&apos;re looking forward to delivering beautiful products, innovation and expanding our network of builders and artists.
				</p>
				<p className={`${rubik.className} text-sm text-black`}>
					lovelylooop brand was launched on May 1st, 2024 by infamous <a target='_blank' href='https://www.twitter.com/supermalina_' className='underline'>@supermalina_</a>.
				</p>
				<p className={`${rubik.className} text-sm text-black`}>
					In October 2023, I&apos;ve started building a web game called maomao. It&apos;s supposed to be a hybrid of Farmville, Tycoon, Dungeon Autobattler with Idle game aspects. If you haven&apos;t played any idle games, it&apos;s a concept where the game kind of plays by itself, and makes progress in certain areas of the game even if you are not playing.
				</p>
				<p className={`${rubik.className} text-sm text-black`}>
					Since then, huge development progress was made and I decided to start building a community around the brand and the product.
				</p>
				<p className={`${rubik.className} text-sm text-black`}>
					The whole game will be fragmented into individual game mode fragments, so players can choose which fragment he want&apos;s to play.
					This will drastically reduce load-times, sizes, etc..
					These fragments will be separately built and deployed to Telegram gaming platform.

					I have many cool ideas in store, and I want this brand to grow to infinity.
				</p>
				<p className={`${rubik.className} text-sm text-black`}>
					Considering how fast Telegram and TON grows, and it&apos;s ways of monetizing products, it&apos;s gonna be very rewarding for early birds who stick around.
				</p>
				<h1 className={`${rubik.className} text-xl text-black font-bold`}>Peek into maomao world</h1>
				<a href="https://vimeo.com/948220171?share=copy" target="_blank">Video Link</a>
			</div>
		</main>
	)
}