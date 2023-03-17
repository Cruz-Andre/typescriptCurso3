import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = []

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes // o readonly retorna uma lista somente leitura, pois não queremos modificar negociações pq é private!
  }

}
