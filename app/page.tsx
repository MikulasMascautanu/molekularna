import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardFeature } from "@/components/cards/card-feature";
import { CardTestimonial } from "@/components/cards/card-testimonial";
import { CardCourses } from "@/components/cards/card-courses";
import { Award, BookOpen, FileCheck } from "lucide-react";

export default function Home() {
	return (
		<>
			{/* Floating color palette for reference */}
			{process.env.NODE_ENV === "development" && (
				<div
					style={{ zIndex: 1000 }}
					className="fixed top-6 right-6 flex flex-col gap-2 p-4 bg-white/80 rounded-xl shadow-lg border border-gray-200 backdrop-blur-sm"
				>
					<div className="flex items-center gap-2">
						<span className="bg-yellow block w-8 h-8 rounded-full border border-gray-300" />
						<span className="text-xs font-medium text-gray-700">
							Yellow
							<br />
							<span className="text-[10px] text-gray-400">--yellow</span>
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="bg-yellow-foreground block w-8 h-8 rounded-full border border-gray-300" />
						<span className="text-xs font-medium text-gray-700">
							Yellow Foreground
							<br />
							<span className="text-[10px] text-gray-400">--yellow-foreground</span>
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="bg-pink block w-8 h-8 rounded-full border border-gray-300" />
						<span className="text-xs font-medium text-gray-700">
							Pink
							<br />
							<span className="text-[10px] text-gray-400">--pink</span>
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="bg-pink-foreground block w-8 h-8 rounded-full border border-gray-300" />
						<span className="text-xs font-medium text-gray-700">
							Pink Foreground
							<br />
							<span className="text-[10px] text-gray-400">--pink-foreground</span>
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="bg-green block w-8 h-8 rounded-full border border-gray-300" />
						<span className="text-xs font-medium text-gray-700">
							Green
							<br />
							<span className="text-[10px] text-gray-400">--green</span>
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="bg-green-foreground block w-8 h-8 rounded-full border border-gray-300" />
						<span className="text-xs font-medium text-gray-700">
							Green Foreground
							<br />
							<span className="text-[10px] text-gray-400">--green-foreground</span>
						</span>
					</div>
				</div>
			)}
			<div className="relative w-full">
				{/* Hero Section */}
				<section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 pt-28 md:pt-28 pb-44 md:pb-44">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col space-y-4">
								<div className="space-y-8">
									<h1
										className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
										style={{ lineHeight: "1.1" }}
									>
										Zmákni středoškolskou chemii jak během školního roku tak i před
										maturitou!
									</h1>
									<p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
										Komplexní vzdělávání v chemii s interaktivními lekcemi, cvičnými
										problémy a aplikacemi v reálném světě.
									</p>
								</div>
								<div className="flex flex-col gap-2 sm:flex-row">
									<Button
										asChild
										size="lg"
										className="font-medium bg-pink text-pink-foreground px-6 py-2 rounded-md shadow transition-colors hover:bg-pink-light hover:text-pink-foreground focus:bg-pink-light focus:text-pink-foreground"
									>
										<Link href="/kurzy">Nabídka kurzů</Link>
									</Button>
									<Button
										asChild
										size="lg"
										className="font-medium bg-green text-green-foreground px-6 py-2 rounded-md shadow transition-colors hover:bg-green-light hover:text-green-foreground focus:bg-green-light focus:text-green-foreground"
									>
										<Link href="/about">Ukázkový kurz</Link>
									</Button>
								</div>
							</div>
							<div className="flex items-center justify-center lg:justify-end">
								<div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
									<Image
										src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
										alt="Chemie"
										fill
										className="object-cover rounded-xl"
										priority
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Wave decoration */}
					<div className="pointer-events-none absolute inset-x-0 bottom-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1440 320"
							className="w-full h-auto"
						>
							<path
								fill="hsl(var(--yellow))"
								d="M 0 105 C 94 178 295 190 356 191 C 485 194 600 170 720 150 C 840 130 963 69 1171 88 C 1330 109 1472 173 1552 251 L 1670 383 L 1676 329 L 1500 320 L 1440 320 L 1380 320 C 1320 320 1200 320 1080 320 C 960 320 840 320 720 320 C 600 320 480 320 360 320 C 240 320 120 320 60 320 L 0 320 Z"
							></path>
						</svg>
					</div>
				</section>

				{/* Features section */}
				<section className="py-12 md:py-24">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
									Proč se učit chemii s námi?
								</h2>
								<p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
									Naše kurzy kombinují teoretické a praktické znalosti tak, aby ti učivo
									dávalo smysl a bylo snadné si ho zapamatovat.
								</p>
							</div>
						</div>

						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
							<CardFeature
								icon={<BookOpen className="h-10 w-10 text-primary" />}
								title="Comprehensive Curriculum"
								description="From basics to advanced topics, our structured courses cover everything you need to succeed."
							/>
							<CardFeature
								icon={<FileCheck className="h-10 w-10 text-primary" />}
								title="Practical Exercises"
								description="Apply your knowledge with hands-on exercises and real-world problem-solving."
							/>
							<CardFeature
								icon={<Award className="h-10 w-10 text-primary" />}
								title="Expert Instructors"
								description="Learn from experienced educators and industry professionals passionate about chemistry."
							/>
						</div>
					</div>
				</section>

				<CardCourses />

				{/* Testimonials section */}
				<section className="py-12 md:py-24">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
									Recenze od našich studentů
								</h2>
							</div>
						</div>

						<div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
							<CardTestimonial
								quote="The organic chemistry course completely transformed my understanding of the subject. The visualizations made complex reactions easy to grasp."
								author="Emily Chen"
								role="Chemistry Student"
								avatarUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							/>
							<CardTestimonial
								quote="As a high school teacher, these resources have been invaluable for my classroom. My students are more engaged and perform better on exams."
								author="Michael Rodriguez"
								role="High School Science Teacher"
								avatarUrl="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							/>
						</div>
					</div>
				</section>

				{/* CTA section */}
				{/* <section className="bg-primary text-primary-foreground py-12 md:py-24">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Ready to Transform Your Chemistry Knowledge?
								</h2>
								<p className="max-w-[600px] md:text-xl/relaxed">
									Join thousands of satisfied students who have enhanced their
									understanding of chemistry with our courses.
								</p>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Button asChild size="lg" variant="secondary">
										<Link href="/courses">Browse Courses</Link>
									</Button>
									<Button
										asChild
										size="lg"
										variant="outline"
										className="bg-primary-foreground/10"
									>
										<Link href="/register">Sign Up Today</Link>
									</Button>
								</div>
							</div>
							<div className="flex flex-col space-y-4">
								<div className="flex items-center gap-4">
									<CheckCircle2 className="h-7 w-7 text-primary-foreground/90" />
									<div className="space-y-1">
										<h3 className="font-medium">Flexible Learning</h3>
										<p className="text-primary-foreground/80 text-sm">
											Study at your own pace, anywhere and anytime
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<CheckCircle2 className="h-7 w-7 text-primary-foreground/90" />
									<div className="space-y-1">
										<h3 className="font-medium">Lifetime Access</h3>
										<p className="text-primary-foreground/80 text-sm">
											Purchase once and access your course materials forever
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<CheckCircle2 className="h-7 w-7 text-primary-foreground/90" />
									<div className="space-y-1">
										<h3 className="font-medium">Expert Support</h3>
										<p className="text-primary-foreground/80 text-sm">
											Get your questions answered by our team of chemistry experts
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<CheckCircle2 className="h-7 w-7 text-primary-foreground/90" />
									<div className="space-y-1">
										<h3 className="font-medium">Certificate of Completion</h3>
										<p className="text-primary-foreground/80 text-sm">
											Earn a certificate to showcase your newly acquired skills
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
			</div>
		</>
	);
}
