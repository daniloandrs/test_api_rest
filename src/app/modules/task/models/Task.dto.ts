
import { IsNotEmpty, Length } from "class-validator";



export class TaskDto {
    @IsNotEmpty()
    @Length(10, 20)
    title: string;
    description: string | null;
    status: string;
}

export class Task extends TaskDto {
    id: string;
    date: number;
}

