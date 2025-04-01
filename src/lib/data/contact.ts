import { z } from "zod";
import translate from "@/lib/locales/function";

// Define the schema for contact form validation
export const ContactFormSchema = z.object({
  fullName: z.string().min(2, { message: translate("fullNameMin") }),
  email: z.string().email({ message: translate("emailInvalid") }),
  phoneNumber: z.string().optional(),
  serviceType: z.string().optional(),
  message: z.string().min(10, { message: translate("messageMin") }),
});

// Type for the form data
export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Type for the response
export type SubmitResponse = {
  success: boolean;
  message: string;
};
