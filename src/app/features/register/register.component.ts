import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, switchMap } from 'rxjs';
import { TarefaService } from 'src/app/core/services/tarefa.service';
import { Tarefa } from 'src/app/shared/models/Tarefa';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {

  applyForm = new FormGroup({
    nome: new FormControl(''),
    prioridade: new FormControl(''),
    inicio: new FormControl(''),
    conclusao: new FormControl('')
  });
  tarefaService = inject(TarefaService);

  ngOnInit(): void {
    
  }

  submitApplication() {
    let tarefa: Tarefa = {
      nome: this.applyForm.value.nome ?? '',
      inicio: new Date(this.applyForm.value.inicio ?? ''),
      prioridade: this.applyForm.value.prioridade ?? ''
    };

    this.tarefaService.addTarefa(tarefa)
      .subscribe({
        next: (success) => {
          console.log('O sucesso', success);
        },
        error: (erro) => {
          console.log('O erro', erro)
        }
      });
  }

}
