"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, ShoppingCart, User, FlaskConical } from 'lucide-react';
import { allCourses } from '@/lib/data';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const organicCourses = allCourses.filter(course => course.slug.includes('organic'));
  const inorganicCourses = allCourses.filter(course => course.slug.includes('inorganic'));
  const otherCourses = allCourses.filter(
    course => !course.slug.includes('organic') && !course.slug.includes('inorganic')
  );

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full border-b",
      isScrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        : "bg-background"
    )}>
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <FlaskConical className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">molekulárna</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Organic Chemistry</h4>
                    {organicCourses.map((course) => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.slug}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{course.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {course.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Inorganic Chemistry</h4>
                    {inorganicCourses.map((course) => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.slug}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{course.title}</div>
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

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="outline" size="icon" className="mr-2">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}