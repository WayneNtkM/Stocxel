import { FilterQuery } from 'mongoose';
import User, { UserDocument } from '../models/User.model';
import * as bcrypt from 'bcrypt';

export default class Userservice {
  public static async createUser(input: UserDocument) {
    return User.create(input);
  }

  public static async findOneUser(input: FilterQuery<UserDocument>, options = { lean: true }) {
    return User.findOne(input, null, options);
  }

  public static async loginUser({ email, password }: { email: UserDocument['email']; password: UserDocument['password']; }) {
    const user = await Userservice.findOneUser({ email }, { lean: true });

    if (!user) {
      throw new Error('User does not exist');
    }

    return user;
  }
}