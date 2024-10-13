import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('El email no es válido'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
