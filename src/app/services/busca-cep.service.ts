import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private httpClient: HttpClient) { }

  getCep(url: string){
    return this.httpClient.get(`https://viacep.com.br/ws/${url}/json`)
  }

}
