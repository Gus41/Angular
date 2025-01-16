import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit {

  private interval?: ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    console.log("ON Init")
    const interval = setInterval(() => {
      const random = Math.random(); // 0 - 0.999

      if (random > 0.5) {
        this.currentStatus = 'online';
        return;
      }

      this.currentStatus = 'offline';
    }, 5000);

    this.destroyRef.onDestroy(()=>{
      clearInterval(interval)
    })
  }


  ngAfterViewInit(): void {
    console.log("After view init")
  }



  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

}
