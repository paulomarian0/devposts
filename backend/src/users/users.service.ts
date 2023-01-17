import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    const payload = await this.prisma.user.create({
      data,
      include: {
        posts: true
      }
    })

    return payload;
  }

  async findAll() {
    const payload = await this.prisma.user.findMany({
      include: {
        posts: true
      }
    })

    return payload;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, data: UpdateUserDto) {
    const payload = await this.prisma.user.update({
      data,
      where: { id }
    })

    return payload
  }

  async delete(id: number) {
    const payload = await this.prisma.user.delete({
      where: { id }
    })
    
    return payload
  }
}
