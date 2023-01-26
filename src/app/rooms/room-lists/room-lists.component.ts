import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output, SimpleChanges, OnChanges, OnDestroy
} from '@angular/core';
import {IRoomsItems} from "../roomsData";

@Component({
  selector: 'app-room-lists',
  templateUrl: './room-lists.component.html',
  styleUrls: ['./room-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() Table: IRoomsItems[] | null = [];

  @Input() title: string = '';

  @Output() selectedRow = new EventEmitter<IRoomsItems>()

  constructor() { }

  ngOnDestroy(): void {
        console.log('on destroy is called')
    }

  ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if (changes['title'].currentValue){
          this.title = changes['title'].currentValue.toUpperCase()
        }
    }

  ngOnInit(): void {}

  selectRow(room: IRoomsItems){
    this.selectedRow.emit(room)
  }

}
