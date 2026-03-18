import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  values = [
    'Concept clarity over memorisation',
    'Small batches (5–6 students)',
    'Individual attention for every student',
    'Regular practice and revision',
    'Step-by-step improvement tracking'
  ];
}