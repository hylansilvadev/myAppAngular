import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.css',
})
export class TemplateBindingComponent {
  public name: string = 'Hylan Silva';
  public age: number = 21;

  public sum(): number {
    return this.age++;
  }

  public sub(): number {
    return this.age--;
  }

  public isDisabled = false;

  public srcValue = 'https://avatars.githubusercontent.com/u/111002592?v=4';

  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseEvent(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    });
  }
}
