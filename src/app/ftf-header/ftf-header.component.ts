import { Component, OnInit } from '@angular/core';

// Services
import { PriorityBoardService } from '../services/priority-board.service';

@Component({
    selector: 'ftf-header',
    templateUrl: './ftf-header.component.html',
    styleUrls: ['./ftf-header.component.css']
})
export class FTFHeaderComponent implements OnInit {

    constructor(
        private boardService: PriorityBoardService
    ) { }

    ngOnInit() { }

    public onReset() {
        this.boardService.reset();
    }


}
