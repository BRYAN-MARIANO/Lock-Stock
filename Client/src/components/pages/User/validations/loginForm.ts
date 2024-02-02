import { z } from "zod";


const loginSchema = z.object({
    Email_User: z.string().email({ message: "Ingrese un correo electronico valido" }).refine((value) => /^[^<>\%'" ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    .test(value), {
        message: 'no es un email valido',
      }),


    Password_User: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }).refine((value) => /^[^<>'"%]*$/
.test(value), {
        message: 'no se permiten numeros o caracteres como " < > % \' .',
      }),
})


export default loginSchema;