import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private httpClient: HttpClient) { }

  getCep(url: string): Observable<any>{
    console.log(url);
    return this.httpClient.get(`https://viacep.com.br/ws/${url}/json`)
  }

}
