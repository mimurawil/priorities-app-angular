import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtfHeaderComponent } from './ftf-header.component';

describe('FtfHeaderComponent', () => {
  let component: FtfHeaderComponent;
  let fixture: ComponentFixture<FtfHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtfHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
