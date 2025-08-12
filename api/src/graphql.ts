
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class Flashcard {
    id: string;
    front: string;
    back: string;
}

export abstract class IQuery {
    abstract getFlashcards(): Flashcard[] | Promise<Flashcard[]>;

    abstract getUsers(): User[] | Promise<User[]>;
}

export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export class AuthResponse {
    token?: Nullable<string>;
    error?: Nullable<string>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): string | Promise<string>;

    abstract login(loginInput: LoginInput): AuthResponse | Promise<AuthResponse>;
}

type Nullable<T> = T | null;
