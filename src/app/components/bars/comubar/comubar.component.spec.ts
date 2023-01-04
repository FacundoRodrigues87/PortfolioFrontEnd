import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComubarComponent } from './comubar.component';

describe('ComubarComponent', () => {
  let component: ComubarComponent;
  let fixture: ComponentFixture<ComubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
