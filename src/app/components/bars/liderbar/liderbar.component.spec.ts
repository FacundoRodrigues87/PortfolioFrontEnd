import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiderbarComponent } from './liderbar.component';

describe('LiderbarComponent', () => {
  let component: LiderbarComponent;
  let fixture: ComponentFixture<LiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiderbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
