import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from 'src/app/shared/models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  apiUrl = 'http://localhost:8080/tarefas';

  constructor(private http: HttpClient) { }

  getTarefas() : Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.apiUrl}`);
  }

  addTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.apiUrl}`, tarefa);
  }
}
