export class Task {
    private _title: string;
    private _completed: boolean;

    constructor(title: string = '') {
        this._title = title;
        this._completed = false;
    }

    public get title() {
        return this._title;
    }

    // public set title(title: string) {
    //     this._title = title;
    // }
    public get completed() {
        return this._completed;
    }
    public toggleCompleted() {
        this._completed = !this._completed;
    }
}