import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../infrastructure/config/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: Prisma.UserCreateInput) {
    createUserInput.createdAt = new Date();
    createUserInput.updatedAt = new Date();
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  update(updateUserInput: Prisma.UserUncheckedUpdateInput) {
    return this.prisma.user.update({
      where: { id: Number(updateUserInput.id) },
      data: updateUserInput,
      select: { username: true, password: true },
    });
  }

  delete(deleteUserInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where: {
        id: Number(deleteUserInput.id),
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: id,
    });
  }
}
