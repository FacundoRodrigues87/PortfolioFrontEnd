import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbarComponent } from './cssbar.component';

describe('CssbarComponent', () => {
  let component: CssbarComponent;
  let fixture: ComponentFixture<CssbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
