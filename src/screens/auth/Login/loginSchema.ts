import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('El email no es válido'),
  password: z
    .string()
    .min(1, 'La contraseña obligatoria')
    .max(16, 'La contraseña debe tener menos de 16 caracteres'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
