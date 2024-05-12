'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"

import React, { useState } from 'react';

type AddressList = string[]
const mintlist: AddressList = [
	"6hWxaV8XKTCLg7caR4wobyFeg63cnJSNNY3knxNyqCex",
	"25NMdNVyyxkTWU25MKj1QvEQDA3gQzHGqcfDQyR6Uzmw",
	"3EYuqDwy8dLfSH74n9uxUWwwBDp1WvsCKBBEotusLgVK",
	"HWpebHfPvRw5VrgMcHUpxrmTQWdJiirQSML6PTExV2rF",
	"23gXokeXGTXnTVNmLzfHz5dYsYRW8TXEchmum4YfybWw",
	"2ycmG37DKL7nj8mVFsc3tojvSTC45aFu5PzafaEmo3hx",
	"2HyrcfB68VErngVudhxuKrcXotzYy7Hvy4D4WGH6xxmG",
	"jesrRdDmUKfgPezCYN4v7LamScvNpc6pJ2RJpA4FzRW",
	"5N55MibnPyYoLmJTdMPfnup3kxnwR4g87YEreVkyyEKQ",
	"9NJQn4kQAxEWPbiKHnLjoVA9t5LcayAV1zQaAjnTqmst",
	"8jwHbCkqZcFmTHJRLv1FzsNk3tQQ3Pjm998fxaZT5N3B",
	"5x6TSEzfuVjppAXV2RZa5W1pk18RTMwRpUtXpJwrxHvb",
]
export default function Component() {
	const [inputValue, setInputValue] = useState('');
	const [stringsArray, setStringsArray] = useState<AddressList>(mintlist);
	const [message, setMessage] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleButtonClick = () => {
		if (stringsArray.includes(inputValue)) {
			setMessage('This address is on the Mint List!');
		} else {
			setMessage('This address is not on the Mint List!');
		}
		setInputValue('');
	};

	return (
		<div className="flex flex-col h-screen items-center justify-center">
			<Button>
				<a className="relative text-sm font-semibold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/">
					Back
				</a>
			</Button>
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>Mintlist checker</CardTitle>
					<CardDescription>Paste your SOL address to see if you&apos;re on the mintlist.</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="grid gap-4">
						<div className="grid gap-2">
							<Label>Address</Label>
							<Input
								id="address"
								placeholder="Enter your SOL address"
								type="text"
								value={inputValue}
								onChange={handleInputChange} />
						</div>
						<p>{message}</p>
						<Button className="bg-violet hover:text-violet hover:bg-white hover:border-violet border-2" type="button" onClick={handleButtonClick}>Check</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}