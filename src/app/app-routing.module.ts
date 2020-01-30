import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesUIComponent } from './components/sales-ui/sales-ui.component';
import { AdminUIComponent } from './components/admin-ui/admin-ui.component';

const routes: Routes = [
  { path: "", component: SalesUIComponent},
  { path: "admin", component: AdminUIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
