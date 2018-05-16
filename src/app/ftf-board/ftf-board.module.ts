import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgDragDropModule } from 'ng-drag-drop';

// Services
// import { PriorityBoardService } from '../services/priority-board.service';

// Pipes
import { DisplayPriorityTitlePipe } from '../pipes/display-priority-title.pipe';
import { GetPriorityClassStylePipe } from '../pipes/get-priority-class-style.pipe';

// Components
import { FTFBoardComponent } from './ftf-board.component';
import { FTFBoardPriorityComponent } from './ftf-board-priority.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgDragDropModule.forRoot()
    ],
    declarations: [
        FTFBoardComponent,
        FTFBoardPriorityComponent,
        DisplayPriorityTitlePipe,
        GetPriorityClassStylePipe
    ],
    providers: [
    ]
})
export class FTFBoardModule { }
