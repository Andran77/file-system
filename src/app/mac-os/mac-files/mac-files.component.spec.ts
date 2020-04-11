import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacFilesComponent } from './mac-files.component';

describe('MacFilesComponent', () => {
  let component: MacFilesComponent;
  let fixture: ComponentFixture<MacFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
