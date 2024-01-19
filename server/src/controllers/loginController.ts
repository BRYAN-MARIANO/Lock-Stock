import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/UsersModel';
import { Op } from 'sequelize';
import bcrypt from 'bcrypt'; 


export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Missing username or password' });
  }

  let user = await User.findOne({
    where: {
      username: {
        [Op.eq]: username
      },
      password: {
        [Op.eq]: password
      }
    }
  });

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const PasswordInstance = user.get({ plain: true })
  const isPasswordValid = await bcrypt.compare(password, PasswordInstance.Password_Master_User);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const maxAttempts = 5;
  let currentAttempts = user.get('loginAttempts') || 0;

  if (typeof currentAttempts === 'number' && currentAttempts >= maxAttempts) {
    return res.status(429).json({ message: 'Too many login attempts. Please try again later.' });
  }

  user.set('loginAttempts', 0);
  await user.save();

  const secretKey = process.env.SECRET_KEY || '';
  const userInstance = user.get({ plain: true })
  const token = jwt.sign({ username: userInstance.Name_User }, secretKey, { expiresIn: '720h' })

  return res.json({ message: 'Logged in successfully', token });
};