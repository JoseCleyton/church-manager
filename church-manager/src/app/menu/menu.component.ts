import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  public faBars = faBars;
  public url = '';
  public subscription: Subscription = new Subscription();
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.subscribeToUrl();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private subscribeToUrl() {
    this.subscription.add(
      this.router.events.subscribe((url: any) => (this.url = url.url))
    );
  }
}
