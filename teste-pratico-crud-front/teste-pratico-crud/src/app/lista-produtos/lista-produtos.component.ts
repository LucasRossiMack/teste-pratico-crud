import { Component } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutosService } from '../sercices/produtos.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})

export class ListaProdutosComponent {

  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'categoria', 'nome', 'preco','descricao','quantidade'];

  constructor(private produtosService : ProdutosService){
    this. obterProdutosCadastrados();
  }

  obterProdutosCadastrados(){
    this.produtosService.obterProdutos()
      .subscribe(produtos => this.produtos = produtos)
  }
}
