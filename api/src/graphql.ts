
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateFlashcardInput {
    front: string;
    back: string;
}

export class CreateFolderInput {
    name: string;
}

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

    abstract getFolders(): Folder[] | Promise<Folder[]>;

    abstract getFolder(id: string): Nullable<Folder> | Promise<Nullable<Folder>>;

    abstract getUsers(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createFlashcard(createFlashcardInput?: Nullable<CreateFlashcardInput>): string | Promise<string>;

    abstract createFolder(createFolderInput?: Nullable<CreateFolderInput>): string | Promise<string>;

    abstract createUser(createUserInput: CreateUserInput): string | Promise<string>;

    abstract login(loginInput: LoginInput): AuthResponse | Promise<AuthResponse>;
}

export class Folder {
    id: string;
    name: string;
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

type Nullable<T> = T | null;
