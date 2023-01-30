import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastData {
  title: string;
  message: string;
  show?: boolean;
  type?: string;
  progressWidth?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  data!: ToastData;
  public open = new Subject<ToastData>();

  initiate(data: ToastData) {
    this.data = { ...data, show: true, progressWidth: '100%'};
    this.open.next(this.data);
  }

  hide() {
    this.data = { ...this.data, show: false };
    this.open.next(this.data);
  }

  isConfirmed: Subject<boolean> = new Subject();
}
