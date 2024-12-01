import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-deferrable-view',
  standalone: true,
  imports: [CommonModule, NewComponentComponent],
  templateUrl: './template-deferrable-view.component.html',
  styleUrl: './template-deferrable-view.component.css',
})
export class TemplateDeferrableViewComponent {

  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));
}
