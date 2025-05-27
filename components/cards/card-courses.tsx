"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CardCourseProps {
	number: number;
	title: string;
	description: string;
	features: React.ReactNode[];
	price: string;
	href: string;
}

function CardCourse({
	number,
	title,
	description,
	features,
	price,
	href,
}: CardCourseProps) {
	return (
		<motion.div
			whileHover={{ y: -5 }}
			transition={{ type: "spring", stiffness: 300 }}
		>
			<div className="overflow-hidden min-h-[620px] h-full flex flex-col rounded-2xl shadow-lg bg-white">
				<div
					className="w-full bg-yellow flex items-start justify-center mb-0 text-center p-8"
					style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
				>
					<h2 className="flex items-center gap-4 text-3xl font-extrabold tracking-tight mb-0 w-full break-words text-center self-start">
						<span
							className="inline-flex items-center justify-center rounded-full bg-white shadow-lg w-20 h-20 mr-1 flex-shrink-0"
							style={{ aspectRatio: "1/1" }}
						>
							<span className="font-bold text-5xl text-green">{number}</span>
						</span>
						<span className="text-left min-w-0">{title}</span>
					</h2>
				</div>
				<div className="p-10 flex-1 flex flex-col pt-0">
					<p className="text-gray-800 text-lg md:text-base leading-relaxed font-normal mb-2 mt-8">
						{description}
					</p>
					<ul className="space-y-2 text-gray-800 list-disc list-inside mt-2 pt-2 text-base md:text-lg px-4 md:px-8">
						{features.map((feature, i) => (
							<li key={i}>{feature}</li>
						))}
					</ul>
				</div>
				<div className="p-4 flex justify-between items-center bg-muted/40">
					<div className="font-extrabold text-2xl md:text-3xl">{price}</div>
				   <Button
					   asChild
					   className="font-medium text-base px-6 py-2 rounded-md shadow transition-colors hover:bg-pink-light hover:text-pink-foreground focus:bg-pink-light focus:text-pink-foreground"
				   >
					   <Link href={href}>Zobrazit</Link>
				   </Button>
				</div>
			</div>
		</motion.div>
	);
}

export function CardCourses() {
	return (
		<section className="bg-muted py-12 md:py-24">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
							Aktuálně nabízené kurzy
						</h2>
						<p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
							Momentálně nabízíme kurzy zaměřené na samostudium pro střední školy a
							přípravu na maturitu.
						</p>
					</div>
				</div>

				<div className="mx-auto grid max-w-4xl gap-8 py-12 lg:grid-cols-2">
					{[
						{
							number: 1,
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
							price: "od 990 Kč",
							href: "/courses/samostudium",
						},
						{
							number: 2,
							title: "Příprava na maturitu",
							description:
								"Kurz zaměřený na praktickou přípravu k maturitě z chemie, obsahuje kurz Samostudium pro střední školy, na který se odkazuje.",
							features: [
								<>
									Obsahuje{" "}
									<span className="font-bold">Samostudium pro střední školy</span>
								</>,
								"Ukázkové příklady a vysvětlení",
								"Tipy k maturitě z první ruky",
								"Doporučené zdroje pro další studium",
								"Možnost konzultací a dotazů",
							],
							price: "od 1 490 Kč",
							href: "/courses/maturita",
						},
					].map((card) => (
						<CardCourse key={card.number} {...card} />
					))}
				</div>

				<div className="flex justify-center">
		  <Button
			asChild
			className="font-medium text-base px-6 py-2 rounded-md shadow transition-colors hover:bg-pink-light hover:text-pink-foreground focus:bg-pink-light focus:text-pink-foreground"
		  >
			<Link href="/courses">Všechny kurzy</Link>
		  </Button>
				</div>
			</div>
		</section>
	);
}
