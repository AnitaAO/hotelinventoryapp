//for chaining object and ngIf display event
// export interface RoomsData{
//   totalRooms?: number
//   availableRooms?: number
//   bookedRooms?: number
//}

export interface IRooms{
  totalRooms: number
  availableRooms: number
  bookedRooms: number
}

export interface IRoomsItems{
  roomNumber?: number | string
  checkinTime: Date
  checkoutTime: Date
  roomType: string
  amenities: string
  price: number
  photos: string
  ratings: number
}
