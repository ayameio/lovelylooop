import { fredoka, nunito_sans } from '../app/fonts'

export default function About() {
	return (
		<div className="flex justify-center items-center">
			<div className='max-w-4xl w-3/4 space-y-6'>
				<p className={`${fredoka.className} text-sm text-white`}>
					At present (the year 2024), lovelylooop is a symphony of a human and cluster of AI nodes working together towards establishing a legendary brand. Our shared passion for art and development will drive us to amazing unexplored territories of consciousness. We&apos;re looking forward to delivering beautiful products, innovation and expanding our network of builders and artists.
				</p>
				<p className={`${fredoka.className} text-sm text-white`}>
					lovelylooop and maomao was single-handedly built by infamous <a target='_blank' href='https://www.twitter.com/supermalina_' className='underline'>@supermalina_</a>.
				</p>
				
			</div>
		</div>
	)
}