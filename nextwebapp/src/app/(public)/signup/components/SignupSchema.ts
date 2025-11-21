import { z } from "zod";

export const signupSchema = z.object({
  email: z
    .email("Please enter a valid email")
    .min(5, "Email must be at least 5 characters long"),
});
