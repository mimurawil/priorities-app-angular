import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FTFBoardPriorityComponent } from './ftf-board-priority.component';

describe('FTFBoardPriorityComponent', () => {
  let component: FTFBoardPriorityComponent;
  let fixture: ComponentFixture<FTFBoardPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FTFBoardPriorityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FTFBoardPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
