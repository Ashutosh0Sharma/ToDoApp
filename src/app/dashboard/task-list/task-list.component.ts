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
            'status': 'inProgress',
            'priority': 'mid',
            'dueDate': '12/12/2021'
        },
        {
            'Id': 2,
            'toDo': 'Test 2',
            'status': 'inProgress',
            'priority': 'mid',
            'dueDate': '12/12/2021'
        },
        {
            'Id': 3,
            'toDo': 'Test 3',
            'status': 'inProgress',
            'priority': 'mid',
            'dueDate': '12/12/2021'
        },
        {
            'Id': 4,
            'toDo': 'Test 4',
            'status': 'inProgress',
            'priority': 'mid',
            'dueDate': '12/12/2021'
        },
        {
            'Id': 5,
            'toDo': 'Test 5',
            'status': 'inProgress',
            'priority': 'mid',
            'dueDate': '12/12/2021'
        },

        {
            'Id': 6,
            'toDo': 'Test 6',
            'status': 'inProgress',
            'priority': 'mid',
            'dueDate': '12/12/2021'
        },
        {
            'Id': 7,
            'toDo': 'Test 7',
            'status': 'inProgress',
            'priority': 'mid',
            'dueDate': '12/12/2021'
        },
        {
            'Id': 8,
            'toDo': 'Test 8',
            'status': 'inProgress',
            'priority': 'mid',
            'dueDate': '12/12/2021'
        },

    )


    getCompletedTask(task) {
        console.log(task);
    }
}
