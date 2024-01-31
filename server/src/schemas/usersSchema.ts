import { z } from 'zod';

const UserSchema = z.object({
  Id_User: z.string().uuid().max(50).optional(), // quitar el optional cuando este montado con el front
  Password_User: z.string().min(8).max(100).optional(),
  Password_Master_User: z.string().min(8).max(100).optional(),
  Email_User: z.string().email().min(7).max(50).optional(),
  Name_User: z.string().min(2).max(40),
  SurName_User: z.string().min(2).max(40).optional(),
  Mobile_User: z.number().optional(),
  Question_Security_User: z.string().min(10).max(200).optional(),
  Answer_Security_User: z.string().min(5).max(30).optional(),
  Device_User: z.string().optional(),
  Notifications_User: z.string().max(30).optional(),
  loginAttempts: z.number().min(0).max(2).optional(),
  TokenLogedUser:z.string().max(300).optional(),
  ExpiryTokenDate: z.date().optional(),
  Block_User: z.boolean().optional(),
  Delete_User: z.boolean().optional(),
});

export default UserSchema;
