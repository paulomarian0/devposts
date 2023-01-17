import { Prisma } from "@prisma/client";

export class CreateUserDto {
    email: string;
    name: string;
    password: string;
}
