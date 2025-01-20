import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'handleClick($event)'
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkDirective{
    constructor(){
        console.log("Safe Link Directive is active!");
    }

    queryParam = input<string>("myapp", {alias:'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);


    handleClick(event: MouseEvent){
        const leave = window.confirm("Do you want to leave this webSite?")
        console.log(this.hostElementRef)

        if(leave){
            //const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href += `?from=${this.queryParam()}`;

            return;
        }
        event.preventDefault();
    }

}