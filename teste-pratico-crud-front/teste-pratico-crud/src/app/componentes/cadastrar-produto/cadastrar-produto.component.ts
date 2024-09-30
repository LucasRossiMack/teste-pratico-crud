import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProdutosService } from '../../sercices/produtos.service';
import { inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from '../../models/produto.model';
import { FormularioProdutosComponent } from '../formulario-produtos/formulario-produtos.component';

@Component({
  selector: 'app-cadastrar-produto',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './cadastrar-produto.component.html',
  styleUrl: './cadastrar-produto.component.css'
})

export class CadastrarProdutoComponent {

  @Output() atualizaListaEvent = new EventEmitter<boolean>();
  novoProduto!: Produto;
  readonly dialog = inject(MatDialog);

  constructor(private produtosService : ProdutosService){
  }

  criar(produto: Produto){
    this.produtosService.cadastrarProduto(produto)
    .subscribe(_ => this.atualizaListaEvent.emit(true))

  }

  abrirFormularioCadastrar(): void {
 
    const dialogRef = this.dialog.open(FormularioProdutosComponent, {
      data: {id: 0, nome: '', categoria: '', descricao: '', preco: 0, quantidade: 0},
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.novoProduto = result.Produto;
        console.log(this.novoProduto);
        this.criar(this.novoProduto)
      }
    });
  }
}

