
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router'


export interface DeactivatedGuard{
  canExit:()=>boolean | Promise<boolean> 
}

export class DeactiveGaurdService implements CanDeactivate<DeactivatedGuard>{

 canDeactivate(component:DeactivatedGuard,route:ActivatedRouteSnapshot,currentRoute:RouterStateSnapshot,nextState:RouterStateSnapshot):boolean | Promise<boolean> {
  return component.canExit()
 }
}
