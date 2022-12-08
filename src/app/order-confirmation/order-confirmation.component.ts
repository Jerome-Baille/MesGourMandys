import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
  @Input() order: any = {};
  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
    console.log(this.order)
  }

}
