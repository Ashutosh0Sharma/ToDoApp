import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TaskListComponent {

}
