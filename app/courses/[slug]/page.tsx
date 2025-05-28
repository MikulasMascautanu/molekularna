import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { courses } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	BookOpen,
	Clock,
	Award,
	BarChart,
	CheckCircle,
	PlayCircle,
	FileText,
	Download,
	Users,
	Star,
} from "lucide-react";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const course = courses.find((course) => course.slug === params.slug);

	if (!course) {
		return {
			title: "Course Not Found | ChemistryMaster",
			description: "The requested course could not be found.",
		};
	}

	return {
		title: `${course.title} | ChemistryMaster`,
		description: course.description,
		keywords: `chemistry course, ${course.title.toLowerCase()}, chemistry education, chemistry`,
	};
}

export async function generateStaticParams() {
	return courses.map((course) => ({
		slug: course.slug,
	}));
}

// Mock data for course modules and lessons
const courseLessons = [
	{
		id: "module-1",
		title: "Introduction to the Course",
		lessons: [
			{
				id: "lesson-1-1",
				title: "Course Overview",
				duration: "10:30",
				type: "video",
			},
			{
				id: "lesson-1-2",
				title: "How to Use This Course",
				duration: "08:45",
				type: "video",
			},
			{
				id: "lesson-1-3",
				title: "Required Materials",
				duration: "05:20",
				type: "video",
			},
		],
	},
	{
		id: "module-2",
		title: "Foundational Concepts",
		lessons: [
			{
				id: "lesson-2-1",
				title: "Basic Principles",
				duration: "15:20",
				type: "video",
			},
			{
				id: "lesson-2-2",
				title: "Nomenclature Rules",
				duration: "20:15",
				type: "video",
			},
			{ id: "lesson-2-3", title: "Practice Problems", type: "pdf" },
			{
				id: "lesson-2-4",
				title: "Concept Review",
				duration: "12:30",
				type: "video",
			},
		],
	},
	{
		id: "module-3",
		title: "Advanced Topics",
		lessons: [
			{
				id: "lesson-3-1",
				title: "Complex Structures",
				duration: "25:10",
				type: "video",
			},
			{
				id: "lesson-3-2",
				title: "Reaction Mechanisms",
				duration: "30:45",
				type: "video",
			},
			{
				id: "lesson-3-3",
				title: "Lab Demonstration",
				duration: "18:20",
				type: "video",
			},
			{ id: "lesson-3-4", title: "Practice Worksheet", type: "pdf" },
			{ id: "lesson-3-5", title: "Module Assessment", type: "quiz" },
		],
	},
];

// Mock instructor data
const instructor = {
	name: "Dr. Alexander Reed",
	avatar:
		"https://images.pexels.com/photos/8851517/pexels-photo-8851517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	credentials: "Ph.D. in Chemistry from MIT",
	bio: "Dr. Reed has over 15 years of experience teaching chemistry at university level. His research focuses on organic synthesis and catalysis, with over 40 published papers in peer-reviewed journals.",
};

// Mock reviews
const reviews = [
	{
		id: "1",
		name: "Jessica Chen",
		rating: 5,
		date: "March 15, 2025",
		avatar:
			"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		comment:
			"This course completely transformed my understanding of organic chemistry. The visualizations and explanations are incredibly clear and helped me grasp complex concepts that I struggled with for years.",
	},
	{
		id: "2",
		name: "Michael Torres",
		rating: 4,
		date: "February 23, 2025",
		avatar:
			"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		comment:
			"Dr. Reed is an excellent instructor who clearly knows his subject matter deeply. The course is well-structured and the practice problems were extremely helpful in reinforcing the concepts.",
	},
	{
		id: "3",
		name: "Sarah Johnson",
		rating: 5,
		date: "January 10, 2025",
		avatar:
			"https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		comment:
			"As a pre-med student, this course was exactly what I needed to excel in my chemistry requirements. The interactive models and simulations made abstract concepts much more tangible.",
	},
];

