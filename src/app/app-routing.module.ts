import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {LoginComponent} from "./rooms/login/login.component";

const routes: Routes = [
  { path: "employee", component: EmployeeComponent },       //for individual routes
  { path: 'login', component: LoginComponent },
  //below is lazyload for rooms
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then((m) => m.RoomsModule)},
  { path: "", redirectTo: "/login", pathMatch: "full"},     //for default routes
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: '**', component: NotfoundComponent}               //for wildcard routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
