"use client";

import { FlaskConical } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
	return (
		<footer className="border-t bg-[#f9e2e8]">
			<div className="container px-4 pt-8 pb-20 md:px-6 flex flex-col items-center justify-center gap-5 rounded-t-3xl shadow-lg animate-fade-in">
				<div className="w-full">
					<div className="container px-4 py-10 md:px-6">
						{/* Columns div */}
						<div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
							<div className="flex items-center gap-3 mb-1">
								<span className="flex items-center gap-2">
									<FlaskConical className="h-8 w-8 text-[#e48ca4] drop-shadow-glow" />
									<span className="text-2xl font-extrabold tracking-wide text-[#e48ca4] drop-shadow-glow">
										molekulárna
									</span>
								</span>
							</div>
							<div>
								<h3 className="text-lg font-semibold mb-4">Courses</h3>
								<ul className="space-y-2 text-sm">
									<li>
										<Link href="/courses/organic" className="hover:text-primary">
											Organic Chemistry
										</Link>
									</li>
									<li>
										<Link href="/courses/inorganic" className="hover:text-primary">
											Inorganic Chemistry
										</Link>
									</li>
									<li>
										<Link href="/courses/biochemistry" className="hover:text-primary">
											Biochemistry
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold mb-4">Contact</h3>
								<ul className="space-y-2 text-sm p-0">
									<li>
										<Link
											href="https://instagram.com/molekularna.cz"
											target="_blank"
											rel="noopener noreferrer"
											className=""
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#e48ca4"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="inline-block align-text-bottom"
											>
												<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
												<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
											</svg>
											<span className="ml-1">@molekularna.cz</span>
										</Link>
									</li>
									<li>
										<Link
											href="mailto:info@molekularna.cz"
											className="hover:text-primary"
										>
											info@molekularna.cz
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold mb-4">Legal</h3>
								<ul className="space-y-2 text-sm">
									<li>
										<Link href="/terms" className="hover:text-primary">
											Terms of Service
										</Link>
									</li>
									<li>
										<Link href="/privacy" className="hover:text-primary">
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link href="/refund" className="hover:text-primary">
											Refund Policy
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center bg-white/40 rounded-t-xl pb-4 pt-4 mt-0 shadow-sm">
				<p className="text-sm text-[#5e5e5e] text-center">
					© {new Date().getFullYear()} molekulárna. All rights reserved.{" "}
					<span className="inline-block animate-wiggle">🧪</span>
				</p>
			</div>
		</footer>
	);
}
