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
    return this.httpClient.get<Produto[]>(this.url+'Produtos')
   }
}
