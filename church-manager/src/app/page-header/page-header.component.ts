import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {

  @Input() filters: any[];
  @Input() titleDialog: string;
  @Input() titleFilter: string;
  @Input() buttonsDialog: any;
  @Input() formAdd: FormGroup;
  @Input() formFilter: FormGroup;
  @Input() typesForm: any[];
  @Input() typesFormFilter: any[];
  @Input() buttonsFilter: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public openDialogNew() {
    this.dialog.open(DialogComponent, {
      width: '900px',
      data: {
        type: 'add',
        typesForm: this.typesForm,
        titleDialog: this.titleDialog,
        buttonsDialog: this.buttonsDialog,
        formAdd: this.formAdd,
      },
    });
  }

  public openDialogFilter() {
    this.dialog.open(DialogComponent, {
      width: '800px',
      data: {
        type: 'filter',
        filters: this.filters,
        typesFormFilter: this.typesFormFilter,
        formFilter: this.formFilter,
        titleFiltter: this.titleFilter,
        buttonsDialog: this.buttonsFilter,
      },
    });
  }
}
