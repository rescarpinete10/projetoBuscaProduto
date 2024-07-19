import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { IProdutoCliente } from 'src/app/produtoCliente';
import { ProdutosService } from 'src/app/produtos.service'
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  produtosClientes: IProdutoCliente[] |  undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    console.log(produtoId);
    this.produto = this.produtosService.getOne(produtoId);
    this.produtosClientes = this.produtosService.getOneProdutoCliente(produtoId);
  }
/*
  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
*/

  zoom: number = 18;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  } 
 

}


