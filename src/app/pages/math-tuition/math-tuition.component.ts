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
    { num: '1', topics: ['Numbers 1–100', 'Basic Addition', 'Basic Subtraction', 'Shapes', 'Patterns'], fee: '₹1000' },
    { num: '2', topics: ['Numbers up to 1000', 'Addition & Subtraction', 'Multiplication Intro', 'Measurement', 'Data Handling'], fee: '₹1000' },
    { num: '3', topics: ['3–4 digit Numbers', 'Multiplication', 'Division', 'Fractions Intro', 'Time & Calendar'], fee: '₹1000' },
    { num: '4', topics: ['Large Numbers', 'Factors & Multiples', 'Fractions', 'Decimals Intro', 'Geometry Basics'], fee: '₹1500' },
    { num: '5', topics: ['Fractions & Decimals', 'Percentages Intro', 'Area & Perimeter', 'Data Handling', 'Mental Math'], fee: '₹1500' },
    { num: '6', topics: ['Integers', 'Fractions & Decimals', 'Ratios', 'Basic Algebra', 'Geometry'], fee: '₹2000' },
    { num: '7', topics: ['Rational Numbers', 'Algebraic Expressions', 'Lines & Angles', 'Triangles', 'Word Problems'], fee: '₹2000' },
    { num: '8', topics: ['Linear Equations', 'Quadrilaterals', 'Data Handling', 'Exponents', 'Mensuration'], fee: '₹2000' },
    { num: '9', topics: ['Probability', 'Coordinate Geometry', 'Surface Area & Volume', 'Statistics', 'Algebra'], fee: '₹2500' },
    { num: '10', topics: ['Advanced Algebra', 'Calculus Basics', 'Trigonometry', 'Graphs & Functions', 'Board Exam Practice'], fee: '₹2500' }
  ];

  topics = [
    { icon: 'bi-123', label: 'Numbers & Operations' },
    { icon: 'bi-pie-chart-fill', label: 'Fractions' },
    { icon: 'bi-dot', label: 'Decimals' },
    { icon: 'bi-triangle', label: 'Geometry Basics' },
    { icon: 'bi-chat-text-fill', label: 'Word Problems' },
    { icon: 'bi-puzzle-fill', label: 'Logical Thinking' }
  ];

  format = [
    { icon: 'bi-camera-video-fill', iconClass: 'icon-blue', label: 'Online Live Classes', detail: 'Interactive sessions via video call with whiteboard tools.' },
    { icon: 'bi-calendar-week-fill', iconClass: 'icon-teal', label: '2–3 Sessions / Week', detail: 'Consistent schedule to build steady learning momentum.' },
    { icon: 'bi-clock-fill', iconClass: 'icon-sky', label: '60-Minute Sessions', detail: 'Focused duration — enough depth without fatigue.' },
    { icon: 'bi-people-fill', iconClass: 'icon-indigo', label: 'Small Batch (5–6 Students)', detail: 'Every student gets personal attention and doubt clearance.' }
  ];
}