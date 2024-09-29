import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutosService } from './sercices/produtos.service';
import { Produto } from './models/produto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-pratico-crud';

  produtos: Produto[] = [];

  constructor(private produtosService : ProdutosService){
    this. obterProdutosCadastrados();
  }

  obterProdutosCadastrados(){
    this.produtosService.obterProdutos()
      .subscribe(produtos => this.produtos = produtos)
  }

}
