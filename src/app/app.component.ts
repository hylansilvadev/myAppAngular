import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewComponent } from "./components/template/template-deferrable-view/template-deferrable-view.component";
import { SignalsComponent } from "./components/signals/signals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SignalsComponent],
  template: `
    <!-- <router-outlet /> -->
    <h1>Curso de Angular</h1>
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <!-- <app-template-deferrable-view /> -->
     <app-signals />
  `,
})
export class AppComponent {
  title = 'my-app-angular';
}
