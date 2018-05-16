import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FTFBoardComponent } from './ftf-board.component';

describe('FTFBoardComponent', () => {
    let component: FTFBoardComponent;
    let fixture: ComponentFixture<FTFBoardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FTFBoardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FTFBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
