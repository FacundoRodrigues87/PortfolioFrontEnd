import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduitemComponent } from './eduitem.component';

describe('EduitemComponent', () => {
  let component: EduitemComponent;
  let fixture: ComponentFixture<EduitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EduitemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EduitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
