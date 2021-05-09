import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { TaskFormComponent } from "../components/task-form/task-form.component";
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable()

export class TaskGuard implements CanDeactivate<TaskFormComponent> {
    canDeactivate(component: TaskFormComponent): Observable<boolean> | Promise<boolean> | boolean {
    // revisar error cannot get property dirty of undefined

    // if(component.taskForm.dirty) {
    //     return Swal.fire({
    //         title: '¿Deseas',
    //         showCancelButton: true,
    //         confirmButtonText: 'Aceptar'
    //     }).then((result) => {
    //         return result.isConfirmed ? true : false;
    //     });
    // }
    // return true;

    return Swal.fire({
        title: '¿Deseas salir? Tus cambios no se guardarán',
        showCancelButton: true,
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        return result.isConfirmed ? true : false;
    });

}
    
}
