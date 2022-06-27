class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0
  }
  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Operação invalida. Saldo insuficiente!")
    }
    this._saldo = this._saldo - valor
    return this._saldo
  }
  depositar(valor) {
    this._saldo = this._saldo + valor
    return this._saldo
  }
  set saldo(valor) {
    this._saldo = valor
  }
  get saldo() {
    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero)
    this.tipo = "corrente"
    this._cartaoCredito = cartaoCredito
  }
  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
  get cartaoCredito() {
    return this._cartaoCredito
  }
}

class ContaPoupança extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = "poupança"
  }
}

class ContaUnivesitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = "universitaria"
  }
  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Operação invalida. Saldo insuficiente!")
    } else if (valor > 500) {
      return console.log("Operação invalida, valor maximo permitido R$500,00")
    }
    this._saldo = this._saldo - valor
    return this._saldo
  }
}
