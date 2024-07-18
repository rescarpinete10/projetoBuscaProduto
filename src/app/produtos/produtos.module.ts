import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'}),
  ]
})
export class ProdutosModule { }
