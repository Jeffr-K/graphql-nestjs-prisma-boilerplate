import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: Prisma.UserCreateInput) {
    return this.userService.create(createUserInput);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: Prisma.UserUncheckedUpdateInput) {
    return this.userService.update(updateUserInput);
  }

  @Mutation('deleteUser')
  delete(@Args('deleteUserInput') deleteUserInput: Prisma.UserWhereUniqueInput) {
    return this.userService.delete(deleteUserInput);
  }

  // TODO: filter 조건 추가 [50:00] 다시보기
  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  // TODO: 조금 더 자세히 살펴봐야 함.
  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne({ id });
  }
}
