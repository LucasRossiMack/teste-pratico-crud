import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProdutosService } from '../../sercices/produtos.service';
import { Produto } from '../../models/produto.model';


@Component({
  selector: 'app-deletar-produto',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './deletar-produto.component.html',
  styleUrl: './deletar-produto.component.css'
})

export class DeletarProdutoComponent {

  @Input() id = 0;
  @Output() atualizaListaEvent = new EventEmitter<boolean>();

  novosProdutos : Produto[] =[];

  constructor(private produtosService : ProdutosService){
  }

  deletar(id: number){
    this.produtosService.deletarProduto(id)
      .subscribe(_ => this.atualizaListaEvent.emit(true)
  )
  }
}

