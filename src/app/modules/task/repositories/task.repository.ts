import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { FirestoreService } from '../../../share/firebase/index';
import { Task, TaskDto } from "../models/Task.dto";

export class TaskRepository {

  static model: string = 'tasks'
  static instanceDB = FirestoreService.getInstance().getFirestoreInstance();

  static get = async (): Promise<Task[]> => {
    const tasksSnapshot = await getDocs(collection(this.instanceDB, this.model));
    const tasksList = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
    const sort = tasksList.sort((a: Task, b: Task) => b.date - a.date);
    return sort;
  }

  static post = async (body: TaskDto): Promise<Task> => {
    const data = {
      ...body,
      date: + new Date()
    }
    const docRef = await addDoc(collection(this.instanceDB, this.model), data);
    const docSnap = await getDoc(docRef);
    return { id: docRef.id, ...docSnap.data() } as Task
  }

  static put = async (taskId: string, body: TaskDto): Promise<Task> => {
    const instanceref = doc(this.instanceDB, this.model, taskId);
    if (!instanceref) throw new Error("Not found task id")
    await updateDoc(instanceref, { ...body });
    const docSnap = await getDoc(instanceref);
    return { id: instanceref.id, ...docSnap.data() } as Task
  }

  static delete = async (taskId: string): Promise<Task> => {
    const instanceref = doc(this.instanceDB, this.model, taskId);
    const docSnap = await getDoc(instanceref);
    if (!instanceref) throw new Error("Not found task id");
    await deleteDoc(instanceref);
    return { id: instanceref.id, ...docSnap.data() } as Task
  }

  static markCompleted = async (taskId: string): Promise<Task> => {
    const instanceref = doc(this.instanceDB, this.model, taskId);
    if (!instanceref) throw new Error("Not found task id")
    const docSnap = await getDoc(instanceref);
    const { status, ...more } = docSnap.data();
    const updated = {
      ...more,
      status: TASK_STATUS.COMPLETED
    }
    await updateDoc(instanceref, { ...updated });

    return { id: instanceref.id, ...updated } as Task
  }
}


export enum TASK_STATUS {
  PENDING = 'Pending',
  COMPLETED = 'Completed'
}