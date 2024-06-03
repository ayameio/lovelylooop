"use client"

import Navbar from "@/components/navbar";

import React from 'react';
import { PolarArea, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

export default function Home() {
	const copyToClipboard = () => {
		navigator.clipboard.writeText('EQDSqgy_LJUD9EabMyf4Gdjw1GHWh_cKLcdbOZ3wCCUvoZFx').then(() => {
			console.log('EQDSqgy_LJUD9EabMyf4Gdjw1GHWh_cKLcdbOZ3wCCUvoZFx');
		}).catch(err => {
			console.error('Failed to copy: ', err);
		});
	};
	return (
		<div className={`flex flex-col gap-12 justify-center pb-12`}>
			<Navbar></Navbar>
			<div className={`grid grid-cols-5`}>
				<div></div>
				<div className={`col-span-3 flex flex-col gap-12 justify-center`}>
					<div>
						<div>
							<h1 className={`text-xl text-center font-semibold`}>A creative brand, building a TON of fun ^^</h1>
						</div>
					</div>
					<div className={`flex flex-row space-x-4 justify-center`}>
						<div className={`flex flex-col space-y-4`}>
							<div className={`flex justify-center`}>
								<h1 className={`text-center text-xs`}>Social Media</h1>
							</div>
							<div className={`flex flex-row justify-center gap-4`}>
								<a href="https://t.me/lovelylooop" target="_blank">
									<img className={`size-6`} src="/telegram.svg" alt="" />
								</a>
								<a href="https://x.com/lovelylooop" target="_blank">
									<img className={`size-6`} src="/X.svg" alt="" />
								</a>
							</div>
						</div>
						<div className={`space-y-4`}>
							<div>
								<h1 className={`text-center text-xs`}>Lovelylooop Bot</h1>
							</div>
							<div className={`flex justify-center`}>
								<a href="https://t.me/lovelylooopBot" target="_blank">
									<img className={`size-6`} src="/telegram.svg" alt="" />
								</a>
							</div>
						</div>
					</div>
					<img className={`rounded-lg object-cover h-48`} src="/LOVELYLOOOP.png" alt="" />
					<div className={`flex flex-col space-y-4`}>
						<div className={`flex justify-center`}>
							<h1 className={`text-xl text-center`}>Tokenomics</h1>
						</div>
						<div className={`flex flex-row justify-center gap-4`}>
							<p className={`text-sm`}>Supply: 1.000.000.000</p>
							<p className={`text-sm`}>Presale: 45%</p>
							<p className={`text-sm`}>Liquidity Pool: 35%</p>
							<p className={`text-sm`}>Brand Growth: 15%</p>
							<p className={`text-sm`}>Team: 10%</p>
						</div>
						<div className={`h-64 flex justify-center`}>
							<PieChart></PieChart>
							{/* <PolarAreaChart/> */}
						</div>
					</div>
					<div className={`flex flex-col space-y-4`}>
						<div className={`flex justify-center`}>
							<h1 className={`text-xl text-center`}>Token CA:</h1>
						</div>
						<div className={`flex flex-row justify-center gap-4`}>
							<p className={`align-middle text-ellipsis truncate p-4 bg-white text-black text-center rounded-lg h-12`}>EQDSqgy_LJUD9EabMyf4Gdjw1GHWh_cKLcdbOZ3wCCUvoZFx</p>
							<button className="" onClick={copyToClipboard}>
								<img className={`hover:bg-yellow transition duration-150 ease-in-out flex justify-center rounded-lg bg-white p-4 size-12`} src="/copy.svg" alt="" onClick={copyToClipboard}/>
							</button>
						</div>
					</div>
					<div className={`space-y-8`}>
						<div>
							<h1 className={`text-xl text-center`}>Lovelylooop Items</h1>
						</div>
						<div>
							<p className={`text-xs text-center`}>This is the first 888 items made by Lovelylooop. All items are unique and can be found in all of our Telegram Mini-Games.</p>
							<p className={`text-xs text-center`}>The collection consists of Wearables, Potions, Scrolls, Keys, Loootboxes and more!</p>
						</div>
						<div className={`flex justify-center`}>
							<div className={`grid grid-cols-2 sm:grid-cols-3 justify-center gap-4`}>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Off Hand</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="60.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Ring</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="61.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Amulet</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="62.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Weapon</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="63.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Trinket</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="64.png" alt="" />
								</div>
								<div id="item-card" className={`flex flex-col justify-center`}>
									<h1 className={`text-center text-sm`}>Dungeon Key</h1>
									<img className={`rounded-lg min-size-24 sm:min-size-36 md:min-size-48`} src="66.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className={`flex flex-col space-y-4`}>
						<div className={`flex justify-center`}>
							<h1 className={`text-xl text-center`}>Utilities</h1>
						</div>
						<div className={`justify-center flex flex-col gap-4 w-full`}>
							<div className="self-center text-xs w-24 w-full sm:w-36 md:w-48 p-2 rounded-lg border-2 border-white text-white bg-black text-center">Free Mint Looopies!</div>
							<div className="self-center text-xs w-24 w-full sm:w-36 md:w-48 p-2 rounded-lg border-2 border-white text-white bg-black text-center">10% Shared Revenue</div>
							<div className="self-center text-xs w-24 w-full sm:w-36 md:w-48 p-2 rounded-lg border-2 border-white text-white bg-black text-center">Early Access to Games</div>
						</div>
					</div>
					<div className={`flex flex-col space-y-4`}>
						<div className={`flex justify-center`}>
							<h1 className={`text-xl text-center`}>Mint Info</h1>
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


const PieChart = () => {
	const data = {
		labels: ['Liquidity Poool', 'Presale', 'Brand Growth', 'Team'],
		datasets: [
			{
				label: '% Distribution',
				data: [35, 45, 15, 10],
				backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	return <Pie data={data} />;
};

const PolarAreaChart = () => {
	const data = {
		labels: ['Liquidity Poool', 'Presale', 'Brand Growth', 'Team'],
		datasets: [
			{
				label: '% Distribution',
				data: [35, 45, 15, 10],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	return <PolarArea data={data} />;

};
