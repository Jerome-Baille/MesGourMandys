import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = false;

  get loading(): boolean {
    return this.isLoading;
  }

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }
}
