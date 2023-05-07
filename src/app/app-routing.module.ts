import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MotTramdaysOfAngularComponent } from './pages/mot-tramdays-of-angular/mot-tramdays-of-angular.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '100daysofangular', component: MotTramdaysOfAngularComponent },
  // { path: 'nztable', component: NzTabelComponent },
  // { path: 'td', component: TdComponent },
  // { path: 'th', component: ThComponent },
  // { path: 'tr', component: TrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
