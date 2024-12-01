import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.css',
})
export class TemplateControlFlowComponent {
  public isTrue: boolean = false;

  public itens: Array<{name: string}> = [];

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public trackByFn = (index: number): number => index;

  public addNewName = (value: string) => this.itens.push({ name: value });

  public switchCondition = 'C';
}
