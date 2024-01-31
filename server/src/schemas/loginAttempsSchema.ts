import { z } from 'zod';

const LoginAttempsSchema = z.object({
  Id_AttempLogin: z.string().uuid().max(36).optional(),
  Location: z.string().max(50).optional(),
  Device: z.string().max(50).optional(),
  Sistem_Operative: z.string().max(20).optional(),
  DateLoginError: z.date().optional(),
  Ip_Direction: z.string().max(30).optional(),
  Id_User: z.string().uuid().max(36).optional(), // quitar el optional cuando este montado con el front
});

export default LoginAttempsSchema;
