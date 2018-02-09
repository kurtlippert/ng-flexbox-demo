import { Component, OnInit } from '@angular/core';
import { DebuggerService } from '../../../common/services/debugger.service'

@Component({
  selector: 'webcast-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class WebcastEventListComponent implements OnInit {

  constructor(private logger: DebuggerService) { }


  ngOnInit() {
    this.log('Started up');
    console.log(this.logger.get());
  }

  log(message: string): void {
    message = message.trim();
    if (!message) { return; }
    this.logger.add(message);
  }
}
