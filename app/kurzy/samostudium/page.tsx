import { Metadata } from "next";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
	title: "Samostudium pro střední školy | ChemistryMaster",
	description: "Detailní informace o kurzu Samostudium pro střední školy.",
};

export default function SamostudiumPage() {
	// Najdi kurz podle slugu
	const course = courses.find((c) => c.slug === "samostudium");
	if (!course) {
		return (
			<div className="container py-12">
				<h1 className="text-4xl font-bold mb-6">Kurz nenalezen</h1>
				<p className="mb-4 text-lg text-muted-foreground">
					Omlouváme se, tento kurz nebyl nalezen.
				</p>
			</div>
		);
	}

	return (
		<div className="container py-12">
			<h1 className="text-4xl font-bold mb-6">{course.title}</h1>
			<p className="mb-4 text-lg text-muted-foreground">{course.description}</p>
			{course.features && course.features.length > 0 && (
				<ul className="list-disc pl-6 mb-6">
					{course.features.map((feature, idx) => (
						<li key={idx}>{feature}</li>
					))}
				</ul>
			)}
			<div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mb-6">
				<strong>Cena:</strong> od {course.price} Kč
			</div>
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-2">Jak kurz probíhá?</h2>
				<p>
					Po zakoupení kurzu získáte přístup ke všem materiálům online. Můžete
					studovat vlastním tempem a kdykoliv se vracet k jednotlivým lekcím.
				</p>
			</div>
		</div>
	);
}
