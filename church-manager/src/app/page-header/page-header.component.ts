import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddComponent } from '../shared/components/ui/dialog-add/dialog-add.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() filters: any[];
  @Input() titleDialog: string;
  @Input() subTitle: string;
  @Input() titleFilter: string;
  @Input() buttonsDialog: any;
  @Input() formAdd: FormGroup;
  @Input() formFilter: FormGroup;
  @Input() typesForm: any[];
  @Input() typesFormFilter: any[];
  @Input() buttonsFilter: any;
  @Input() isAdd = true;
  @Input() type: string;
  public isFilter = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public openDialogNew() {
    this.dialog.open(DialogAddComponent, {
      width: '900px',
      data: {
        type: this.type,
        typesForm: this.typesForm,
        titleDialog: this.titleDialog,
        subTitle: this.subTitle,
        buttonsDialog: this.buttonsDialog,
        formAdd: this.formAdd,
      },
    });
  }
}
