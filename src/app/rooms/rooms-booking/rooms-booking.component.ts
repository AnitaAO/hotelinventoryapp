import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;

  // id$ ! : Observable<number>;
  constructor(private router: ActivatedRoute) { }

  id$ = this.router.paramMap.pipe(map((params) => params.get('id')))

  ngOnInit(): void {
    // this.id$ = this.router.params.pipe(map(params => params['id']))
    // this.id = this.router.snapshot.params['id']
    // this.id = this.router.queryParams.subscribe((params)=> console.log(params))
    // this.router.paramMap.subscribe((params)=> {
    //   params.get('id')
    // })
  }

}
