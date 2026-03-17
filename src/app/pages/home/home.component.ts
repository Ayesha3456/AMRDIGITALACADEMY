import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  benefits = [
    {
      icon: 'bi-lightbulb-fill',
      iconClass: 'icon-blue',
      title: 'Concept Clarity',
      desc: 'Strong fundamentals with simple explanations'
    },
    {
      icon: 'bi-book-fill',
      iconClass: 'icon-teal',
      title: 'Homework Support',
      desc: 'Help with school homework and doubts'
    },
    {
      icon: 'bi-trophy-fill',
      iconClass: 'icon-amber',
      title: 'Confidence Building',
      desc: 'Improve problem-solving confidence'
    },
    {
      icon: 'bi-display-fill',
      iconClass: 'icon-sky',
      title: 'Interactive Learning',
      desc: 'Engaging sessions with examples and practice'
    },
    {
      icon: 'bi-people-fill',
      iconClass: 'icon-indigo',
      title: 'Small Batches',
      desc: 'Only 5–6 students per batch'
    },
    {
      icon: 'bi-graph-up-arrow',
      iconClass: 'icon-green',
      title: 'Progress Tracking',
      desc: 'Regular updates on student performance'
    }
  ];

  steps = [
    {
      num: '01',
      title: 'Book Demo',
      desc: 'Fill the form to schedule a free class'
    },
    {
      num: '02',
      title: 'Attend Class',
      desc: 'Experience teaching method live'
    },
    {
      num: '03',
      title: 'Join Batch',
      desc: 'Choose suitable timing'
    },
    {
      num: '04',
      title: 'Track Progress',
      desc: 'Monitor improvement regularly'
    }
  ];
}