import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddChurchComponent } from '../church/add-church/add-church.component';
import { AddChristianComponent } from '../christians/add-christian/add-christian.component';

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
}
