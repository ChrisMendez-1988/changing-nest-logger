import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.usersService.findById(id);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    this.logger.log('creating user in controller');
    const user = await this.usersService.createUser(createUserDto);
    this.logger.log('finalized user in controller');
    return user;
  }

  @Patch(':id')
  async updateUser(@Body() updateUserDto: any, @Param('id') id: string) {
    return await this.usersService.updateUser(updateUserDto, id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.usersService.DeleteById(id);
  }
}
