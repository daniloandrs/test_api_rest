import { Body, Controller, Get, Post, Route, Tags, SuccessResponse, Put, Delete } from 'tsoa';
import { TaskUseCase } from './usecases/task.usecase';
import { TaskDto } from './models/Task.dto';

@Route('/task')
@Tags('task')
export class TaskController extends Controller {

  @Get('all')
  async get() {
    return await TaskUseCase.get()
  }

  @Post('create')
  @SuccessResponse(200, 'Success Response')
  public async post(
    @Body() body: TaskDto
  ) {
    try {
      return await TaskUseCase.post(body)
    } catch (error) {
      return Promise.reject({ message: 'Internal Server Error' });
    }
  }

  @Put('update/{taskId}')
  @SuccessResponse(200, 'Success Response')
  public async put(
    taskId: string,
    @Body() body: TaskDto
  ) {
    try {
      return await TaskUseCase.put(taskId, body)
    } catch (error) {
      return Promise.reject({ message: 'Internal Server Error' });
    }
  }


  @Delete('delete/{taskId}')
  @SuccessResponse(200, 'Success Response')
  async delete(taskId: string) {
    return await TaskUseCase.delete(taskId);
  }

  @Put('mark_completed/{taskId}')
  @SuccessResponse(200, 'Success Response')
  public async markCompleted(
    taskId: string
  ) {
    try {
      return await TaskUseCase.markCompleted(taskId)
    } catch (error) {
      return Promise.reject({ message: 'Internal Server Error' });
    }
  }

}
