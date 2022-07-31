
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class UpdateUserInput {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class DeleteUserInput {
    id: number;
}

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract deleteUser(deleteUserInput: DeleteUserInput): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
