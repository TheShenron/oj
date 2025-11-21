import z from "zod";

export const loginSchema = z.object({
  magicURL: z
    .string("Please enter a Magic URL")
    .min(5, "Magic URL must be at least 5 characters long"),
});
