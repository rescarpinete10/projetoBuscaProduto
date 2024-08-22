import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { IProdutoCliente } from 'src/app/produtoCliente';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

   produtos: IProduto[] | undefined;
   produto: IProduto | undefined;
   produtosClientes: IProdutoCliente[] |  undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute    
  ) {}

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
      
      if(descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.produtos = produtos;

      this.produtosService.getAllProdutos().subscribe((data) => {
        console.log(data);
      });

      this.produtosClientes = this.produtosService.getAllProdutosClientes();

   });
  }
  zoom: number = 13;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  } 

}

