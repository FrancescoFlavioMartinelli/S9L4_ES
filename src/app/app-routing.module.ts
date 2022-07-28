import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliComponent } from './dettagli/dettagli.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "post-attivi",
    component: PostAttiviComponent
  },{
    path: "post-inattivi",
    component: PostInattiviComponent
  },
  {
    path: "dettagli/:id",
    component: DettagliComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
