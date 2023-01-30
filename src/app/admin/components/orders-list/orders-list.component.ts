import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  statusColors = new Map<string,string>([
      ['Commande enregistrée', '#5a3a22'],
      ['En cours de préparation', '#E58F6C'],
      ['Prêt', 'green']
  ]);


  @Input() orders: any;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {

  }

  updateStatus(order: any){
    const { _id, status } = order;
    this.contactService.updateOrder(_id, {status})
      .subscribe({
        next: (v) => console.log(v),
        error: (err) => console.log(err),
        complete: () => this.updateStatusNotification(order)
      });
  }

  updateStatusNotification(order: any){
    this.contactService.updateNotification(order)
      .subscribe({
        next: (v) => console.log(v),
        error: (err) => console.log(err),
        complete: () => console.log('Notification sent')
      });
  }
}
