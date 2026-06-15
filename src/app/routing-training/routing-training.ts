import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-routing-training',
  styleUrl: './routing-training.scss',
  templateUrl: './routing-training.html',
})
export class RoutingTraining {
  private router = inject(Router);

  redirectToDetail() {
    // Implement the logic to redirect to the detail page
    const id = Math.floor(+Math.random() * 100);
    this.router.navigate(['/routing-training', id]);
  }
}
