import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTrainingDetail } from './routing-training-detail';

describe('RoutingTrainingDetail', () => {
  let component: RoutingTrainingDetail;
  let fixture: ComponentFixture<RoutingTrainingDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingTrainingDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingTrainingDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
