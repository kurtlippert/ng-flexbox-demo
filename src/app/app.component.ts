import { Component, OnDestroy, OnInit } from '@angular/core';
import * as socketCluster from 'socketcluster-client/socketcluster.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit, OnDestroy {
export class AppComponent {
  title = 'app';
  socket = null;

// ngOnInit() {
//   this.socket = socketCluster.create({
//     hostname: 'dockerhost',
//     port: 8000,
//   });

//   this.socket.on('connect', function () {
//     console.log('Connected');
//   });

//   this.socket.on('close', function () {
//     console.log('Closed');
//   });
// }

// ngOnDestroy() {
//   this.socket.destroy();
// }
}
