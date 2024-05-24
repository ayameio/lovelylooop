import { Fredoka, Quando, Nunito_Sans, Montserrat_Alternates, Rubik } from 'next/font/google'

export const fredoka = Fredoka({
	subsets: ['latin'],
})

export const nunito_sans = Nunito_Sans({
	subsets: ['latin'],
})

export const rubik = Rubik({
	subsets: ['latin'],
})

export const montserrat_alt = Montserrat_Alternates({
	subsets: ['latin'],
	weight: '100'
})

export const quando = Quando({
	subsets: ["latin"],
	weight: "400",
	variable: '--font-quando'
});