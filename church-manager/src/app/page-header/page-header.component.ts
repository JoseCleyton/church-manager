import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddChurchComponent } from '../church/add-church/add-church.component';
import { AddChristianComponent } from '../christians/add-christian/add-christian.component';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import * as fromChurch from '../state/church';
import * as fromChristian from '../state/christian';
import { AppState } from '../state';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  @Input() type: string;
  @Output() searchNameChurch: EventEmitter<string> = new EventEmitter();

  public searchByNameChurch$: Observable<any> = new Observable();
  public subjectSearchBynameChurch$: Subject<any> = new Subject();

  public searchByNameChristian$: Observable<any> = new Observable();
  public subjectSearchBynameChristian$: Subject<any> = new Subject();

  public formFilterChristian: FormGroup;
  public formFilterChurch: FormGroup;

  @Output() searchNameChristian: EventEmitter<string> = new EventEmitter();
  @Output() searchMonth: EventEmitter<string> = new EventEmitter();
  @Output() reset: EventEmitter<string> = new EventEmitter();

  public filtersChristian: any;
  public subscription: Subscription = new Subscription();

  public months = [
    { name: 'Janeiro', value: '01' },
    { name: 'Fevereiro', value: '02' },
    { name: 'Março', value: '03' },
    { name: 'Abril', value: '04' },
    { name: 'Maio', value: '05' },
    { name: 'Junho', value: '06' },
    { name: 'Julho', value: '07' },
    { name: 'Agosto', value: '08' },
    { name: 'Setembro', value: '09' },
    { name: 'Outubro', value: '10' },
    { name: 'Novembro', value: '11' },
    { name: 'Dezembro', value: '12' },
  ];

  constructor(public dialog: MatDialog, private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.createForms();
    this.createSubscriptions();

    this.searchByNameChurch$ = this.subjectSearchBynameChurch$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((name: string) => {
        if (name.trim() === '') {
          return of();
        }
        return of(name);
      })
    );

    this.searchByNameChristian$ = this.subjectSearchBynameChristian$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((name: string) => {
        if (name.trim() === '') {
          return of();
        }
        return of(name);
      })
    );

    this.subscription.add(
      this.searchByNameChurch$.subscribe((name) => {
        this.searchNameChurch.emit(name);
      })
    );

    this.subscription.add(
      this.searchByNameChristian$.subscribe((name) => {
        this.searchNameChristian.emit(name);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public openDialogNew() {
    if (this.type === 'church') {
      this.dialog.open(AddChurchComponent, {
        width: '900px',
      });
    }
    if (this.type === 'christian') {
      this.dialog.open(AddChristianComponent, {
        width: '700px',
      });
    }
  }

  public searchByNameChurch(nameChurch: string) {
    this.subjectSearchBynameChurch$.next(nameChurch);
    if (nameChurch.length === 0) {
      this.resetSearch();
    }
  }

  public searchByNameChristian(nameChristian: string) {
    this.subjectSearchBynameChristian$.next(nameChristian);
    if (nameChristian.length === 0) {
      this.resetSearch();
    }
  }

  public searchByMonthBirthday(month: string) {
    if (month) {
      this.searchMonth.emit(month);
    } else if (this.filtersChristian.monthOfBirthday != 0) {
      this.searchMonth.emit('0');
    }
  }

  private createForms() {
    if (this.type === 'church') {
      this.formFilterChurch = new FormGroup({
        name: new FormControl(null),
      });
    } else {
      this.formFilterChristian = new FormGroup({
        name: new FormControl(null),
        monthOfBirthday: new FormControl(null),
      });
    }
  }
  public createSubscriptions() {
    if (this.type === 'church') {
      this.subscribeToChurchFilters();
    } else {
      this.subscribeToChristianFilters();
    }
  }
  public subscribeToChurchFilters() {
    this.subscription.add(
      this.store$
        .pipe(select(fromChurch.selectors.selectFilters))
        .subscribe((state) => {
          if (state) {
            this.formFilterChurch.get('name').setValue(state.name);
          }
        })
    );
  }

  public subscribeToChristianFilters() {
    this.subscription.add(
      this.store$
        .pipe(select(fromChristian.selectors.selectFilters))
        .subscribe((state) => {
          if (state) {
            this.filtersChristian = { ...state };
            this.formFilterChristian.get('name').setValue(state.name);
            this.formFilterChristian
              .get('monthOfBirthday')
              .setValue(state.monthOfBirthday);
          }
        })
    );
  }

  public resetSearch() {
    this.reset.emit('reset');
  }
}
