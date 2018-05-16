import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import * as _ from 'lodash';

import { PriorityTypeEnum } from '../shared/static-data';
import { Priority } from '../shared/priority';
import { Task } from '../shared/task';

// Services
import { PriorityBoardService } from '../services/priority-board.service';

@Component({
    selector: 'ftf-board',
    templateUrl: './ftf-board.component.html',
    styleUrls: [
        '../../../node_modules/ng-drag-drop/style.css',
        './ftf-board.component.css'
    ]
})
export class FTFBoardComponent implements OnInit {

    public draggingFrom: PriorityTypeEnum;

    public pImportantUrgent: Priority;
    public pImportantNotUrgent: Priority;
    public pNotImportantUrgent: Priority;
    public pNotImportantNotUrgent: Priority;
    public newTasks: Task[];
    public taskTitle: string;

    public FROM_IMPORTANT_URGENT = PriorityTypeEnum.ImportantUrgent;
    public FROM_IMPORTANT_NOT_URGENT = PriorityTypeEnum.ImportantNotUrgent;
    public FROM_NOT_IMPORTANT_URGENT = PriorityTypeEnum.NotImportantUrgent;
    public FROM_NOT_IMPORTANT_NOT_URGENT = PriorityTypeEnum.NotImportantNotUrgent;
    public FROM_CREATION = 99999;

    constructor(
        private boardService: PriorityBoardService
    ) {
        this.pImportantUrgent = this.boardService.priorityImportantUrgent;
        this.pImportantNotUrgent = this.boardService.priorityImportantNotUrgent;
        this.pNotImportantUrgent = this.boardService.priorityNotImportantUrgent;
        this.pNotImportantNotUrgent = this.boardService.priorityNotImportantNotUrgent;
        this.newTasks = [];
        this.taskTitle = '';
    }

    ngOnInit() {
        document.getElementById('title').focus();
    }

    public onNewTask() {
        if (this.taskTitle == '') {
            return;
        }
        this.newTasks.push(new Task(this.taskTitle));
        this.taskTitle = '';
        document.getElementById('title').focus();
    }

    public onTaskDrag(e, from: PriorityTypeEnum) {
        this.draggingFrom = from;
    }

    public onTaskDrop(e: DropEvent, type: PriorityTypeEnum) {
        if (type === this.draggingFrom) {
            return;
        }

        this.removeTaskFromPriority(e.dragData, this.draggingFrom);
        switch (type) {
            case PriorityTypeEnum.ImportantUrgent:
                this.pImportantUrgent.addTask(e.dragData);
                break;
            case PriorityTypeEnum.ImportantNotUrgent:
                this.pImportantNotUrgent.addTask(e.dragData);
                break;
            case PriorityTypeEnum.NotImportantUrgent:
                this.pNotImportantUrgent.addTask(e.dragData);
                break;
            case PriorityTypeEnum.NotImportantNotUrgent:
                this.pNotImportantNotUrgent.addTask(e.dragData);
                break;
        }
    }

    public onDeleteDrop(e: DropEvent) {
        this.removeTaskFromPriority(e.dragData, this.draggingFrom);
    }

    private removeTaskFromPriority(task: Task, from: PriorityTypeEnum) {
        switch (from) {
            case PriorityTypeEnum.ImportantUrgent:
                this.pImportantUrgent.removeTask(task);
                break;
            case PriorityTypeEnum.ImportantNotUrgent:
                this.pImportantNotUrgent.removeTask(task);
                break;
            case PriorityTypeEnum.NotImportantUrgent:
                this.pNotImportantUrgent.removeTask(task);
                break;
            case PriorityTypeEnum.NotImportantNotUrgent:
                this.pNotImportantNotUrgent.removeTask(task);
                break;
            default:
                _.remove(this.newTasks, task);
        }
    }

}
