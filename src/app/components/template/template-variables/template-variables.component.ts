import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule, NewComponentComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.css',
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;
  @ViewChild(NewComponentComponent)
  public childComponent!: NewComponentComponent;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement.innerText);
    console.log(this.childComponent.name)
  }
}
