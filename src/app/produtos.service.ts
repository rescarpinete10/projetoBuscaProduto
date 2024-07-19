import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';
import { IProdutoCliente, produtoCliente } from './produtoCliente';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  produtosCLiente: IProdutoCliente[] = produtoCliente;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id === produtoId);
  }

  getOneProdutoCliente(produtoClienteId: number) {
    return this.produtosCLiente.filter(produtoClientes => produtoClientes.id === produtoClienteId);
  }
}
