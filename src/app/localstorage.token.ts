import {InjectionToken} from "@angular/core";

export const localStorageToken = new InjectionToken(
  'localStorage',
  {
    providedIn: 'root',
    factory()
    {
      return localStorage
    }
  })
