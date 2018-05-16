import { Injectable } from '@angular/core';
import { Task } from '../shared/task';
import { Priority } from '../shared/priority';

import { PriorityTypeEnum } from '../shared/static-data';

@Injectable()
export class PriorityBoardService {

    private _ImportantUrgent: Priority;
    private _ImportantNotUrgent: Priority;
    private _NotImportantUrgent: Priority;
    private _NotImportantNotUrgent: Priority;

    constructor() {
        // this.reset();
        this._ImportantUrgent = new Priority(PriorityTypeEnum.ImportantUrgent);
        this._ImportantNotUrgent = new Priority(PriorityTypeEnum.ImportantNotUrgent);
        this._NotImportantUrgent = new Priority(PriorityTypeEnum.NotImportantUrgent);
        this._NotImportantNotUrgent = new Priority(PriorityTypeEnum.NotImportantNotUrgent);

        // this._ImportantUrgent.addTask(new Task('item 1'));
        // this._ImportantUrgent.addTask(new Task('item 2'));
    }

    public get priorityImportantUrgent() {
        return this._ImportantUrgent;
    }

    public get priorityImportantNotUrgent() {
        return this._ImportantNotUrgent;
    }

    public get priorityNotImportantUrgent() {
        return this._NotImportantUrgent;
    }

    public get priorityNotImportantNotUrgent() {
        return this._NotImportantNotUrgent;
    }

    public reset() {
        this._ImportantUrgent.clearTasks();
        this._ImportantNotUrgent.clearTasks();
        this._NotImportantUrgent.clearTasks();
        this._NotImportantNotUrgent.clearTasks();
    }

}
