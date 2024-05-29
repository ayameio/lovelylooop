"use client"
import { rubik } from "@/app/fonts"
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function Home() {

	const [selectedContent, setSelectedContent] = useState({ content: 'About', title: 'About' });

	const renderContent = () => {
		switch (selectedContent.content) {
			case 'About':
				return <About />
			case 'Wallpapers':
				return <Wallpapers />
			case 'Collections':
				return <Collections />
			case 'Token':
				return <Token />
			default:
				return <About />
		}
	};
	return (
		<div className={`relative w-full h-screen ${rubik.className}`}>
			<img
				alt="Background"
				className="absolute inset-0 w-full h-full object-cover"
				height="1080"
				src="/LOVELYLOOOP.png"
				style={{
					aspectRatio: "1920/1080",
					objectFit: "cover",
				}}
				width="1920"
			/>
			<div className="flex justify-center items-center min-h-screen">
				<div className="relative z-10 flex flex-col h-full px-4 md:px-6 lg:px-8 gap-4 w-full max-w-screen-lg">
					<div className="flex flex-row gap-4 h-full">
						<div id="menu" className="flex flex-col gap-2 w-1/4">
							<Button className="shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl" onClick={() => setSelectedContent({ content: 'About', title: 'About' })}>About</Button>
							<Button className="shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl" onClick={() => setSelectedContent({ content: 'Wallpapers', title: 'Wallpapers' })}>Wallpapers</Button>
							<Button className="shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl" onClick={() => setSelectedContent({ content: 'Collections', title: 'Collections' })}>Collections</Button>
							<Button className="shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl" onClick={() => setSelectedContent({ content: 'Token', title: 'Token' })}>Token</Button>
							<Button className="text-md shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl">
								<a href="https://t.me/lovelylooopBot" target="_blank">@lovelylooopBot</a>
							</Button>
							<Button className="text-md shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl">Mini-Games</Button>
							<div className="shadow-[0_0_20px_rgba(0,0,0,0.5)] p-2 rounded-xl bg-black/75 flex flex-row justify-center gap-4 w-full">
								<a href="https://t.me/lovelylooop" target="_blank">
									<img src="./telegram.svg" alt="" width={"32"} />
								</a>
								<a href="https://x.com/lovelylooop" target="_blank">
									<img src="./X.svg" alt="" width={"32"} />
								</a>
							</div>
						</div>
						<div id="content" className="bg-white/75 p-12 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col flex-grow overflow-auto">
							<h1 className="self-start text-xl text-center font-bold w-full">{selectedContent.title}</h1>
							<div className="flex-grow flex items-center justify-center w-full">
								{renderContent()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const About = () => {
	return (
		<div>
			About
		</div>
	)
}

const Wallpapers = () => {
	return (
		<div>
			<WallpaperCard />
		</div>
	)
}
const Collections = () => {
	return (
		<div>
			Collections
		</div>
	)
}
const Token = () => {
	return (
		<div>
			Token
		</div>
	)
}

const WallpaperCard = () => {
	return (
		<Card className="">
			<div className="relative overflow-hidden rounded-lg">
				<img
					alt="Card Image"
					className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
					src="/wallpapers/1.png"
				/>
				<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<Button className="w-full" variant="outline">
						<DownloadIcon className="mr-2 h-4 w-4" />
						Download
					</Button>
				</div>
			</div>
		</Card>
	)
}

function DownloadIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" x2="12" y1="15" y2="3" />
		</svg>
	)
}