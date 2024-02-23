import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, {
      message: "Password must be 6 latter's Long",
    })
    .max(15, {
      message: "Password can only be 15 latter's Long",
    }),
});
