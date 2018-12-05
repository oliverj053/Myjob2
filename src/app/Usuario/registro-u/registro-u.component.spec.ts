import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUComponent } from './registro-u.component';

describe('RegistroUComponent', () => {
  let component: RegistroUComponent;
  let fixture: ComponentFixture<RegistroUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
