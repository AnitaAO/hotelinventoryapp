import {Inject, Injectable } from '@angular/core';
import {IRoomsItems} from "../roomsData";
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppconfigInterface} from "../../AppConfig/appconfig.interface";
import {HttpClient, HttpRequest} from "@angular/common/http";
// import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  //create a new header object, add the token and pass it to the request
  // getRooms$ = this.http.get<IRoomsItems>('api/rooms').pipe(shareReplay(1));
  // roomItems: IRoomsItems[] = []

  //this data is coming from a class service
  roomItems: IRoomsItems[] = [
    {
      roomNumber: 1,
      amenities: 'Air conditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
      roomType: 'Deluxe',
      price: 5000,
      photos: 'https://unsplash.com/photos/LUvdI4uCNnM',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      ratings: 4,
    },
    {
      roomNumber: 2,
      amenities: 'Air conditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
      roomType: 'Deluxe room',
      price: 1000,
      photos: 'https://unsplash.com/photos/PJNO2sLlbB8',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      ratings: 5,
    },
    {
      roomNumber: 3,
      amenities: 'Air conditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
      roomType: 'Private suite',
      price: 10000,
      photos: 'https://unsplash.com/photos/CbZ4EDP__VQ',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      ratings: 4.5,
    },

    {
      roomNumber: 4,
      roomType: 'Private suite',
      checkinTime: new Date('22-Nov-2021'),
      checkoutTime: new Date('23-Nov-2021'),
      price: 1200,
      amenities: 'Air conditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
      photos: 'https://unsplash.com/photos/hCU4fimRW-c',
      ratings: 3.5,
    },
  ];

  constructor (@Inject(APP_SERVICE_CONFIG) private AppConfig: AppconfigInterface, private http: HttpClient)
  {
    console.log(this.AppConfig.apiEndPoint);
    console.log('Rooms Service Initialized')
  }

  //this method gets the data without backend api config
  getRooms(){
    return this.roomItems
  }

  addRoom() {
    const row: IRoomsItems = {
      roomNumber: 3,
      amenities: 'Air conditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
      roomType: 'Private suite',
      price: 10000,
      photos: 'https://unsplash.com/photos/CbZ4EDP__VQ',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      ratings: 4.5,
    }
    // this.roomItems.push(row)
    this.roomItems = [...this.roomItems, row ]
  };

  //GET
  //this method gets the data from the backend api
  // getRooms(){
  //   return this.http.get<IRoomsItems[]>('api/rooms')
  // }
  //NOTE:
  //this string cannot be modified without a pipe function
  //shareReplay is meant to buffer the number of times the data is called on the room component
  // getRooms$ = this.http.get<IRoomsItems>('api/room').pipe(shareReplay(1));

  //POST
  // this method post to the table from the backend
  // addRoom(room: IRoomsItems){
  //   return this.http.post<IRoomItems>('api/room', room)
  // }

  //PUT
  // this method edits/updates the table using an editRoom button from .html file
  // editRoom(room: IRoomsItems){
  //   return this.http.put<IRoomsItems>(`api/room/${room.roomNumber}`, room)
  // }

  //DELETE
  //this method does not require an id. You don't have to pass any data to the return method
  // remove(id: string){
  //   return this.roomItems.filter((room)=> room.roomNumber ! === id)
  // }

  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`,
      { reportProgress: true }
    )
    return this.http.request(request)
  }
}

