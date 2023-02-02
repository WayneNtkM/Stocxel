import dbConnect from '@/backend/db/connection';
import Userservice from '@/backend/services/User.service';
import { NextApiHandler } from 'next';

dbConnect();

const createUser:NextApiHandler = async (req, res) => {
  const userInput = req.body;
  const user = await Userservice.createUser(userInput);
  return res.status(201).json(user);
}

export default createUser;