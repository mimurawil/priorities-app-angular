import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { PriorityBoardService } from './services/priority-board.service';

// Components 
import { AppComponent } from './app.component';
import { FTFHeaderComponent } from './ftf-header/ftf-header.component';

// Modules
import { AppRoutingModule } from './/app-routing.module';
import { FTFBoardModule } from './ftf-board/ftf-board.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FTFBoardModule,
    ],
    declarations: [
        AppComponent,
        FTFHeaderComponent,
    ],
    providers: [
        PriorityBoardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
