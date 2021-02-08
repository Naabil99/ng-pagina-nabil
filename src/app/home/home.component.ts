import {Component, OnInit} from '@angular/core';
import {entrenador} from '../shared/entrenador';
import {entrenadorService} from '../shared/entrenador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entrenadors: entrenador[]=[];
  constructor(private entrenadorService: entrenadorService) { }

  ngOnInit() {
   this.entrenadorService.getentrenadors().subscribe(
    (data: entrenador[]) => this.entrenadors = data
   );
  }
}
