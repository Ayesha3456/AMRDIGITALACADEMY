import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  steps = [
    { num: '01', title: 'Book Demo', desc: 'Fill the form' },
    { num: '02', title: 'Attend Class', desc: 'Experience teaching' },
    { num: '03', title: 'Join Batch', desc: 'Select timing' },
    { num: '04', title: 'Track Progress', desc: 'Monitor improvement' }
  ];

  homeClasses = [
    { num: '1–3', desc: 'Basics & Foundations', fee: '₹1000' },
    { num: '3–5', desc: 'Concept Building', fee: '₹1500' },
    { num: '5–8', desc: 'Advanced Practice', fee: '₹2000' },
    { num: '8–10', desc: 'Board Exam Prep', fee: '₹2500' }
  ];
}