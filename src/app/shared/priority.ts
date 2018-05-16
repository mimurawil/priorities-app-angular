import { PriorityTypeEnum } from './static-data';
import { Task } from './task';
import * as _ from 'lodash';

export class Priority {

    private _type: PriorityTypeEnum;
    private _tasks: Task[];

    constructor(type: PriorityTypeEnum) {
        this._type = type;
        this._tasks = [];
    }

    public get tasks() {
        return this._tasks;
    }

    public get type() {
        return this._type;
    }

    public addTask(task: Task) {
        this._tasks.push(task);
    }

    public removeTask(task: Task) {
        _.remove(this._tasks, task);
    }

    public toggleTaskCompleted(task: Task) {
        _.find(this._tasks, task).toggleCompleted();
    }

    public clearTasks() {
        this._tasks = [];
    }

}