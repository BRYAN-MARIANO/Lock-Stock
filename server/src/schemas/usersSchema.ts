import { z } from 'zod';

const UserSchema = z.object({
  Id_User: z.string().uuid(),
  Password_User: z.string().min(8).max(30).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/),
  Password_Master_User: z.string().min(8).max(30).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/),
  Email_User: z.string().email().max(30),
  Name_User: z.string().min(2).max(20),
  SurName_User: z.string().min(2).max(20).optional(),
  Mobile_User: z.number().int().optional().refine((value) => {
    if (!value) return true;
    return value >= 1000000000 && value <= 9999999999;
  }, 'El número de teléfono debe tener 10 dígitos'),
  Question_Security_User: z.string().min(10).max(60),
  Answer_Security_User: z.string().min(5).max(30),
  Device_User: z.string().max(30).optional(),
  Notifications_User: z.string().max(30).optional(),
  loginAttempts: z.number().min(0).max(3),
  Block_User: z.boolean().optional(),
  Delete_User: z.boolean().optional(),
});

export default UserSchema;