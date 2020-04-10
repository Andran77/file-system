import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinOsComponent } from './win-os.component';

describe('WinOsComponent', () => {
  let component: WinOsComponent;
  let fixture: ComponentFixture<WinOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
