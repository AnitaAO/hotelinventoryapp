import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from "./rooms.component";
import { RoomsAddComponent } from "./rooms-add/rooms-add.component";
import { RoomsBookingComponent } from "./rooms-booking/rooms-booking.component";

const routes: Routes = [
  {
    path: "", //set the path empty for lazyloading
    // path: "rooms",
    component: RoomsComponent,
    children: [
      { path: "add", component: RoomsAddComponent },
      { path: ":id", component: RoomsBookingComponent },  //for children route, remove the /rooms before the :id
      // { path: "rooms/:id", component: RoomsBookingComponent },  //for dynamic route | child route
    ]
  },             //for individual routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
