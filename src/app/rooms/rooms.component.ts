import {AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren} from '@angular/core';
import {IRooms, IRoomsItems} from "./roomsData";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";
import {catchError, map, Observable, Subject, Subscription} from "rxjs";
import {HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // hotelName: string = 'Michani';

  numberOfRooms: number = 10;

  showNoOfRooms: boolean = true;

  selectedRow!: IRoomsItems;

  rooms: IRooms = {
    totalRooms: 10,
    availableRooms: 5,
    bookedRooms: 20
  }
  //for chaining an event and displaying ngIf event
  // rooms?: RoomsData = {
    //empty objects
  // }
  roomItems: IRoomsItems[] = [];

  //OBSERVABLES
  stream = new Observable((observer)=> {
    observer.next('user1')
    observer.next('user2')
    observer.next('user3')
    observer.complete()
  })

  title: string = ""

  error: string = '';

  totalBytes: number = 0;

  Subscription !: Subscription;

  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  //THE CODE BELOW IS USED TO MODIFY THE SERVICE WITHOUT SUBSCRIBING TO IT
  // roomsCount$ = this.roomsService.getRooms$.pipe(
  //   map((Table) => Table.length))

  //we used the $string to access the async on the html file.
  //let's also handle errors here. We can do that on the service file too
  //Generally, errors should be handled in a separate file or on the service file
  // rooms$ = this.roomsService.getRooms$;
  // rooms$ = this.roomsService.getRooms$
    // .pipe(catchError(err)=>{
      // console.log(err);
      //this.error$.next(err.message);
      // return of([])
  // });

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event)=> {
      switch(event.type){
        case HttpEventType.Sent: {
          console.log('Request has been made')
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!')
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes+=event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }

      }
    })
    this.stream.subscribe({
      next: (value)=> console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)})
    this.stream.subscribe((data)=> console.log(data))
    this.roomItems = this.roomsService.getRooms();
    //this is with using get string
    // this.roomsService.getRooms$.subscribe((rooms) =>{
    //   this.roomItems = rooms
    //THIS Subscription FROM rxjs IS USED TO HOLD THE SUBSCRIBE FOR UNSUBSCRIBE AND USE OnDestroy to unsubscribe
    // this.roomsService.getRooms$.subscribe((rooms) =>{
    //   this.roomItems = rooms
    // })
  }

  //subscribing to the http client in roomsService
  // ngOnInit(): void {
  //read call
  //use the subscription object from rxjs to hold the subscription to unsubscribe
  // this.subscription =  this.roomsService.getRooms$().subscribe((rooms)=>{
  //     this.roomItems = rooms
  //   });
  //post call
  //   this.roomsService.addRoom(rooms).subscribe((data)=>{
  //     this.roomItems = data;
  //   })
  // }

  toggle(){
    this.showNoOfRooms = !this.showNoOfRooms;
    this.title = 'Rooms Lists';
  }

  selectRow(room: IRoomsItems){
    this.selectedRow = room
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

  // editRoom(){
  //   const row: IRoomsItems = {
  //     roomNumber: '3',
  //     amenities: 'Air conditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
  //     roomType: 'Deluxe',
  //     price: 4560,
  //     photos: 'https://unsplash.com/photos/LUvdI4uCNnM',
  //     checkinTime: new Date('21-Nov-2021'),
  //     checkoutTime: new Date('22-Nov-2021'),
  //     ratings: 5
  //   }
  //   this.roomsService.editRoom(room).subscribe((data)=>{
  //     this.roomItems = data
  //   })
  // }

  // deleteRoom(){
  //   this.roomsService.remove('3').subscride((data)=>{
  //     this.roomItems = data
  //   })
  // }

  ngDoCheck(): void {
    console.log('Do check is called');
  };

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View'
    this.headerChildrenComponent.last.title = 'Rooms View 2'
  };
  //this is used to unsubscribe to the service
  // ngOnDestroy(){
  //   if(this.Subscription){
  //     this.Subscription.unsubscribe();
  //   }
  // }

  // const addRoom: IRoomsItems {
  //
  // }
}
