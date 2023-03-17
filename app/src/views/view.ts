import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";

// Generics: o T é de type, qual o tipo que está aqui? é o que vou receber de mensagemView e negociacoesView (como se tivesse recebendo propriedades)
// Classe Abstrata: você não pode criar uma instância diretamente dela. Você só pode se o filho herda essa classe e você cria uma instância no filho.
export abstract class View<T> {
  // foi usado o protected para que a classe filha poder acessar 'elemento' (class negociacoesView e mensagemView)
  protected elemento: HTMLElement

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor)
    if (elemento) {
      this.elemento = elemento as HTMLElement
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique com o DEV`);
    }
  }

  // aqui um método abstrato: É um método que a classe pai não sabe como vai ser implementado. Vai ser responsabilidade da classe filha.
  // isso força (de quem herda view) a implementar o template nas classes filhas
  // protected: para o método aparecer só para as classes filhas (que receberam a extends de view, obs: obviamente o pai também acessa)
  protected abstract template(model: T): string /*{ Method 'template' cannot have an implementation (um bloco {}) because it is marked abstract!
    throw Error('Classe filha precisa implementar o método template')
  }*/

  @logarTempoDeExecucao(true)
  @inspect()
  public update(model: T): void {
    let template = this.template(model)
    this.elemento.innerHTML = template
  }

}