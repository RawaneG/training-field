import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-routing-training-detail',
  styleUrl: './routing-training-detail.scss',
  templateUrl: './routing-training-detail.html',
})
export class RoutingTrainingDetail {
  id = input<string | undefined>(undefined);

  return() {
    window.history.back();
  }
}
