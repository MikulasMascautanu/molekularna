export interface Course {
	id: string;
	title: string;
	description: string;
	features: React.ReactNode[];
	price: number;
	duration: string;
	slug: string;
}

export interface Lesson {
	id: string;
	courseId: string;
	title: string;
	description: string;
	contentType: "video" | "pdf" | "text";
	contentUrl: string;
	order: number;
}

export interface UserProfile {
	id: string;
	email: string;
	fullName: string;
	avatar?: string;
	role: "student" | "admin";
}

export interface Purchase {
	id: string;
	userId: string;
	courseId: string;
	purchaseDate: Date;
	expiryDate?: Date;
}
