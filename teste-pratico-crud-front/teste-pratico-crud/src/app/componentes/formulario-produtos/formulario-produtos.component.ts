import {ChangeDetectionStrategy, Component, inject, model, OnInit, Optional, Output, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-formulario-produtos',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './formulario-produtos.component.html',
  styleUrl: './formulario-produtos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class FormularioProdutosComponent implements OnInit {
  
  readonly dialogRef = inject(MatDialogRef<FormularioProdutosComponent>);
  data = inject(MAT_DIALOG_DATA);
  novoProduto: Produto = {id: this.data.id, nome: this.data.nome, categoria: this.data.categoria, descricao: this.data.descricao, preco: this.data.preco, quantidade: this.data.quantidade};
  pordutoForm!: FormGroup;

  ngOnInit(): void {
    this.pordutoForm = new FormGroup({
      id: new FormControl(this.novoProduto.id, Validators.required),
      nome: new FormControl(this.novoProduto.nome, [
        Validators.required,
        Validators.minLength(4),
      ]),
      categoria: new FormControl(this.novoProduto.categoria, Validators.required),
      descricao: new FormControl(this.novoProduto.descricao, Validators.required),
      preco: new FormControl(this.novoProduto.preco, Validators.required),
      quantidade: new FormControl(this.novoProduto.quantidade, Validators.required),
    });
  }

  enviar() {
    console.log(this.novoProduto);

    this.dialogRef.close({Produto:this.novoProduto});

  }

}
