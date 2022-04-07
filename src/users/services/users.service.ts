import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      email: '',
      firstName: '',
      lastName: '',
      rol: 'admin',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(user): User {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  updateUser(id: number, user): User {
    const index = this.users.findIndex((u) => u.id === id);
    const oldUser = this.users[index];
    this.users[index] = { ...oldUser, ...user };
    return this.users[index];
  }

  deleteUser(id: number): User {
    const user = this.users.find((u) => u.id === id);
    this.users = this.users.filter((u) => u.id !== id);
    return user;
  }
}
