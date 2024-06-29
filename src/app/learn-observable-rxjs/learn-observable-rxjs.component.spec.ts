import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnObservableRxjsComponent } from './learn-observable-rxjs.component';

describe('LearnObservableRxjsComponent', () => {
  let component: LearnObservableRxjsComponent;
  let fixture: ComponentFixture<LearnObservableRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnObservableRxjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnObservableRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
