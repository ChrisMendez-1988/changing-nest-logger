import { Injectable, Logger, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  private users = [{ name: 'albert', id: 1 }];

  async findAll() {
    return this.users;
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id === +id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }

  async createUser(createUserDto: any) {
    this.logger.log('creating user');
    return createUserDto;
  }

  async updateUser(updateUserDto: any, id: string) {
    return { id, updateUserDto };
  }

  async DeleteById(id: string) {
    return {
      id,
    };
  }
}
