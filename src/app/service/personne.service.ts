import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Personne } from '../model/personne';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  baseUrl = "http://localhost:8080";
  prefix =`${this.baseUrl}/personne`

  constructor(private http: HttpClient) { }

  addPersonne(personne: Personne):Observable<Personne>{
    return this.http.post<Personne>(`${this.prefix}/add`,personne)
  }

  getAll(){
    return this.http.get<Personne[]>(`${this.prefix}/`)
  }

  getPersonneByNomEmploi(nom: string) {
    return this.http.get<Personne[]>(`${this.prefix}/nom-emploi/${nom}`)
    
  }
  getPersonnesDatebetween(debut: Date, fin: Date){
    let queryParams = new HttpParams();
    /*queryParams = queryParams
      .set("debut",debut)
      .set("fin",fin)*/
    return this.http.get<Personne[]>(`${this.prefix}/${debut}/${fin}`)
  }
}
