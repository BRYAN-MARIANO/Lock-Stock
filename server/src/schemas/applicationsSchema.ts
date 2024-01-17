import { z } from 'zod';

export const ApplicationsUsersSchema = z.object({
 Id_Aplications: z.string().uuid(),
 Name_Aplication: z.string().max(20),
 Email_Aplication: z.string().max(30),
 Category_Aplication: z.string().max(15).optional(),
 Password_Aplication: z.string().uuid(),
 Id_User: z.string().uuid(),
});