import { z } from "zod";



const registerSchema = z.object({

    Email_User: z.string().email({ message: "Ingrese un correo electronico valido" }).refine((value) => /^[^<>\%'" ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    .test(value), {
        message: 'no es un email valido',
      }),


    Name_User: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).refine((value) => /^[^<>\%'" ]+$/
    .test(value), {
        message: 'no es un nombre valido',
      }),

    SurName_User: z.string().min(2, { message: "Los apellidos deben tener al menos 2 caracteres" }).refine((value) =>  /^[^<>\%'" ]+$/.test(value), {
        message: 'no es un apellido valido',
      }),


    Mobile_User: z.string().min(9, { message: "El número de teléfono debe tener al menos 10 caracteres" }).refine((value) => /^[^<>\%'" ]+$/.test(value), {
        message: 'no es un numero valido',
      }),

    Password_User: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }).refine((value) => /^[^<>'"%]*$/
    .test(value), {
        message: 'no se permiten numeros o caracteres como " < > % \' .',
      }),

    Confirm_Password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }).refine((value) => /^[^<>'"%]*$/.test(value), {
        message: 'no se permiten numeros o caracteres como " < > % \' .',
      }),

    terms: z.boolean().refine((value) => value === true, {
        message: "Debes aceptar los términos y condiciones.",
      }),

  }).refine(data => data.Password_User === data.Confirm_Password, {
    message: 'Deben coincidir las contraseñas',
    path: ['Confirm_Password']
  })

export default registerSchema;