import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { CadastroVarejistaComponent } from './cadastro-varejista/cadastro-varejista.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: 'cadastrar-varejista', component: CadastroVarejistaComponent },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },  // Redireciona para 'produtos' se o caminho estiver vazio
  { path: '**', component: NaoEncontradaComponent }  // Rota para página não encontrada
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
