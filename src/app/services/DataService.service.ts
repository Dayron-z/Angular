import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //Secuencia de datos que se puede suscribir cuando estén disponibles (Caso del getImages que retorna este observable en específico)

//Indica que la clase puede ser inyectada como una dependencia.
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json'; // URL del archivo JSON

  constructor(private http: HttpClient) { }


  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
