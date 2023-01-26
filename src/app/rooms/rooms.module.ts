import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';

import {RoomsComponent} from "./rooms.component";
import {RoomListsComponent} from "./room-lists/room-lists.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {RoomsAddComponent} from "./rooms-add/rooms-add.component";
import {FormsModule} from "@angular/forms";
import {HeaderModule} from "../header/header.module";


@NgModule({
  declarations: [
    RoomsComponent,
    RoomListsComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
  ],
  imports: [
    RoomsRoutingModule,
    CommonModule,
    FormsModule,
    HeaderModule,
  ]
})
export class RoomsModule { }
