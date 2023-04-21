import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambarComponent } from './teambar.component';

describe('TeambarComponent', () => {
  let component: TeambarComponent;
  let fixture: ComponentFixture<TeambarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeambarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeambarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
