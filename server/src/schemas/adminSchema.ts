import { z } from 'zod';

const AdminSchema = z.object({
  Id_Admin: z.string().uuid().max(36),
  Name_Admin: z.string().min(2).max(15),
  Password_Admin: z.string().min(8).max(36),
  Id_User: z.string().uuid().max(36).optional(), // quitar el optional cuando este montado con el front

});

export default AdminSchema;