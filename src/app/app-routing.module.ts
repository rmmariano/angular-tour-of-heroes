import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // <-- this import do the app has routing functionality.
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
