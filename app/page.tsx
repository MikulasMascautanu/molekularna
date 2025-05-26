import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardFeature } from "@/components/cards/card-feature";
import { CardTestimonial } from "@/components/cards/card-testimonial";
import { CardCourse } from "@/components/cards/card-course";
import {
	ArrowRight,
	Award,
	BookOpen,
	CheckCircle2,
	FileCheck,
	FlaskConical,
	GraduationCap,
} from "lucide-react";
import { featuredCourses } from "@/lib/data";

export default function Home() {
	return (
		<div className="relative w-full">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 pt-16 md:pt-24">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
									Master Chemistry with Expert-Led Courses
								</h1>
								<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
									Comprehensive chemistry education with interactive lessons, practice
									problems, and real-world applications.
								</p>
							</div>
							<div className="flex flex-col gap-2 sm:flex-row">
								<Button asChild size="lg" className="gap-1">
									<Link href="/courses">
										Explore Courses <ArrowRight className="h-4 w-4 ml-1" />
									</Link>
								</Button>
								<Button asChild variant="outline" size="lg">
									<Link href="/about">Learn More</Link>
								</Button>
							</div>
						</div>
						<div className="flex items-center justify-center lg:justify-end">
							<div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
								<Image
									src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
									alt="Chemistry laboratory equipment"
									fill
									className="object-cover rounded-xl"
									priority
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Wave decoration */}
				<div className="absolute inset-x-0 bottom-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="w-full h-auto text-background"
					>
						<path
							fill="currentColor"
							fillOpacity="1"
							d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
				</div>
			</section>

			{/* Features section */}
			<section className="py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
								Why Choose Us
							</div>
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
								Learning Chemistry Has Never Been Easier
							</h2>
							<p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
								Our courses are designed to make complex chemistry concepts accessible
								and engaging for students of all levels.
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

			{/* Featured courses section */}
			<section className="bg-muted py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
								Featured Courses
							</h2>
							<p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
								Explore our most popular chemistry courses designed to help you excel.
							</p>
						</div>
					</div>

					<div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
						{featuredCourses.map((course) => (
							<CardCourse key={course.id} course={course} />
						))}
					</div>

					<div className="flex justify-center">
						<Button asChild size="lg">
							<Link href="/courses">View All Courses</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Testimonials section */}
			<section className="py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
								Testimonials
							</div>
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
								What Our Students Say
							</h2>
							<p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
								Don't just take our word for it. Here's what students have to say about
								our courses.
							</p>
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
						<CardTestimonial
							quote="The interactive simulations helped me visualize molecular interactions in a way textbooks never could. Highly recommended!"
							author="Sarah Johnson"
							role="Pre-med Student"
							avatarUrl="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
					</div>
				</div>
			</section>

			{/* CTA section */}
			<section className="bg-primary text-primary-foreground py-12 md:py-24">
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
			</section>
		</div>
	);
}
