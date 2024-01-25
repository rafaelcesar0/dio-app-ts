import { z } from 'zod';

export type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export const createUserFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Campo obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  email: z
    .string()
    .min(1, 'Campo obrigatório')
    .email('Formato de email inválido')
    .toLowerCase()
    .refine((email) => {
      return email.endsWith('@gmail.com') || email.endsWith('@hotmail.com');
    }, 'Aceitamos apenas: "gmail" e "hotmail"'),
  senha: z.string().min(1, 'Campo obrigatório').min(6, 'Mínimo 6 caracteres'),
});
