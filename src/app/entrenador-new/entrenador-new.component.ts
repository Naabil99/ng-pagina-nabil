import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { entrenador } from '../shared/entrenador';
import { ActivatedRoute, Router } from '@angular/router';
import { entrenadorService } from '../shared/entrenador.service';

@Component({
  selector: 'app-entrenador-new',
  templateUrl: './entrenador-new.component.html',
  styleUrls: ['./entrenador-new.component.css']
})
export class entrenadorNewComponent implements OnInit {

  pageTitle = 'Nuevo entrenador';
  errorMessage: string;
  entrenadorForm: FormGroup;

  entrenadorId:number;
  entrenador: entrenador;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private entrenadorService: entrenadorService) {  }

  ngOnInit(): void {
    this.entrenadorForm = this.fb.group({
      nombre: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      imagen: '',
      detalles: '',
      experiencia: '',
    });

    // Read the entrenador Id from the route parameter
    this.entrenadorId = parseInt(this.activatedroute.snapshot.params['entrenadorId']);
  }

  saveentrenador(): void {
    if (this.entrenadorForm.valid) {
      if (this.entrenadorForm.dirty) {
        this.entrenador = this.entrenadorForm.value;
        this.entrenador.id = this.entrenadorId;
        
        this.entrenadorService.createentrenador(this.entrenador)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.entrenadorForm.reset();
    this.router.navigate(['']);
  }
  
}
