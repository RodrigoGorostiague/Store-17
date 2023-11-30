import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  duration = signal(1000);
  msg = signal('hola');

  changeDuration(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.duration.set(parseInt(value))
  }

  changeMessage(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.msg.set(value)
  }

}
