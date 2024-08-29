import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-varejista',
  templateUrl: './cadastro-varejista.component.html',
  styleUrls: ['./cadastro-varejista.component.css']
})
export class CadastroVarejistaComponent {
  // Definir o objeto varejista para armazenar os dados do formulário
  varejista = {
    codigo_varejo: '',
    razao_social: '',
    nome_fantasia: '',
    cep: '',
    email1: '',
    senha: ''
  };

  cidadeEstado: string = '';  // Campo de cidade e estado
  cnpj: string = '';  // Campo de CNPJ
  codigoVarejo: string = '';  // Campo de código gerado

  constructor() {}

  // Função para gerar o código automaticamente
  gerarCodigo() {
    if (this.cidadeEstado && this.cnpj.length >= 4) {
      const [cidade, estado] = this.cidadeEstado.split(",").map(part => part.trim());
      const cnpjDigits = this.cnpj.substring(0, 4);  // Pegar os primeiros 4 dígitos do CNPJ

      let cidadePart = '';

      // Remover preposições, conjunções e palavras de ligação
      const preposicoes = ['de', 'da', 'do', 'das', 'dos', 'e'];
      const cidadeNomes = cidade.split(' ').filter(nome => !preposicoes.includes(nome.toLowerCase()));

      if (cidadeNomes.length === 1) {
        const nome = cidadeNomes[0];
        cidadePart = nome[0] + nome[1] + nome[nome.length - 1];
      } else if (cidadeNomes.length === 2) {
        const nome1 = cidadeNomes[0];
        const nome2 = cidadeNomes[1];
        cidadePart = nome1[0] + nome2[0] + nome2[nome2.length - 1];
      } else if (cidadeNomes.length >= 3) {
        cidadePart = cidadeNomes.map(nome => nome[0]).join('');
      }

      this.codigoVarejo = `${cidadePart.toUpperCase()}${cnpjDigits}${estado.toUpperCase()}`;
      this.varejista.codigo_varejo = this.codigoVarejo;  // Atualiza o campo do código no objeto varejista
    } else {
      this.codigoVarejo = '';
    }
  }

  // Função de envio do formulário
  onSubmit(form: any) {
    console.log('Dados do formulário:', this.varejista);
    // Você pode enviar os dados via HTTP para o back-end aqui
  }
}
