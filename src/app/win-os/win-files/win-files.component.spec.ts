import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinFilesComponent } from './win-files.component';

describe('WinFilesComponent', () => {
  let component: WinFilesComponent;
  let fixture: ComponentFixture<WinFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
