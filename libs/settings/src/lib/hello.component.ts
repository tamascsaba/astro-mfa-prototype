import { NgIf } from '@angular/common';
import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf],
  template: `
    <p>Hello from Angular!!</p>

    <p *ngIf="show">{{ helpText }}</p>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent implements OnInit {
  static foo = `bar`;
  @Input() helpText = 'help';

  show = true;

  toggle() {
    this.show = !this.show;
  }

  public ngOnInit(): void {
    console.log(window.navigator.userAgent);
  }
}
