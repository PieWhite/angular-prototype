import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  template: `
    <button (click)="increment()">Verhoog teller</button>
    <p>Teller: {{ count }}</p>
  `,
  styles: [],
  standalone: true // Add this line
})
export class CounterButtonComponent {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {

    this.count++;
    this.countChange.emit(this.count);
  }
}
