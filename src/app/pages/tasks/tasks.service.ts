import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Observable<Task[]>;

  private tasksCollection: AngularFirestoreCollection<Task>;

  constructor(private readonly afs: AngularFirestore) {
    this.tasksCollection = afs.collection<Task>('tasks');
    this.getTasks();
  }

  onDeleteTask(taskId: string): Promise<void>{
    return new Promise (async (resolve, reject) => {
      try {
        const result = await this.tasksCollection.doc(taskId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    })
  }

  onSaveTask(task: Task, taskId: string): Promise<void>{
    return new Promise(async(resolve, reject) => {
      try {
        const id = taskId || this.afs.createId();
        const data = {id, ...task};
        const result = await this.tasksCollection.doc(id).set(data);
        resolve(result);
      } catch(err) {
        reject(err.message);
      }
    })
  }

  private getTasks(): void{
    this.tasks = this.tasksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Task))
    )
  }
}
