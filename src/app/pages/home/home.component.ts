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
    { num: '01', title: 'Enquire', desc: 'Fill form or WhatsApp' },
    { num: '02', title: 'Attend Demo', desc: 'Understand teaching style' },
    { num: '03', title: 'Choose Batch', desc: 'Flexible timings' },
    { num: '04', title: 'Start Learning', desc: 'Track progress' }
  ];

  homeClasses = [
    { num: '1–3', fee: '₹1000/month' },
    { num: '4–5', fee: '₹1500/month' },
    { num: '6–8', fee: '₹2000/month' },
    { num: '9–10', fee: '₹2500/month' }
  ];
}