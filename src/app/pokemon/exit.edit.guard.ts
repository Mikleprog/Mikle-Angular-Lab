import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core'
import { Observable } from "rxjs";
import { Component } from "@angular/core";

export interface ComponentCanDeactivate{
  canDeactivate: () => Observable<boolean> | Promise<boolean> |boolean ;
}
@Injectable()
export class ExitEditGuard implements CanDeactivate<ComponentCanDeactivate>{
 
  canDeactivate(component: ComponentCanDeactivate,
    route: ActivatedRouteSnapshot,
    state:RouterStateSnapshot ) {
         
    return component.canDeactivate ? component.canDeactivate() : true;

  }
}