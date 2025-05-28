"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen } from "lucide-react";
import { Course } from "@/types";

interface CardCourseProps {
	course: Course;
	className?: string;
}

export function CardCourse({ course, className }: CardCourseProps) {
	const levelColor = {
		beginner:
			"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
		intermediate:
			"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
		advanced:
			"bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
	};

	return (
		<motion.div
			whileHover={{ y: -5 }}
			transition={{ type: "spring", stiffness: 300 }}
		>
			<Card className={cn("overflow-hidden h-full flex flex-col", className)}>
				<div className="relative aspect-video overflow-hidden">
					{/* Removed course.image */}
					{/* <Image
						alt={course.title}
						fill
						className="object-cover transition-transform duration-300 hover:scale-105"
					/> */}
					<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
					<div className="absolute bottom-4 left-4">
						{/* Removed course.level */}
					</div>
				</div>
				<CardContent className="flex-1 p-6">
					<h3 className="text-xl font-bold tracking-tight mb-2">{course.title}</h3>
					<p className="text-muted-foreground text-sm mb-4">{course.description}</p>
					<div className="flex items-center text-sm text-muted-foreground gap-4 mt-auto">
						<div className="flex items-center">
							<Clock className="h-4 w-4 mr-1" />
							<span>{course.duration}</span>
						</div>
						<div className="flex items-center">
							<BookOpen className="h-4 w-4 mr-1" />
							<span>12 lessons</span>
						</div>
					</div>
				</CardContent>
				<CardFooter className="border-t p-6 flex justify-between items-center bg-muted/40">
					<div className="font-bold text-lg">
						{typeof course.price === "number"
							? `od ${course.price.toLocaleString("cs-CZ")} Kč`
							: course.price}
					</div>
					<Button
						asChild
						className="font-medium bg-pink text-base px-6 py-2 rounded-md shadow transition-colors hover:bg-pink-light hover:text-pink-foreground focus:bg-pink-light focus:text-pink-foreground"
					>
						<Link href={`/kurzy/${course.slug}`}>Zobrazit</Link>
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
