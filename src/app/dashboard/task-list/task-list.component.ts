import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TaskListComponent {


    taskList = Array(
        {
            'Id': 1,
            'toDo': 'Test 1',
            'status': 'inProgress'
        },
        {
            'Id': 2,
            'toDo': 'Test 2',
            'status': 'inProgress'
        },
        {
            'Id': 3,
            'toDo': 'Test 3',
            'status': 'inProgress'
        },
        {
            'Id': 4,
            'toDo': 'Test 4',
            'status': 'inProgress'
        },
        {
            'Id': 5,
            'toDo': 'Test 5',
            'status': 'inProgress'
        },

        {
            'Id': 6,
            'toDo': 'Test 6',
            'status': 'inProgress'
        },
        {
            'Id': 7,
            'toDo': 'Test 7',
            'status': 'inProgress'
        },
        {
            'Id': 8,
            'toDo': 'Test 8',
            'status': 'inProgress'
        },

    )


    getCompletedTask(task) {
        console.log(task);
    }
}
