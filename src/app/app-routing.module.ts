import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SozlamalarComponent } from './sozlamalar/sozlamalar.component';
import { BizHaqimizdaComponent } from './biz-haqimizda/biz-haqimizda.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainInformationComponent } from './main-information/main-information.component';



const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home' , component:MainInformationComponent},
  {path: 'contactUs', component:ContactUsComponent},
  {path: 'aboutUs', component:BizHaqimizdaComponent},
  {path: 'settings', component:SozlamalarComponent},
  {path: '**', component:ErrorPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
