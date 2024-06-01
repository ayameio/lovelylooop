"use client"
import Navbar from "@/components/navbar";

export default function Home() {
	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			console.log('CA copied to clipboard');
		}).catch(err => {
			console.error('Failed to copy CA: ' + err);
		});
	};
	return (
		<div className={`flex flex-col gap-12 justify-center pb-12`}>
			<Navbar></Navbar>
			<div className={`grid grid-cols-4`}>
				<div></div>
				<div className={`col-span-2 flex flex-col gap-12 justify-center`}>
					<div>
						<div>
							<h1 className={`text-xl text-center font-semibold`}>A creative brand, building fun stuff on TON :)</h1>
						</div>
					</div>
					<div className={`flex flex-row space-x-4 justify-center`}>
						<div className={`flex flex-col space-y-4`}>
							<div className={`flex justify-center`}>
								<h1 className={`text-center text-xs`}>Social Media</h1>
							</div>
							<div className={`flex flex-row justify-center gap-4`}>
								<img className={`size-6`} src="/telegram.svg" alt="" />
								<img className={`size-6`} src="/X.svg" alt="" />
							</div>
						</div>
						<div className={`space-y-4`}>
							<div>
								<h1 className={`text-center text-xs`}>Lovelylooop Bot</h1>
							</div>
							<div className={`flex justify-center`}>
								<img className={`size-6`} src="/telegram.svg" alt="" />
							</div>
						</div>
					</div>
					<img className={`rounded-lg object-cover h-48`} src="/LOVELYLOOOP.png" alt="" />
					<div className={`flex flex-col space-y-4`}>
						<div className={`flex justify-center`}>
							<h1 className={`text-center`}>Token CA:</h1>
						</div>
						<div className={`flex flex-row justify-center gap-4`}>
							<p className={`align-middle text-ellipsis truncate p-4 bg-white text-black text-center rounded-lg h-12`}>EQDSqgy_LJUD9EabMyf4Gdjw1GHWh_cKLcdbOZ3wCCUvoZFx</p>
							<img className={`flex justify-center rounded-lg bg-white p-4 size-12`} src="/copy.svg" alt="" />
						</div>
					</div>
					<div className={`space-y-8`}>
						<div>
							<h1 className={`text-center`}>Lovelylooop Items</h1>
						</div>
						<div>
							<p className={`text-xs text-center`}>This is the first 888 items made by Lovelylooop. All items are unique and can be found in all of our Telegram Mini-Games.</p>
							<p className={`text-xs text-center`}>The collection consists of Wearables, Potions, Scrolls, Keys, Loootboxes and more!</p>
						</div>
						<div className={`flex justify-center`}>
							<div className={`grid grid-cols-2 sm:grid-cols-3 justify-center gap-4`}>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Chest Armor</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="ring.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Chest Armor</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="ring.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Chest Armor</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="ring.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Chest Armor</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="ring.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Chest Armor</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="ring.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Chest Armor</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="ring.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className={`flex flex-col space-y-4`}>
						<div className={`flex justify-center`}>
							<h1 className={`text-center`}>Utilities</h1>
						</div>
						<div className={`justify-center flex flex-col gap-4 w-full`}>
							<div className="self-center text-xs w-24 w-full sm:w-36 md:w-48 p-2 rounded-lg border-2 border-white text-white bg-black text-center">Free Mint Looopies!</div>
							<div className="self-center text-xs w-24 w-full sm:w-36 md:w-48 p-2 rounded-lg border-2 border-white text-white bg-black text-center">10% Revenue Shared</div>
							<div className="self-center text-xs w-24 w-full sm:w-36 md:w-48 p-2 rounded-lg border-2 border-white text-white bg-black text-center">Early Access</div>
						</div>
					</div>
					<div className={`flex flex-col space-y-4`}>
						<div className={`flex justify-center`}>
							<h1 className={`text-center`}>Mint Info</h1>
						</div>
						<div className={`flex flex-col sm:flex-row gap-4 justify-center`}>
							<p className={`text-sm`}>Date: June 2024</p>
							<p className={`text-sm`}>Supply: 888</p>
							<div className={`flex flex-row gap-2 align-center`}>
								<p className={`text-sm`}>Price WL: 12 TON</p><img className="size-4 place-self-center" src="/ton-16.svg" alt="" />
							</div>
							<div className={`flex flex-row gap-2 align-center`}>
								<p className={`text-sm`}>Price PUB: 20 TON</p><img className="size-4 place-self-center" src="/ton-16.svg" alt="" />
							</div>
						</div>
					</div>
					<div id="future-map" className={`flex flex-col space-y-4`}>
						<div className={`flex justify-center`}>
							<h1 className={`text-xl text-center`}>Future Map</h1>
						</div>
						<div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4`}>
							<div id="item-card" className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48 bg-white h-8 flex justify-center items-center`}>
								<h1 className="text-xs text-black text-center">1. Mint Lovelylooop Items</h1>
							</div>
							<div id="item-card" className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48 bg-white h-8 flex justify-center items-center`}>
								<h1 className="text-xs text-black text-center">2. LYL Token Fair-Launch</h1>
							</div>
							<div id="item-card" className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48 bg-white h-8 flex justify-center items-center`}>
								<h1 className="text-xs text-black text-center">3. Deploy Lovelylooop Heroes RPG</h1>
							</div>
							<div id="item-card" className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48 bg-white h-8 flex justify-center items-center`}>
								<h1 className="text-xs text-black text-center">4. Brand marketing</h1>
							</div>
							<div id="item-card" className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48 bg-white h-8 flex justify-center items-center`}>
								<h1 className="text-xs text-black text-center">5. Content creation</h1>
							</div>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}