export default function CourseDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	const course = courses.find((course) => course.slug === params.slug);

	if (!course) {
		notFound();
	}

	// Calculate total course duration
	const totalLessons = courseLessons.reduce(
		(acc, module) => acc + module.lessons.length,
		0
	);

	// Calculate average rating
	const averageRating =
		reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

	return (
		<div className="bg-background">
			{/* Hero section with course image */}
			<div className="relative h-[300px] md:h-[400px]">
				{/* Removed course.image */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
				<div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
					<div className="container max-w-6xl">
						{/* Removed course.level */}
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
							{course.title}
						</h1>
						<p className="text-white/80 md:text-lg max-w-3xl">{course.description}</p>
					</div>
				</div>
			</div>

			<div className="container max-w-6xl py-8 px-4 md:px-6">
				<div className="grid md:grid-cols-3 gap-8">
					{/* Main content */}
					<div className="md:col-span-2 space-y-8">
						{/* Course overview tabs */}
						<Tabs defaultValue="overview" className="w-full">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="overview">Overview</TabsTrigger>
								<TabsTrigger value="curriculum">Curriculum</TabsTrigger>
								<TabsTrigger value="instructor">Instructor</TabsTrigger>
							</TabsList>

							<TabsContent value="overview" className="space-y-6 mt-6">
								<div>
									<h2 className="text-2xl font-bold mb-4">About This Course</h2>
									<p className="text-muted-foreground">
										This comprehensive course is designed to provide students with a deep
										understanding of {course.title.toLowerCase()}. Through a combination
										of video lectures, interactive exercises, and practical applications,
										you'll develop the skills needed to excel in this critical area of
										chemistry.
									</p>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
									<div className="grid sm:grid-cols-2 gap-3">
										{[
											"Fundamental principles and theories",
											"Problem-solving strategies and techniques",
											"Laboratory methods and safety protocols",
											"Real-world applications and case studies",
											"Critical analysis and experimental design",
											"Advanced concepts and current research",
										].map((item, index) => (
											<div key={index} className="flex items-start gap-2">
												<CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
												<span>{item}</span>
											</div>
										))}
									</div>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
									<p className="text-muted-foreground mb-2">
										Before taking this course, you should have:
									</p>
									<ul className="list-disc pl-5 space-y-1 text-muted-foreground">
										<li>Basic understanding of general chemistry principles</li>
										<li>Familiarity with algebraic equations and scientific notation</li>
										<li>Completion of introductory chemistry courses (recommended)</li>
									</ul>
								</div>
							</TabsContent>

							<TabsContent value="curriculum" className="mt-6">
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<h2 className="text-2xl font-bold">Course Curriculum</h2>
										<div className="text-sm text-muted-foreground">
											{totalLessons} lessons • {course.duration}
										</div>
									</div>

									<Accordion type="single" collapsible className="w-full">
										{courseLessons.map((module, index) => (
											<AccordionItem key={module.id} value={module.id}>
												<AccordionTrigger className="hover:bg-muted/50 px-4 rounded-md">
													<div className="flex items-center text-left">
														<span className="font-semibold">
															Module {index + 1}: {module.title}
														</span>
														<Badge variant="outline" className="ml-3">
															{module.lessons.length} lessons
														</Badge>
													</div>
												</AccordionTrigger>
												<AccordionContent className="px-4">
													<div className="space-y-2 pt-2">
														{module.lessons.map((lesson) => (
															<div
																key={lesson.id}
																className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors"
															>
																<div className="flex items-center gap-3">
																	{lesson.type === "video" ? (
																		<PlayCircle className="h-5 w-5 text-primary" />
																	) : lesson.type === "pdf" ? (
																		<FileText className="h-5 w-5 text-primary" />
																	) : (
																		<FileText className="h-5 w-5 text-primary" />
																	)}
																	<span>{lesson.title}</span>
																</div>
																{lesson.duration && (
																	<div className="text-sm text-muted-foreground flex items-center">
																		<Clock className="h-4 w-4 mr-1" />
																		{lesson.duration}
																	</div>
																)}
															</div>
														))}
													</div>
												</AccordionContent>
											</AccordionItem>
										))}
									</Accordion>
								</div>
							</TabsContent>

							<TabsContent value="instructor" className="mt-6">
								<div className="space-y-6">
									<h2 className="text-2xl font-bold">Meet Your Instructor</h2>

									<div className="flex flex-col md:flex-row gap-6 items-start">
										<Avatar className="h-24 w-24 border">
											<AvatarImage src={instructor.avatar} alt={instructor.name} />
											<AvatarFallback>
												{instructor.name
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</AvatarFallback>
										</Avatar>

										<div className="space-y-3">
											<div>
												<h3 className="text-xl font-semibold">{instructor.name}</h3>
												<p className="text-sm text-muted-foreground">
													{instructor.credentials}
												</p>
											</div>

											<p className="text-muted-foreground">{instructor.bio}</p>

											<div className="pt-2">
												<Button variant="outline" size="sm">
													View Full Profile
												</Button>
											</div>
										</div>
									</div>
								</div>
							</TabsContent>
						</Tabs>

						{/* Student reviews */}
						<div className="pt-4">
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-2xl font-bold">Student Reviews</h2>
								<div className="flex items-center">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${
												i < Math.round(averageRating)
													? "text-yellow-500 fill-yellow-500"
													: "text-muted-foreground"
											}`}
										/>
									))}
									<span className="ml-2 font-medium">{averageRating.toFixed(1)}</span>
									<span className="ml-1 text-muted-foreground">({reviews.length})</span>
								</div>
							</div>

							<div className="space-y-6">
								{reviews.map((review) => (
									<div
										key={review.id}
										className="border rounded-lg p-4 hover:bg-muted/20 transition-colors"
									>
										<div className="flex justify-between items-start mb-3">
											<div className="flex items-center gap-3">
												<Avatar>
													<AvatarImage src={review.avatar} alt={review.name} />
													<AvatarFallback>
														{review.name
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</AvatarFallback>
												</Avatar>
												<div>
													<div className="font-medium">{review.name}</div>
													<div className="text-xs text-muted-foreground">{review.date}</div>
												</div>
											</div>
											<div className="flex">
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < review.rating
																? "text-yellow-500 fill-yellow-500"
																: "text-muted-foreground"
														}`}
													/>
												))}
											</div>
										</div>
										<p className="text-muted-foreground">{review.comment}</p>
									</div>
								))}

								<Button variant="outline" className="w-full">
									View All Reviews
								</Button>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Course info card */}
						<div className="border rounded-xl overflow-hidden bg-card">
							<div className="p-6 space-y-4">
								<div className="text-3xl font-bold">${course.price}</div>

								<Button className="w-full text-base" size="lg">
									Enroll Now
								</Button>

								<Button variant="outline" className="w-full">
									Add to Cart
								</Button>

								<div className="text-sm text-center text-muted-foreground pt-2">
									30-Day Money-Back Guarantee
								</div>
							</div>

							<Separator />

							<div className="p-6 space-y-4">
								<h3 className="font-semibold">This Course Includes:</h3>

								<div className="space-y-3">
									<div className="flex items-center gap-3 text-sm">
										<PlayCircle className="h-5 w-5 text-muted-foreground" />
										<span>24 hours of on-demand video</span>
									</div>
									<div className="flex items-center gap-3 text-sm">
										<FileText className="h-5 w-5 text-muted-foreground" />
										<span>15 downloadable resources</span>
									</div>
									<div className="flex items-center gap-3 text-sm">
										<Download className="h-5 w-5 text-muted-foreground" />
										<span>Lifetime access</span>
									</div>
									<div className="flex items-center gap-3 text-sm">
										<Users className="h-5 w-5 text-muted-foreground" />
										<span>Access on mobile and TV</span>
									</div>
									<div className="flex items-center gap-3 text-sm">
										<Award className="h-5 w-5 text-muted-foreground" />
										<span>Certificate of completion</span>
									</div>
								</div>
							</div>

							<Separator />

							<div className="p-6">
								<Button variant="outline" className="w-full">
									Gift This Course
								</Button>
							</div>
						</div>

						{/* Course stats */}
						<div className="grid grid-cols-2 gap-3">
							<div className="border rounded-lg p-4 flex flex-col items-center text-center">
								<BookOpen className="h-6 w-6 text-primary mb-2" />
								<div className="text-xl font-semibold">{totalLessons}</div>
								<div className="text-xs text-muted-foreground">Lessons</div>
							</div>
							<div className="border rounded-lg p-4 flex flex-col items-center text-center">
								<Clock className="h-6 w-6 text-primary mb-2" />
								<div className="text-xl font-semibold">{course.duration}</div>
								<div className="text-xs text-muted-foreground">Duration</div>
							</div>
							{/* Removed course.level */}
							<div className="border rounded-lg p-4 flex flex-col items-center text-center">
								<Award className="h-6 w-6 text-primary mb-2" />
								<div className="text-xl font-semibold">Yes</div>
								<div className="text-xs text-muted-foreground">Certificate</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
