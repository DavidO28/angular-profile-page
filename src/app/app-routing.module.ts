import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { InformaciaComponent } from './informacia/informacia.component';
import { MtavariComponent } from './mtavari/mtavari.component';

const routes: Routes = [
  { path: '', component: MtavariComponent },
  { path: 'informacia', component: InformaciaComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
