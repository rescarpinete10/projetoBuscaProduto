import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDDVcKL3P4TgXXpg5PCD8wObhHX8LeXIs0'}),
  ]
})
export class ProdutosModule { }
