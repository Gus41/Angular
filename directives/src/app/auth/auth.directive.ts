import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  constructor() {
    console.log("AuthDirective is active")
    effect(()=>{
      if(this.authService.activePermission() == this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templateRef)
        return
      }
      this.viewContainerRef.clear()
    });
  }
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  userType = input.required<Permission>({alias:'appAuth'});
  private authService = inject(AuthService);

}
