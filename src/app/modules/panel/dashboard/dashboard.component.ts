import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/core/services/app.layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  chartData: any;
  chartOptions: any;
  subscription!: Subscription;

  data: any;
  data2: any;
  options1: any;
  options2: any;

  constructor() {}

  ngOnInit() {
    this.initChart1();

    this.initChart2();
  }
  initChart2() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data2 = {
      labels: ['تیر', 'خرداد', 'اردیبهشت', 'فروردین'],
      datasets: [
        {
          label: 'جاوااسکریپت',
          backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
          borderColor: documentStyle.getPropertyValue('--yellow-500'),
          data: [35, 19, 52, 20],
        },
        {
          label: 'فلاتر',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [28, 48, 40, 27],
        },
        {
          label: 'انگولار',
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: [21, 18, 20, 7],
        },
      ],
    };

    this.options2 = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  initChart1() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['جاوااسکریپت', 'فلاتر', 'انگولار'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };

    this.options1 = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
