import { Course } from "@/types";

export const courses: Course[] = [
	{
		id: "1",
		title: "Samostudium pro střední školy",
		description:
			"Samostudium z chemie pro střední školy, vhodné pro studenty, kteří se chtějí doučit chemii samostatně nebo si jen zopakovat látku.",
		features: [
			"Výuka formou videozáznamů",
			"Pracovní listy s klíčem",
			"Modelové testové otázky",
			"Praktické příklady k procvičení",
			"Možnost koupit jako samostatný ročník nebo balíček všech 4 ročníků",
		],
		price: 990,
		duration: "12 týdnů",
		slug: "samostudium",
	},
	{
		id: "2",
		title: "Příprava na maturitu",
		description:
			"Kurz zaměřený na praktickou přípravu k maturitě z chemie, obsahuje kurz Samostudium pro střední školy, na který se odkazuje.",
		features: [
			"Obsahuje Samostudium pro střední školy",
			"Ukázkové příklady a vysvětlení",
			"Tipy k maturitě z první ruky",
			"Doporučené zdroje pro další studium",
			"Možnost konzultací a dotazů",
		],
		price: 1490,
		duration: "10 týdnů",
		slug: "maturita",
	},
];
