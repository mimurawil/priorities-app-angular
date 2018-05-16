import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { FTFBoardComponent } from './ftf-board/ftf-board.component';

const routes: Routes = [
    { path: '', component: FTFBoardComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
