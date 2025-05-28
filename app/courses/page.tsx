import { Suspense } from "react";
import { courses } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
	title: "All Courses | ChemistryMaster",
	description: "Browse our complete catalog of chemistry courses for all levels",
};

function CoursesSkeleton() {
	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{[...Array(6)].map((_, i) => (
				<div key={i} className="space-y-3">
					<Skeleton className="h-[200px] w-full rounded-xl" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-4/5" />
					<div className="flex justify-between">
						<Skeleton className="h-10 w-24" />
						<Skeleton className="h-10 w-20" />
					</div>
				</div>
			))}
		</div>
	);
}

export default function CoursesPage() {
	const otherCourses = courses.filter(
		(course) =>
			!course.slug.includes("organic") && !course.slug.includes("inorganic")
	);

	return (
		<div className="container py-10 px-4 md:px-6">
			<div className="space-y-2 mb-10">
				<h1 className="text-3xl font-bold tracking-tight">Chemistry Courses</h1>
				<p className="text-muted-foreground">
					Explore our comprehensive selection of chemistry courses designed for all
					levels.
				</p>
			</div>

			<div className="space-y-10">
				<section>
					<h2 className="text-2xl font-semibold mb-6">Organic Chemistry</h2>
					<Suspense fallback={<CoursesSkeleton />}>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{/* {organicCourses.map((course) => (
							))} */}
						</div>
					</Suspense>
				</section>

				<Separator />

				<section>
					<h2 className="text-2xl font-semibold mb-6">Inorganic Chemistry</h2>
					<Suspense fallback={<CoursesSkeleton />}>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{/* {inorganicCourses.map((course) => (
							))} */}
						</div>
					</Suspense>
				</section>

				<Separator />

				<section>
					<h2 className="text-2xl font-semibold mb-6">Other Chemistry Courses</h2>
					<Suspense fallback={<CoursesSkeleton />}>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{/* {otherCourses.map((course) => (
							))} */}
						</div>
					</Suspense>
				</section>
			</div>
		</div>
	);
}
