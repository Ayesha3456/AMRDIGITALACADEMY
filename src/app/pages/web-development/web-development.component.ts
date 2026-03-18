import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent {

  techStack = [
    'Angular', 'Django REST', 'MySQL', 'D3.js', 'Power BI'
  ];

  features = [
    'Mobile Responsive Design',
    'Fast Loading Performance',
    'SEO-Friendly Structure',
    'Lead Capture & Contact Forms'
  ];

  services = [
    {
      icon: 'bi-building',
      title: 'Business Websites',
      desc: '5–7 page responsive websites with contact forms and mobile optimization'
    },
    {
      icon: 'bi-code-square',
      title: 'Full-Stack Applications',
      desc: 'Angular + Django apps with secure APIs and scalable backend'
    },
    {
      icon: 'bi-plug-fill',
      title: 'API Development',
      desc: 'Clean REST APIs with integration, testing, and documentation'
    },
    {
      icon: 'bi-bar-chart-fill',
      title: 'Dashboards',
      desc: 'Interactive dashboards with D3.js, Power BI, and Tableau'
    }
  ];

  projects = [
    {
      title: 'Supermarket Management System',
      desc: 'Full-stack inventory system with real-time tracking and reporting',
      points: [
        'Angular + Django REST architecture',
        'Real-time stock updates',
        'Deployed on Vercel & Render'
      ]
    },
    {
      title: 'Student Performance Dashboard',
      desc: 'Interactive dashboard for analyzing student data',
      points: [
        'D3.js charts and filters',
        'Dynamic visualization'
      ]
    },
    {
      title: 'Amazon Sales Analysis',
      desc: 'SQL-based analysis for business insights',
      points: [
        'Revenue trend analysis',
        'Product performance insights'
      ]
    },
    {
      title: 'Angular Portfolio Apps',
      desc: 'Multiple apps including Notes, E-Commerce, and Expense Tracker',
      points: [
        'Authentication & CRUD',
        'Real-time UI updates'
      ]
    }
  ];

  workflow = [
    { num: '01', title: 'Requirement Discussion', desc: 'Understand your business needs' },
    { num: '02', title: 'Planning & Design', desc: 'Create structure and UI flow' },
    { num: '03', title: 'Development', desc: 'Build scalable application' },
    { num: '04', title: 'Launch', desc: 'Deploy and support' }
  ];
}