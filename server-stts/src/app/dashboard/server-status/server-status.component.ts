import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  //imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {

  ngOnInit() {
    setInterval(() => {
      const random = Math.random(); // 0 - 0.999

      if (random > 0.5) {
        this.currentStatus = 'online';
        return;
      }

      this.currentStatus = 'offline';
    }, 5000);
  }



  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

}
