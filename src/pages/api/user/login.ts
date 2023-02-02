import dbConnect from '@/backend/db/connection';
import Userservice from '@/backend/services/User.service';
import { NextApiHandler } from 'next';

dbConnect();

const login:NextApiHandler = async (req, res) => {
  const userInput = req.body;
  const { _id, email, name, image } = await Userservice.loginUser(userInput);
  return res.status(201).json({ _id, email, name, image });
}

export default login;