import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-math-tuition',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './math-tuition.component.html',
  styleUrls: ['./math-tuition.component.css']
})
export class MathTuitionComponent {

  classes = [
    { num: '1', fee: '₹1000', topics: ['Numbers', 'Addition', 'Subtraction', 'Shapes'] },
    { num: '2', fee: '₹1000', topics: ['Numbers', 'Multiplication', 'Measurement'] },
    { num: '3', fee: '₹1000', topics: ['Multiplication', 'Division', 'Fractions'] },
    { num: '4', fee: '₹1500', topics: ['Factors', 'Fractions', 'Decimals'] },
    { num: '5', fee: '₹1500', topics: ['Decimals', 'Percentages', 'Area'] },
    { num: '6', fee: '₹2000', topics: ['Integers', 'Algebra', 'Ratios'] },
    { num: '7', fee: '₹2000', topics: ['Expressions', 'Triangles', 'Angles'] },
    { num: '8', fee: '₹2000', topics: ['Equations', 'Exponents', 'Mensuration'] },
    { num: '9', fee: '₹2500', topics: ['Statistics', 'Geometry', 'Algebra'] },
    { num: '10', fee: '₹2500', topics: ['Trigonometry', 'Algebra', 'Graphs'] }
  ];

  format = [
    { icon: 'bi-camera-video-fill', iconClass: 'icon-blue', label: 'Live Classes', detail: 'Interactive online sessions' },
    { icon: 'bi-calendar-week-fill', iconClass: 'icon-teal', label: 'Weekly Sessions', detail: '2–3 classes per week' },
    { icon: 'bi-clock-fill', iconClass: 'icon-sky', label: '60 Minutes', detail: 'Focused learning time' },
    { icon: 'bi-people-fill', iconClass: 'icon-indigo', label: 'Small Batches', detail: '5–6 students only' }
  ];
}