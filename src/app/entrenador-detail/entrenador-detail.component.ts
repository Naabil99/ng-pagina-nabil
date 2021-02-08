import {Component, OnInit} from '@angular/core';
import {entrenadorService} from '../shared/entrenador.service';
import {entrenador} from '../shared/entrenador';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-entrenador-detail',
  templateUrl: './entrenador-detail.component.html',
  styleUrls: ['./entrenador-detail.component.css']
})
export class entrenadorDetailComponent implements OnInit {
 
  entrenador: entrenador;
  entrenadorId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private entrenadorService: entrenadorService) {
  }

  ngOnInit() {
    this.entrenadorId = parseInt(this.activatedroute.snapshot.params['entrenadorId']);
    this.entrenadorService.getentrenadorById(this.entrenadorId).subscribe(
      (data: entrenador) => this.entrenador = data
    );
  }
  goEdit():void{
    this.router.navigate(['/entrenadors', this.entrenadorId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
