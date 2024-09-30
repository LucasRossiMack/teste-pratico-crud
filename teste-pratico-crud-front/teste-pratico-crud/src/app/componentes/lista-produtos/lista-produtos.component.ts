import { Component } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutosService } from '../../sercices/produtos.service';
import {MatTableModule} from '@angular/material/table';
import { DeletarProdutoComponent } from '../deletar-produto/deletar-produto.component';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [MatTableModule, DeletarProdutoComponent],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})

export class ListaProdutosComponent {

  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'categoria', 'nome', 'preco','descricao','quantidade','deletar'];

  constructor(private produtosService : ProdutosService){
    this.obterProdutosCadastrados();
  }

  obterProdutosCadastrados(){
    this.produtosService.obterProdutos()
      .subscribe(produtos => this.produtos = produtos)
  }

  atualizarLista(novosProdutos: any) {
    this.obterProdutosCadastrados()
  }
}
