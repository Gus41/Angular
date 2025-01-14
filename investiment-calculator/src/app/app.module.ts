import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestimentResultsComponent } from "./investiment-results/investiment-results.component";
import {FormsModule} from '@angular/forms'
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [HeaderComponent, AppComponent, UserInputComponent, InvestimentResultsComponent],
    imports: [FormsModule,BrowserModule]
})
export class AppModule {

}