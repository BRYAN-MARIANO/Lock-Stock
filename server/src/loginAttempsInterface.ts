    import { Request } from "express";

    export interface loginAttempsInterface{
      Id_AttempLogin: string, 
      Location: string,
      Device: string
      Sistem_Operative: string,
      DateLoginError: Date,
      Id_User: string,
    }
    
    interface InterfaceLogin extends Request{
      user?: loginAttempsInterface;
    }

    export default InterfaceLogin;
  


// Export something to ensure this is a module file.
export {};