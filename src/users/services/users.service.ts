import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usersModel: Model<User>) {}

  getUsers() {
    return this.usersModel.find().exec();
  }

  getUser(id: string) {
    return this.usersModel.findById(id);
  }

  createUser(user) {
    const newUser = new this.usersModel(user);
    return newUser.save();
  }

  updateUser(id: string, user) {
    const updatedUser = this.usersModel.findByIdAndUpdate(
      id,
      { $set: user },
      { new: true },
    );
    return updatedUser;
  }

  deleteUser(id: string) {
    return this.usersModel.findByIdAndDelete(id);
  }
}
