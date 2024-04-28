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
				<img src="/lll.png" alt="" width={"512px"} height={"512px"}/>
			</div>
			<About></About>

			<div className="flex flex-col justify-center sm:flex-row">
				<Card>
					<CardHeader>
						<CardTitle>maomao Originals #533</CardTitle>
						<CardDescription>S'MORES</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<video width="256" height="256" controls autoPlay muted loop style={{margin: '10px'}}>
							<source src="https://ayameio.github.io/maomao-docs/assets/533.DKqGmtPf.mp4" type="video/mp4"/>
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
							<source src="https://ayameio.github.io/maomao-docs/assets/394.Cq4oQqD-.mp4" type="video/mp4"/>
								Your browser does not support the video tag.
						</video>
					</CardContent>
					<CardFooter>
						<Badge variant="outline">Wearable</Badge>
						<Badge variant="outline">Weapon</Badge>
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
						<Badge variant="outline">Wearable</Badge>
						<Badge variant="outline">Helmet</Badge>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>maomao Originals #468</CardTitle>
						<CardDescription>Feather Earrings</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<video width="256" height="256" controls autoPlay muted loop style={{margin: '10px'}}>
							<source src="https://ayameio.github.io/maomao-docs/assets/468.whq1SbM9.mp4" type="video/mp4"/>
								Your browser does not support the video tag.
						</video>
					</CardContent>
					<CardFooter>
						<Badge variant="outline">Wearable</Badge>
						<Badge variant="outline">Earrings</Badge>
					</CardFooter>
				</Card>
			</div>
			<CollectionInfo/>
		</main>
	);
}
