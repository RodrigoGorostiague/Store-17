import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
@Input({required: true}) duration: number = 0;
@Input({required: true}) msg: string = '';
counter = signal(this.duration)
counterRef!: number;
constructor() {}

ngOnInit() {
  this.counterRef = window.setInterval(() => {
   this.counter.update((c) => c +1 )
  }, 1000)
}
ngDostroy() {
  window.clearInterval(this.counterRef);
}
}
