import * as React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "lucide-react"


export default function Showcase() {
	return (
		<Carousel
			// plugins={[
			// 	Autoplay({
			// 		delay: 2000,
			// 	}),
			// ]} className="self-center w-full max-w-4xl"
		>
			<CarouselContent>
				{/* {Array.from({ length: 12 }).map((_, index) => (
					<CarouselItem key={index} className="basis-1/8">
						<div className="p-1">
							<video className="rounded-lg" width="256" height="256" controls autoPlay muted loop style={{ margin: '10px' }}>
								<source src="317.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</CarouselItem>
				))} */}
				{sources.map((videoSrc, index) => (
					<CarouselItem key={index} className="basis-1/8">
						<div className="p-1">
							<video className="rounded-lg" width="256" height="256" controls autoPlay muted loop style={{ margin: '10px' }}>
								<source src={videoSrc} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

let sources = [
	"009.mp4",
	"021.mp4",
	"050.mp4",
	"065.mp4",
	"135.mp4",
	"181.mp4",
	"317.mp4",
	"394.mp4",
	"408.mp4",
	"523.mp4",
	"531.mp4",
	"533.mp4",
]