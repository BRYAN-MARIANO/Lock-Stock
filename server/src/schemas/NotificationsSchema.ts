import { z } from 'zod';

export const NotificationsSchema = z.object({
    Id_Notification: z.string().max(36).uuid(),
    Notes_Notification: z.string().max(30),
    Id_User: z.string().uuid().max(36).optional(), // quitar el optional cuando este montado con el front
});

