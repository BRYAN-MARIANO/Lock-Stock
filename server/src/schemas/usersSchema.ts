import { z } from 'zod';

const UserSchema = z.object({
  Id_User: z.string().uuid(),
  Password_User: z.string().min(8).max(30).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/, `La contraseña debe tener entre 8 y 30 caracteres, al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial (@$!%*?&)`).optional(),
  Password_Master_User: z.string().min(8).max(30).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/, `La contraseña maestra debe tener entre 8 y 30 caracteres, al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial (@$!%*?&)`).optional(),
  Email_User: z.string().email().max(30),
  Name_User: z.string().min(2).max(20),
  SurName_User: z.string().min(2).max(20).optional(),
  Mobile_User: z.number().int().optional().refine((value) => {
    if (!value) return true;
    return value >= 1000000000 && value <= 9999999999;
  }, 'El número de teléfono debe tener 10 dígitos'),
  Question_Security_User: z.string().min(10).max(30).optional(),
  Answer_Security_User: z.string().min(5).max(30).optional(),
  Device_User: z.string().max(30).optional(),
  Notifications_User: z.string().max(30).optional(),
  loginAttempts: z.number().min(0).max(3).optional(),
  TokenLogedUser:z.string().max(300).optional(),
  ExpiryTokenDate: z.date().optional(),
  Block_User: z.boolean().optional(),
  Delete_User: z.boolean().optional(),
});

export default UserSchema;