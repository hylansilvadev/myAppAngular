import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  public firstName = signal('Hylan');
  public lastName = signal(' Silva');

  public fullname = computed(() => {
    return this.firstName() + this.lastName();
  });

  public data = signal([1]);

  /*

    effect = raramente são necessários na maioria dos códigos,
    mas podem ser úteis em circustâncias específicas.
    - Registro de dados sendo exibidos e quando eles mudam, seja
      análise ou como ferramenta de depuração.

    - manter os dados sincronizados com o window.localStorage

    - Adicionando comportamento DOM personalizado que não pode
      ser expresso com sintaxe de modelo.

    - Executar renderização personalizada em um <canvas>, biblioteca
      de gráficos ou outra biblioteca de UI de terceiros.

   */

  constructor() {

    effect(() => {
      console.log(this.firstName())
      console.log(this.data())
    })

  }

  public updateName() {
    return this.firstName.set('Ester');
  }

  public updateData() {
    return this.data.update( (oldValue: Array<number>) => {
      console.log(oldValue)
      return [...oldValue, oldValue.length + 1]
    })
  }
}
