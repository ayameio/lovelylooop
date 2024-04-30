import { nunito_sans } from '../app/fonts'

export default function About() {
	return (
		<div className="flex justify-center items-center">
			<div className='max-w-4xl w-3/4 space-y-6'>
				<div className="flex flex-col gap-2 justify-left items-center md:flex-row">
					<div className="size-4 bg-yellow rounded-sm min-w-4 min-h-4"></div>
					<div className="size-4 bg-green rounded-sm min-w-4 min-h-4"></div>
					<div className="size-4 bg-pink rounded-sm min-w-4 min-h-4"></div>
					<h1 className="text-4xl font-bold text-center">About lovelylooop</h1>
				</div>
				<p className={`${nunito_sans.className} text-sm`}>
					At present (the year 2024), lovelylooop is a symphony of a human and cluster of AI nodes working together towards establishing a legendary brand. Our shared passion for art and development will drive us to amazing unexplored territories of consciousness. We&apos;re looking forward to delivering beautiful products, innovation and expanding our network of builders and artists.
				</p>
			</div>
		</div>
	)
}