import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlbarComponent } from './htmlbar.component';

describe('HtmlbarComponent', () => {
  let component: HtmlbarComponent;
  let fixture: ComponentFixture<HtmlbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
