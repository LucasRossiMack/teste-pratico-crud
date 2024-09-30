import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProdutosService } from '../../sercices/produtos.service';
import { inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from '../../models/produto.model';
import { FormularioProdutosComponent } from '../formulario-produtos/formulario-produtos.component';

@Component({
  selector: 'app-editar-produto',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.css'
})

export class EditarProdutoComponent {

  @Input() produto!: Produto;
  @Output() atualizaListaEvent = new EventEmitter<boolean>();
  novoProduto!: Produto;
  readonly dialog = inject(MatDialog);

  constructor(private produtosService : ProdutosService){
  }

  editar(produto: Produto){
    this.produtosService.editarProduto(produto.id,produto)
    .subscribe(_ => this.atualizaListaEvent.emit(true))

  }

  abrirFormularioEditar(produto: Produto): void {
 
    const dialogRef = this.dialog.open(FormularioProdutosComponent, {
      data: {id: this.produto.id, nome: this.produto.nome, categoria: this.produto.categoria, descricao: this.produto.descricao, preco: this.produto.preco, quantidade: this.produto.quantidade},
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.novoProduto = result.Produto;
        console.log(this.novoProduto);
        this.editar(this.novoProduto)
      }
    });
  }
}

