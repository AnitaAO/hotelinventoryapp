import {AppconfigInterface} from "./appconfig.interface";
import {InjectionToken} from "@angular/core";
import {environment} from "../../environments/environment";

export const APP_SERVICE_CONFIG = new InjectionToken<AppconfigInterface>('app.config')

export const APP_CONFIG: AppconfigInterface = {
  apiEndPoint: environment.apiEndPoint
};
