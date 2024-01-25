import { string, z } from "zod";




const validateMaster = z.object({
    passwordMaster: string()
})