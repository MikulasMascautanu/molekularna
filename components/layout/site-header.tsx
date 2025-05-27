"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, User, FlaskConical } from "lucide-react";
import { courses } from "@/lib/data";

export function SiteHeader() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Possibly for the future
	const otherCourses = courses.filter(
		(course) =>
			!course.slug.includes("organic") && !course.slug.includes("inorganic")
	);

	return (
		<header
			className={cn(
				"sticky top-0 z-40 w-full border-b shadow-lg animate-fade-in",
				isScrolled
					? "bg-[#f9e2e8]/90 backdrop-blur supports-[backdrop-filter]:bg-background/60"
					: "bg-[#f9e2e8]"
			)}
		>
			<div className="container flex h-16 items-center rounded-b-3xl">
				<Link href="/" className="flex items-center gap-3 mr-8">
					<FlaskConical className="h-8 w-8 text-[#e48ca4] drop-shadow-glow animate-bounce-slow" />
					<span className="text-2xl font-extrabold tracking-wide text-[#e48ca4] drop-shadow-glow">
						molekulárna
					</span>
				</Link>

				<div className="flex-1 flex justify-center ">
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList className="gap-3">
							<NavigationMenuItem>
								<NavigationMenuTrigger>Courses</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
										<div>
											<h4 className="mb-2 text-sm font-medium">Organic Chemistry</h4>
											{courses.map((course) => (
												<Link
													key={course.id}
													href={`/kurzy/${course.slug}`}
													className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
												>
													<div className="text-sm font-medium leading-none">
														{course.title}
													</div>
													<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
														{course.description}
													</p>
												</Link>
											))}
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
										About Us
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/contact" legacyBehavior passHref>
									<NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex items-center gap-3 ml-auto">
					<Button
						variant="outline"
						size="icon"
						className="mr-2 bg-white/60 border-[#f9e2e8] hover:bg-[#f9e2e8] hover:text-[#e48ca4] transition-colors duration-200 shadow"
					>
						<Search className="h-5 w-5 text-[#e48ca4]" />
						<span className="sr-only">Search</span>
					</Button>

					<Button
						variant="ghost"
						size="icon"
						asChild
						className="bg-white/60 border border-[#bedbd3] hover:bg-[#bedbd3] hover:text-[#5e5e5e] transition-colors duration-200 shadow"
					>
						<Link href="/account">
							<User className="h-6 w-6 text-[#5e5e5e]" />
							<span className="sr-only">Account</span>
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
