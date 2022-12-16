// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/users.dto';
import { User } from 'src/typeorm/user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUsersById(username: string) {}
  async findOne(username: string): Promise<any> {
    return this.userRepository.findOne({
      where: {
        username: username,
      },
    });
    //return this.userRepository.find((user) => user.username === username);
  }
  // private readonly users: any[];

  // constructor() {
  //   this.users = [
  //     {
  //       userId: 1,
  //       username: 'latifah',
  //       password: '12345',
  //       pet: { name: 'shiro', picId: 1 },
  //     },
  //     {
  //       userId: 2,
  //       username: 'latif',
  //       password: 'secret',
  //       pet: { name: 'kuro', picId: 2 },
  //     },
  //     {
  //       userId: 3,
  //       username: 'maria',
  //       password: 'guess',
  //       pet: { name: 'jenny', picId: 3 },
  //     },
  //   ];
  // }
}
