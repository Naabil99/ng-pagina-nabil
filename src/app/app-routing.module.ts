import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { entrenadorDetailComponent } from './entrenador-detail/entrenador-detail.component';
import { entrenadorEditComponent } from './entrenador-edit/entrenador-edit.component';
import { entrenadorNewComponent } from './entrenador-new/entrenador-new.component';

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'entrenadors/:id/new', component: entrenadorNewComponent},
    {path: 'entrenadors/:entrenadorId', component: entrenadorDetailComponent},
    {path: 'entrenadors/:id/edit', component: entrenadorEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
