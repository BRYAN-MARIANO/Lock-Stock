import bcrypt from 'bcrypt';
import { Request, Response }from 'express';
import UsersModel from '../models/UsersModel';




export const userPostMaster = async (req: Request, res: Response) => {
  try {

    const { id } = req.params;



     let idUser =   await UsersModel.findOne({
            where: {
                Id_User: id
            },
      })

      
    console.log('******** idUser es igual:', idUser)

    const passwordId= idUser?.get('Password_Master_User')

    

    console.log('esta es la passwordId', passwordId)

    const { Password_Master_User } = req.body;

    console.log('***** la password master es', Password_Master_User)


    if (!Password_Master_User &&  !id) {
        res.status(500).json({message: 'no envio credenciales'})
    }


  
        const user = await UsersModel.findOne({
            where: {
                Id_User: req.body.Id_User
            },
      })
      console.log('que es el req.body.Id_User', req.body.Id_User)



      console.log('que es el user',user)
      console.log('password del req.body',req.body.Password_Master_User)


      const IdUser = user?.get('Password_Master_User')

      console.log('encontro la passwordMaster', IdUser)



        const passwordDatabase = user?.get('Password_Master_User')
        console.log('password de la database', passwordDatabase)



      if (typeof passwordDatabase === 'string' && typeof passwordId === 'string') {

        const passwordCompare = await bcrypt.compare(Password_Master_User, passwordId)

        console.log('valor de la comparacion',passwordCompare)

 
            res.status(200).json({mesagge: true})
        


    }

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
