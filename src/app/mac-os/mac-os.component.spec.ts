import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacOsComponent } from './mac-os.component';

describe('MacOsComponent', () => {
  let component: MacOsComponent;
  let fixture: ComponentFixture<MacOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
