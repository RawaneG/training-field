import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTraining } from './routing-training';

describe('RoutingTraining', () => {
  let component: RoutingTraining;
  let fixture: ComponentFixture<RoutingTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingTraining],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
