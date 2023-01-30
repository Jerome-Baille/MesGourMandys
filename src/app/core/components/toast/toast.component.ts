import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          visibility: 'hidden',
          right: '-400px',
        })
      ),
      state(
        'open',
        style({
          right: '40px',
        })
      ),
      transition('open <=> closed', [animate('0.1s ease-in-out')]),
    ]),
  ],
})
export class ToastComponent implements OnInit {  
  toastType: string = 'success';

  @ViewChild('element', { static: false }) progressBar!: ElementRef;
  progressInterval:any;

  constructor(public toastService: ToastService) {
    this.toastService.open.subscribe((data) => {
      if (data.show) {
        data.type? this.toastType = data.type : this.toastType = 'success';

        if(data.type === 'confirm') {
          return
        }
        this.countDown();
      }
    });
  }

  ngOnInit() {
  }

  countDown() {
    this.progressBar.nativeElement.style.width =
      this.toastService.data.progressWidth;

    this.progressInterval = setInterval(() => {
      const width = parseInt(this.progressBar.nativeElement.style.width, 10);

      if (width <= 0) {
        this.toastService.hide();
        clearInterval(this.progressInterval);
        return;
      }

      this.toastService.data.progressWidth = String(width - 2);
      this.progressBar.nativeElement.style.width =
        this.toastService.data.progressWidth + '%';
    }, 50);
  }

  stopCountDown() {
    clearInterval(this.progressInterval);
  }

  confirm() {
    this.toastService.isConfirmed.next(true);
    this.toastService.hide();
  }

  cancel() {
    this.toastService.isConfirmed.next(false);
    this.toastService.hide();
  }

  @ViewChild('toast', { static: true }) toast!: ElementRef;

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (!this.toast.nativeElement.contains(event.target)) {
      this.toastService.hide();
    }
  }
}
