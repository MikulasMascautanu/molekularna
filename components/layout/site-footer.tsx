"use client";

import Link from 'next/link';
import { FlaskConical } from 'lucide-react';
import { ModeToggle } from '@/components/ui/mode-toggle';

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">molekulárna</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium chemistry education for students at all levels.
            </p>
            <ModeToggle />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-primary">All Courses</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Course Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/organic" className="hover:text-primary">Organic Chemistry</Link></li>
              <li><Link href="/courses/inorganic" className="hover:text-primary">Inorganic Chemistry</Link></li>
              <li><Link href="/courses/physical" className="hover:text-primary">Physical Chemistry</Link></li>
              <li><Link href="/courses/biochemistry" className="hover:text-primary">Biochemistry</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-primary">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} molekulárna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}