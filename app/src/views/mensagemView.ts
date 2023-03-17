import { View } from "./view.js"

// Generics aqui eu digo que o <string> vai entrar no lugar de T lá no view.ts (como se tivesse passando propriedades)
export class MensagemView extends View<string> {

  /* Esse código foi colocado na view.ts.
    private elemento: HTMLElement

    constructor(seletor: string) {
      this.elemento = document.querySelector(seletor)
    }
  */

  //o template está na classe pai (view) e mensagemView (que é a classe filha) está herdando o template e é ela que define o que vai retornar
  // se tirar o template daqui vai dar erro.
  // protected: tem que colocar para evitar que o template apareça como opção de uso fora das classes filhas de view (que receberam extends de view)
  protected template(model: string): string {
    return`
      <p class="alert alert-info">${model}</p>
    `
  }

  /* Esse código foi colocado na view.ts.
    update(model: string): void {
      const template = this.template(model)
      this.elemento.innerHTML = template
    }
  */

}