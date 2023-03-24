import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TabelleComponent } from './tabelle/tabelle.component';
import { CreateComponent } from './create/create.component';
import { FormComponent } from './tabelle/form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full'},
  {path: 'footer', component: FooterComponent},
  {path: 'tabelle', component: TabelleComponent},
  {path: 'tabelle/:id', component: TabelleComponent},
  { path: 'create', component: CreateComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
