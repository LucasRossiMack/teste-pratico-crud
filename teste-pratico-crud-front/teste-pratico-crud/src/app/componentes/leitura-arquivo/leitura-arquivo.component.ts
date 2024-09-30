import { Component, EventEmitter, Output } from '@angular/core';
import { ProdutosService } from '../../sercices/produtos.service';

@Component({
  selector: 'app-leitura-arquivo',
  standalone: true,
  imports: [],
  templateUrl: './leitura-arquivo.component.html',
  styleUrl: './leitura-arquivo.component.css'
})
export class LeituraArquivoComponent {
  
  @Output() atualizaListaEvent = new EventEmitter<boolean>();

  constructor(private produtosService: ProdutosService){
  
  }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    let file:File = event.target.files[0];
    this.upload(file)
  }
  
  upload(file: File) {
    if (file) {
      this.produtosService.uploadFile(file).subscribe(_ => {
        this.atualizaListaEvent.emit(true)
      })
    } else {
      alert("Please select a file first")
    }
  }
}
