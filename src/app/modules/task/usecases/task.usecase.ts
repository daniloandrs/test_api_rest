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
      message: `Task create successfull`,
      success: true,
      info: result
    });
  };

  static put = async (tasktId: string, body: TaskDto) => {
    const result = await TaskRepository.put(tasktId, body);
    return Promise.resolve({
      message: `Task updated successfull`,
      success: true,
      info: result
    });
  };

  static delete = async (tasktId: string) => {
    const result = await TaskRepository.delete(tasktId);
    return Promise.resolve({
      message: `Task delete successfull`,
      success: true,
      info: result
    });
  };

  static markCompleted = async (tasktId: string) => {
    const result = await TaskRepository.markCompleted(tasktId);
    return Promise.resolve({
      message: `Task completed successfull`,
      success: true,
      info: result
    });
  };

}
