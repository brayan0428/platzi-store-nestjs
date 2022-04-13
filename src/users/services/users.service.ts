import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  getUsers() {
    return this.usersRepo.find();
  }

  getUser(id: number) {
    return this.usersRepo.findOne(id);
  }

  createUser(user) {
    const newUser = this.usersRepo.create(user);
    return this.usersRepo.save(newUser);
  }

  async updateUser(id: number, changes) {
    const user = await this.usersRepo.findOne(id);
    this.usersRepo.merge(user, changes);
    return this.usersRepo.save(user);
  }

  deleteUser(id: number) {
    return this.usersRepo.delete(id);
  }
}
