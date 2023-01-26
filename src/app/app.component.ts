import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {LoggerService} from "./rooms/logger/services/logger.service";
import { localStorageToken } from  "./localstorage.token"
import {InitService} from "./init.service";
// import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'hotelinventoryapp';

  //used for switchcase example
  role: string = 'Admin';

  @ViewChild('name', {static: true, read: ElementRef}) name = ElementRef<HTMLElement>;

  empName: string = 'John'

  constructor(@Optional() private loggerService: LoggerService, @Inject(localStorageToken) private localStorage: Storage, private initService: InitService) {
    console.log(initService.config);
  }
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms=40;
  // // }

  ngOnInit(): void {
    this.loggerService.log('AppComponent.ngOnInIt()');
    this.localStorage.setItem('name', 'Hilton Hotel');
    // this.name.nativeElement.innerText = 'Giggles'
    // new this.name({}).nativeElement = 'Giggles'
  }
}
