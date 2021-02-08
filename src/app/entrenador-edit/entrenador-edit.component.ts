import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { entrenador } from '../shared/entrenador';
import { entrenadorService } from '../shared/entrenador.service';

@Component({
  templateUrl: './entrenador-edit.component.html'
})
export class entrenadorEditComponent implements OnInit{

  pageTitle = 'Edicion de viaje: ';
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
    this.entrenadorId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getentrenador(this.entrenadorId);
  }

  getentrenador(id: number): void {
    this.entrenadorService.getentrenadorById(id)
      .subscribe(
        (entrenador: entrenador) => this.displayentrenador(entrenador),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayentrenador(entrenador: entrenador): void {
    if (this.entrenadorForm) {
      this.entrenadorForm.reset();
    }
    this.entrenador = entrenador;
    this.pageTitle = `Edicion de entrenador: ${this.entrenador.nombre}`;

    // Update the data on the form
    this.entrenadorForm.patchValue({
      id: this.entrenador.id,
      imagen: this.entrenador.imagen,
      nombre: this.entrenador.nombre,
      detalles: this.entrenador.detalles,
      experiencia: this.entrenador.experiencia,
    });
  }

  deleteentrenador(): void {
    if (this.entrenador.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the entrenador: ${this.entrenador.id}?`)) {
        this.entrenadorService.deleteentrenador(this.entrenador.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  saveentrenador(): void {
    if (this.entrenadorForm.valid) {
      if (this.entrenadorForm.dirty) {
        this.entrenador = this.entrenadorForm.value;
        this.entrenador.id = this.entrenadorId;
        
        this.entrenadorService.updateentrenador(this.entrenador)
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
