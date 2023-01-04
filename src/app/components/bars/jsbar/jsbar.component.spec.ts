import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsbarComponent } from './jsbar.component';

describe('JsbarComponent', () => {
  let component: JsbarComponent;
  let fixture: ComponentFixture<JsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
