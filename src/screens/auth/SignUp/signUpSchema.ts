import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;
export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(5, 'El nombre debe tener al menos 5 caracteres')
    .max(50, 'El nombre debe tener menos de 50 caracteres')
    .transform(stringUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(5, 'El apellido debe tener al menos 5 caracteres')
    .max(50, 'El apellido debe tener menos de 50 caracteres')
    .transform(stringUtils.capitalizeFirstLetter),
  username: z
    .string()
    .min(5, 'El nombre de usuario debe tener al menos 5 caracteres')
    .regex(userNameRegex, 'El nombre de usuario no es válido')
    .toLowerCase(),
  email: z.string().email('El email no es válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
