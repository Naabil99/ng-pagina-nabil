import { Component, OnInit } from '@angular/core';
import { entrenadorService } from '../shared/entrenador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private entrenadorService: entrenadorService, private router: Router) { }

  ngOnInit() {
  }

  newentrenador(){
      // Get max entrenador Id from the entrenador list
      this.entrenadorService.getMaxentrenadorId().subscribe(
        data => this.id = data
      );
      this.router.navigate(['/entrenadors', this.id, 'new'])

  }

}
