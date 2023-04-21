import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpitemComponent } from './expitem.component';

describe('ExpitemComponent', () => {
  let component: ExpitemComponent;
  let fixture: ComponentFixture<ExpitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpitemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
