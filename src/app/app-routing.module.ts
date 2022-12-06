import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentsComponent } from './form-components/form-components.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [

/*   {path: '',redirectTo: '/home', pathMatch: 'full'}, */
  {path:'home', component: HomeComponent},
  {path:'form-components', component: FormComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
