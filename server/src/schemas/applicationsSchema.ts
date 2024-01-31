import { z } from 'zod';

export const ApplicationsSchema = z.object({
 Id_Aplications: z.string().uuid().max(36),
 Name_Aplication: z.string().max(20),
 Email_Aplication: z.string().max(40),
 Category_Aplication: z.string().max(15).optional(),
 Password_Aplication: z.string().min(8).max(15).uuid(),
 Id_User: z.string().uuid().max(36).optional(), // quitar el optional cuando este montado con el front
});
