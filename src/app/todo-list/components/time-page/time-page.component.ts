import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'time-page',
  templateUrl: './time-page.component.html',
  styleUrl: './time-page.component.css'
})
export class TimePageComponent implements OnInit, OnDestroy {

  public currentDate?:string;
  public currentTime?:string;

  private intervalId:any;




  ngOnInit(): void {
    this.updateDateTime();
    this.intervalId = setInterval(() => this.updateDateTime(), 1000)

  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateDateTime() {
    const now = new Date();
    this.currentTime = this.formatTime(now);
    this.currentDate = this.formatDate(now);
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    };
    return date.toLocaleDateString('es-ES', options);
  }

  formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit', minute: '2-digit',
    };
    return date.toLocaleTimeString('es-ES', options);
  }

}



