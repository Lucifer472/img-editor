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

export const ContactSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "Full Name must be a minimum of 5 latter's",
    })
    .max(20),
  email: z.string().email(),
  subject: z
    .string()
    .min(20, {
      message: "Subject must have minimum 20 latter's",
    })
    .max(50),
  msg: z
    .string()
    .min(50, {
      message: "Message must have minimum of 50 latter's",
    })
    .max(225, {
      message: "Message can only be 220 latter's Long",
    }),
});
