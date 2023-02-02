import mongoose, { models } from "mongoose";
import * as bcrypt from 'bcrypt';

export interface IUser {
  email: string;
  password: string;
  image: string;
  name: string;
}

export interface UserDocument extends IUser, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  favoriteStocks: {
    type: Array,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: true,
  }
});

userSchema.index({ email: 1 });

// userSchema.virtual('name').get(function (this: UserDocument) {
//   return this.name;
// });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);

  this.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password).catch((e) => false);
}

const model = models.User || mongoose.model<UserDocument>('User', userSchema)

export default model;
