import Image from "next/image";

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


export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar/>
			<div className="py-8">
				<img src="/isometry.png" alt="" />
			</div>
			<div className="flex min-h-screen flex-row justify-center p-24">
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
				</Card>
			</div>

		</main>
	);
}
