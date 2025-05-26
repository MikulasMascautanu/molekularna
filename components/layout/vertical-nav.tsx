"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  BeakerIcon,
  Compass,
  FileText,
  FlaskConical,
  GraduationCap,
  Home,
  Menu,
  Users,
  X,
  BookOpen,
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Organic Chemistry', href: '/courses/organic', icon: FlaskConical },
  { name: 'Inorganic Chemistry', href: '/courses/inorganic', icon: BeakerIcon },
  { name: 'Physical Chemistry', href: '/courses/physical', icon: Compass },
  { name: 'Study Resources', href: '/resources', icon: FileText },
  { name: 'About Us', href: '/about', icon: Users },
];

export function VerticalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Navigation sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-background shadow-lg transition duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FlaskConical className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ChemistryMaster</span>
            </Link>
          </div>

          {/* Nav items */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Auth buttons */}
          <div className="border-t p-4">
            <div className="grid gap-2">
              <Button asChild variant="outline" className="w-full justify-start" onClick={() => setIsOpen(false)}>
                <Link href="/login">
                  <GraduationCap className="mr-2 h-4 w-4" /> Log In
                </Link>
              </Button>
              <Button asChild className="w-full justify-start" onClick={() => setIsOpen(false)}>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}