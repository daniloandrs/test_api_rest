import { IsBoolean, IsNotEmpty, Length } from "class-validator";

export class TaskDto {
    @IsNotEmpty()
    @Length(10, 20)
    title: string;
    description: string | null;
    @IsBoolean()
    status: boolean;
}

export class Task extends TaskDto {
    id: string;
}

