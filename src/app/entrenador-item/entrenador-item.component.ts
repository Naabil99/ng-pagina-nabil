import {Component, Input} from '@angular/core';
import {entrenador} from '../shared/entrenador';

@Component({
  selector: 'app-entrenador-item',
  templateUrl: './entrenador-item.component.html',
  styleUrls: ['./entrenador-item.component.css']
})
export class entrenadorItemComponent {

  @Input() entrenador: entrenador;
}
