"use client"

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import React from 'react';

export default function Artwork() {
	return (
		<div className={`flex flex-col gap-12 justify-center pb-12`}>
			<Navbar></Navbar>
			<div className={`grid grid-cols-5`}>
				<div></div>
				<div className={`col-span-3 flex flex-col gap-12 justify-center`}>
					<div className={`flex flex-row gap-4`}>
						<a href="/">
							<Button className="w-16 bg-white text-black hover:text-white">Back</Button>
						</a>
						{/* <h1 className={`text-center place-self-center`}>Artwork</h1> */}
					</div>
					<div className="grid grid-cols-4 gap-4 place-self-center">
						<div className={`flex flex-col justify-center gap-2`}>
							<img className={`rounded-lg`} src="/wallpapers/1.png" alt="" />
						</div>
						<div className={`flex flex-col justify-center gap-2`}>
							<img className={`rounded-lg`} src="/wallpapers/2.png" alt="" />
						</div>
						<div className={`flex flex-col justify-center gap-2`}>
							<img className={`rounded-lg`} src="/wallpapers/3.png" alt="" />
						</div>
						<div className={`flex flex-col justify-center gap-2`}>
							<img className={`rounded-lg`} src="/wallpapers/4.png" alt="" />
						</div>
						<div className={`flex flex-col justify-center gap-2`}>
							<img className={`rounded-lg`} src="/wallpapers/5.png" alt="" />
						</div>
						<div className={`flex flex-col justify-center gap-2`}>
							<img className={`rounded-lg`} src="/wallpapers/6.png" alt="" />
						</div>
						<div className={`flex flex-col justify-center gap-2`}>
							<img className={`rounded-lg`} src="/wallpapers/7.png" alt="" />
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	)
}