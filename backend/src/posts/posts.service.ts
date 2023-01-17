import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreatePostDto) {
    const payload = await this.prisma.post.create({
      data,
      include: {
        author: true
      }
    })
    return payload
  }

  async findAll() {
    const payload = await this.prisma.post.findMany({
      include: {
        author: true
      }
    })

    return payload
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(id: number, data: UpdatePostDto) {
    const payload = await this.prisma.post.update({
      data,
      where: { id }
    })

    return payload
  }

  async delete(id: number) {
    const payload = await this.prisma.post.delete({
      where:{id}
    })

    return payload
  }
}
