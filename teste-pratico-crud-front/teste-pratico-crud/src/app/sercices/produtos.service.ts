import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) {
   }
   obterProdutos(){
      return this.httpClient.get<Produto[]>(this.url)
   }

   cadastrarProduto(produto: Produto){
    return this.httpClient.post<void>(this.url,produto)
   }

   obterProduto(id: number){
    return this.httpClient.get<Produto>(`${this.url}/${id}`)
   }
   
   editarProduto(id: number, produto: Produto){
    return this.httpClient.put<Produto>(`${this.url}/${id}`,produto)
   }
   
   deletarProduto(id: number){
    return this.httpClient.delete<void>(`${this.url}/${id}`)
   }

   uploadFile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.httpClient.post<void[]>(this.url+"UploadFile", formParams)
  }
}
