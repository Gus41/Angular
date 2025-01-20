import { AfterViewInit, Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {

  //private interval?: ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef);

  constructor(){
    effect(()=>{
      console.log(this.currentStatus())
    });
  }

  ngOnInit() {
    console.log("ON Init")
    const interval = setInterval(() => {
      const random = Math.random(); // 0 - 0.999

      if (random > 0.5) {
        this.currentStatus.set('online')
        return;
      }

      this.currentStatus.set('offline');
    }, 5000);

    this.destroyRef.onDestroy(()=>{
      clearInterval(interval)
    })
  }


  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

}
