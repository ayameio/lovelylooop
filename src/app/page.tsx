import { rubik } from "@/app/fonts"
import AnotherNavbar from "@/components/anothernavbar";

export default function Home() {
	return (
		<main className="flex flex-col bg-cream max-w-full text-sm">
			<AnotherNavbar></AnotherNavbar>
			<div className={`flex flex-col`}>
				<h1 className={`${rubik.className} pt-32 text-xl font-medium text-center`}>Just a web3 brand, building fun things... on TON</h1>
				<div className="flex justify-center py-8">
					<img src="/logo.png" alt="" className="object-fit" width={"256"} height={"256"}/>
				</div>
				<span className="self-center flex flex-row gap-4">
					<a className="self-center" href="https://t.me/lovelylooop" target="_blank">
						<img src="/telegram.svg" width={32} ></img>
					</a>
					<a className="self-center" href="https://x.com/lovelylooop" target="_blank">
						<img src="/X.svg" width={32} ></img>
					</a>
					<a className="self-center" href="https://x.com/supermalina_" target="_blank">
						<img src="/X.svg" width={32} ></img>
					</a>
				</span>
				<img src="/anime-skatergirl-fit.png" alt="" width={"512"} height={"512"} />
			</div>
		</main>
	);
}
