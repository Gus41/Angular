import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { ControllComponent } from '../../../components/controll/controll.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControllComponent, FormsModule],
})
export class NewTicketComponent implements AfterViewInit, OnInit {

  //@ViewChild('form') form? : ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{title:string,text:string}>()

  enteredTitlte = '';
  enteredText = ''


  ngAfterViewInit(): void {
    console.log(this.form()?.nativeElement)
  }
  ngOnInit(): void {
    console.log(this.form()?.nativeElement)
  }

  onSubmit() {

    if (this.enteredTitlte.trim() == '' || this.enteredText.trim() == '') {
      return
    }
    this.add.emit({title: this.enteredTitlte, text: this.enteredTitlte});

    this.enteredText = ''
    this.enteredTitlte = ''
  }
}
