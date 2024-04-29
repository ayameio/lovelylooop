import { nunito_sans } from '../app/fonts'

export default function About() {
	return (
		<div className="flex justify-center items-center">
			<div className="max-w-4xl w-3/4 space-y-6">
				<h1 className="text-4xl font-bold text-center">About lovelylooop</h1>
				<p className={`${nunito_sans.className} text-sm`}>
					At present (the year 2024), lovelylooop is a symphony of a human and cluster of AI nodes working together towards establishing a legendary brand. Our shared passion for art and development will drive us to amazing unexplored territories of consciousness. We&apos;re looking forward to delivering beautiful products, innovation and expanding our network of builders and artists.
				</p>
			</div>
		</div>
	)
}