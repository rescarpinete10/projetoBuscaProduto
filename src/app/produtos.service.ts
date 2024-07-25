import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';
import { IProdutoCliente, produtoCliente } from './produtoCliente';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

   private apiUrl = 'http://localhost:8080';

  produtos: IProduto[] = produtos;
  produtosCLiente: IProdutoCliente[] = produtoCliente;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id === produtoId);
  }

  getOneProdutoCliente(produtoClienteId: number) {
    return this.produtosCLiente.filter(produtoClientes => produtoClientes.id === produtoClienteId);
  }

  getAllProdutos(): Observable<any> {
    const url = `${this.apiUrl}/v1/produtos/`;
    return this.http.get(url);
  }


}
