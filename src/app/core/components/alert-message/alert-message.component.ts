import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {
  @Input() message!: string;
  @Output() messageChange : EventEmitter<any> =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.messageChange.emit({message : 'close alert message'})
    }, 2000);
  }

}
