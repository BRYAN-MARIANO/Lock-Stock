import { z } from 'zod';

const UserSchema = z.object({
 Id_User: z.string().uuid(),
 Password_User: z.string(),
 Password_Master_User: z.string(),
 Email_User: z.string().max(30),
 Name_User: z.string().max(20),
 SurName_User: z.string().max(20).optional(),
 Mobile_User: z.number().int().optional(),
 Question_Security_User: z.string().max(60),
 Answer_Security_User: z.string().max(30),
 Device_User: z.string().max(30).optional(),
 Notifications_User: z.string().max(30).optional(),
 Block_User: z.boolean().optional(),
 Delete_User: z.boolean().optional(),
});

export default UserSchema;