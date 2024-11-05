import { z } from "zod";

export const signUpSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters long"),
	name: z.string().min(2, "Name must be at least 2 characters long"),
});
export const signInSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters long"),
});
