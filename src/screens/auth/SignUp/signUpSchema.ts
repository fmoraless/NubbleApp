import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;
export const signUpSchema = z.object({
  username: z
    .string()
    .regex(userNameRegex, 'El nombre de usuario no es válido')
    .toLowerCase(),
  fullName: z
    .string()
    .min(5, 'El nombre completo debe tener al menos 5 caracteres')
    .max(50, 'El nombre completo debe tener menos de 50 caracteres')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  email: z.string().email('El email no es válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
