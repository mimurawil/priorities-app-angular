import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import * as _ from 'lodash';

import { PriorityTypeEnum } from '../shared/static-data';
import { Task } from '../shared/task';
import { Priority } from '../shared/priority';

@Component({
    selector: 'ftf-board-priority',
    templateUrl: './ftf-board-priority.component.html',
    styleUrls: [
        '../../../node_modules/ng-drag-drop/style.css',
        './ftf-board-priority.component.css'
    ]
})
export class FTFBoardPriorityComponent implements OnInit {

    @Input() priority: Priority;
    @Output() draggingTask = new EventEmitter();
    @Output() droppingTask = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    public onTaskDrag() {
        this.draggingTask.emit();
    }

    public onTaskDrop(e: DropEvent) {
        this.droppingTask.emit(e);
    }

}
