import { TaskDto } from "../models/Task.dto";
import { TaskRepository } from "../repositories/task.repository";


export class TaskUseCase {

  static get = async () => {
    const list = await TaskRepository.get();
    return Promise.resolve({
      message: `success all tasks`,
      success: true,
      info: list
    });
  };

  static post = async (body: TaskDto) => {
    const result = await TaskRepository.post(body);
    return Promise.resolve({
      message: `Task create successfull with ID ${result}`,
      success: true,
      info: null
    });
  };

  static put = async (tasktId: string, body: TaskDto) => {
    const result = await TaskRepository.put(tasktId, body);
    return Promise.resolve({
      message: `Task updated successfull with ID ${result}`,
      success: true,
      info: null
    });
  };

  static delete = async (tasktId: string) => {
    const result = await TaskRepository.delete(tasktId);
    return Promise.resolve({
      message: `Task ID ${tasktId} delete successfull`,
      success: true,
      info: null
    });
  };

}
