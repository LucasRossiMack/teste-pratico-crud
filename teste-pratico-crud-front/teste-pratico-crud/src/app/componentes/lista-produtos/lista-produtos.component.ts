import { Component } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutosService } from '../../sercices/produtos.service';
import {MatTableModule} from '@angular/material/table';
import { DeletarProdutoComponent } from '../deletar-produto/deletar-produto.component';
import { EditarProdutoComponent } from '../editar-produto/editar-produto.component';
import { CadastrarProdutoComponent } from '../cadastrar-produto/cadastrar-produto.component';
import { LeituraArquivoComponent } from '../leitura-arquivo/leitura-arquivo.component';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [MatTableModule, DeletarProdutoComponent, EditarProdutoComponent, CadastrarProdutoComponent, LeituraArquivoComponent],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})

export class ListaProdutosComponent {

  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'categoria', 'nome', 'preco','descricao','quantidade', 'editar','deletar'];

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
