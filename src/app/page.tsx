"use client"
import { rubik } from "@/app/fonts"
import AnotherNavbar from "@/components/anothernavbar";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";



export default function Home() {
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
			<div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6 lg:px-8 gap-4">
				<div className="grid grid-cols-3 justify-center gap-4 w-full max-w-lg">
					<div></div>
					<Button className="text-md shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl"><a href="/about" target="_blank" className="text-sm">About</a></Button>
					<div></div>
				</div>
				<div className="grid grid-cols-3 gap-4 w-full max-w-lg">
					<Button className="shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl">Wallpapers</Button>
					<Button className="shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl">Collections</Button>
					<Button className="shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl">Token</Button>
				</div>
				<div className="grid grid-cols-2 gap-4 w-full max-w-lg">
					<Button className="font-bold text-md shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl"><a href="https://t.me/lovelylooopBot" target="_blank">@lovelylooopBot</a></Button>
					<Button className="font-bold text-md shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-white/50 text-black hover:bg-white transition-colors duration-300 h-12 rounded-xl">Mini-Games</Button>
				</div>
				<p className="mt-6 h-6 rounded-xl bg-white font-bold text-center text-lg text-black flex flex-row justify-center items-center text-sm p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/50 text-white">$LYL Token Address</p>
				<div className="h-12 rounded-xl w-full max-w-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/50 text-white flex flex-col justify-center">
					<p className="text-sm text-center">EQDSqgy_LJUD9EabMyf4Gdjw1GHWh_cKLcdbOZ3wCCUvoZFx</p>
				</div>
				<div className="flex flex-row justify-center gap-4 w-full max-w-lg mt-8">
					<a href="https://t.me/lovelylooop" target="_blank">
						<img src="./telegram.svg" alt="" width={"32"} />
					</a>
					<a href="https://x.com/lovelylooop" target="_blank">
						<img src="./X.svg" alt="" width={"32"} />
					</a>
				</div>
			</div>
		</div>
	);
}
