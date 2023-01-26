import { Component, OnInit } from '@angular/core';
import {IRoomsItems} from "../roomsData";
import {RoomsService} from "../services/rooms.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  room: IRoomsItems =
    {
      roomType: '',
      roomNumber: '',
      amenities: '',
      photos: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      price: 0,
      ratings: 4,
    }
  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

  AddRoom(roomsForm: NgForm){
    this.roomsService.addRoom();
    roomsForm.reset()
  }

}
