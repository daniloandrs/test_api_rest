import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { FirestoreService } from '../../../share/firebase/index';
import { Task, TaskDto } from "../models/Task.dto";

export class TaskRepository {

  static model: string = 'tasks'
  static instanceDB = FirestoreService.getInstance().getFirestoreInstance();

  static get = async (): Promise<Task[]> => {
    const tasksSnapshot = await getDocs(collection(this.instanceDB, this.model));
    const tasksList = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
    return tasksList;
  }

  static post = async (body: TaskDto): Promise<string> => {
    const docRef = await addDoc(collection(this.instanceDB, this.model), body);
    return docRef.id
  }

  static put = async (taskId: string, body: TaskDto): Promise<string> => {
    const instanceref = doc(this.instanceDB, this.model, taskId);
    if (!instanceref) throw new Error("Not found task id")
    await updateDoc(instanceref, { ...body });
    return taskId;
  }

  static delete = async (taskId: string): Promise<string> => {
    const instanceref = doc(this.instanceDB, this.model, taskId);
    if (!instanceref) throw new Error("Not found task id");
    await deleteDoc(instanceref);
    return taskId;
  }
}
