import Image from "next/image";
import { Badge } from "@/components/ui/badge"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Navbar from "@/components/navbar";
import Head from "next/head";
import About from "@/components/about";
import CollectionInfo from "@/components/collectionInfo";

export default function Home() {
	return (
		<main className="flex flex-col space-y-16 mb-16">
			<Navbar/>
			<div className="flex justify-center">
				{/* <img src="/lll-2.png" alt="" width={"512px"} height={"512px"}/> */}
				<img src="/lll-4.svg" alt="" width={"1024px"} height={"1024px"}/>
				{/* <img src="/lll-4.svg" alt=""/> */}
			</div>
			<About></About>
			{/* Cards */}
			<div className="flex flex-row justify-center overflow-x-auto">
				<Card>
					<CardHeader>
						<CardTitle>maomao Originals #533</CardTitle>
						<CardDescription>S'MORES</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<video width="256" height="256" controls autoPlay muted loop style={{margin: '10px'}}>
							<source src="533.mp4" type="video/mp4"/>
								Your browser does not support the video tag.
						</video>
					</CardContent>
					<CardFooter>
						<Badge variant="outline">Consumable</Badge>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>maomao Originals #394</CardTitle>
						<CardDescription>Crystalblade</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<video width="256" height="256" controls autoPlay muted loop style={{margin: '10px'}}>
							<source src="394.mp4" type="video/mp4"/>
								Your browser does not support the video tag.
						</video>
					</CardContent>
					<CardFooter>
						<Badge className="bg-blue">Wearable</Badge>
						<Badge className="bg-green">Weapon</Badge>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>maomao Originals #408</CardTitle>
						<CardDescription>Necromancer Mask</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<video width="256" height="256" controls autoPlay muted loop style={{margin: '10px'}}>
							<source src="https://ayameio.github.io/maomao-docs/assets/371.DpERxqn9.mp4" type="video/mp4"/>
								Your browser does not support the video tag.
						</video>
					</CardContent>
					<CardFooter>
						<Badge className="bg-blue">Wearable</Badge>
						<Badge className="bg-green">Helmet</Badge>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>maomao Originals #531</CardTitle>
						<CardDescription>Potion</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<video width="256" height="256" controls autoPlay muted loop style={{margin: '10px'}}>
							<source src="531.mp4" type="video/mp4"/>
								Your browser does not support the video tag.
						</video>
					</CardContent>
					<CardFooter>
						<Badge variant="outline">Consumable</Badge>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>maomao Originals #135</CardTitle>
						<CardDescription>Key</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<video width="256" height="256" controls autoPlay muted loop style={{margin: '10px'}}>
							<source src="135.mp4" type="video/mp4"/>
								Your browser does not support the video tag.
						</video>
					</CardContent>
					<CardFooter>
						<Badge className="bg-yellow text-black">Key</Badge>
					</CardFooter>
				</Card>
			</div>
			<CollectionInfo/>
			<div className="flex items-center flex-col space-y-8">
				<h1 className="text-2xl font-bold text-center">You wanna be here</h1>
				<div className="flex flex-row justify-center gap-2">
					<a href="https://t.me/lovelylooop" target="_blank">
						<img src="telegram.svg" alt="" width={"32px"} height={"32px"}/>
					</a>
					<a href="https://discord.com/invite/pZ2jYXU2Us" target="_blank">
						<img src="discord.svg" alt="" width={"32px"} height={"32px"}/>
					</a>
				</div>
			</div>
		</main>
	);
}
