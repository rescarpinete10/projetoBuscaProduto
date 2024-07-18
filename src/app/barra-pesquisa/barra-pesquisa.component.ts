import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {
  //  armazena o valor da barra de pesquisa
  descricao = "";

  constructor(
    // método é usado para injetar dependências na classe
    private router: Router
  ) {}

  // verifica se a barra de pesquisa possui algum valor. Se houver um valor, ele navegará para a página produtos e adicionará o valor da barra de pesquisa como um parâmetro de consulta na URL
  pesquisar() {
    if(this.descricao) {
      this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao }})
      return;
    }

    this.router.navigate(["produtos"]);
  }

}
