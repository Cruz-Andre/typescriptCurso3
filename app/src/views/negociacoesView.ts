import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./view.js"

// Generics: aqui eu digo que o <Negociacoes> vai entrar no lugar de T lá no view.ts (como se tivesse passando propriedades)
export class NegociacoesView extends View<Negociacoes> {

  /* Esse código foi colocado na view.ts.
    private elemento: HTMLElement

    constructor(seletor: string) {
      this.elemento = document.querySelector(seletor)
    }
  */

  //o template está na classe pai (view) e negociacoesView (que é a classe filha) está herdando o template e é ela que define o que vai retornar
  // se tirar o template daqui vai dar erro.
  // protected: tem que colocar para evitar que o template apareça como opção de uso fora das classes filhas de view (que receberam extends de view)
  protected template(model: Negociacoes): string {

    /* <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td> uma opção para colocar a data no formato de acordo com o idioma do browser */

    return `
      <table class='table table-hover table-bordered'>
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          ${model.lista().map(negociacao => {
            return`
              <tr>
                <td>${negociacao.data.toLocaleDateString('pt-BR')}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `
          }).join('')}
        </tbody>
      </table>
    `
  }

  /* uma outra opção para colocar a data no formato de acordo com o idioma do browser e deixar o código, no return do template, mais enxuto
    envolto no <tr></tr> colocar: <td>${this.formatarData(negociacao.data)}</td>

    private formatarData(data: Date): string {
      return new Intl.DateTimeFormart().formart(data)
    }
  */

  /* Esse código foi colocado na view.ts.
    update(model: Negociacoes): void {
      const template = this.template(model)
      console.log(template);
      this.elemento.innerHTML = template
    }
  */

}