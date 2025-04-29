import { z } from "zod";

// Define the schema for contact form validation
export const ContactFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  serviceType: z.string().optional(),
  message: z.string().min(10),
});

// Type for the form data
export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Type for the response
export type SubmitResponse = {
  success: boolean;
  message: string;
};
