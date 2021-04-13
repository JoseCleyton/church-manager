
import { FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  public formAdd: FormGroup;
  public formFilter: FormGroup;
  public type: string;
  public buttons: any[];

  public titleDialog: string;
  public titleFiltter: string;
  public titleView: string;

  public typesForm: any[];
  public typesFormFilter: any[];

  public filters: any[];

  public appliedFilters: any[] = [undefined];

  public tableHeader: any[];
  public selectedItem: any;

  public typeOfData: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.type = this.data.type;
    this.buttons = this.data.buttonsDialog;
    this.titleDialog = this.data.titleDialog;

    if (this.type !== 'view') {
      this.formAdd = this.data.formAdd;

      this.titleFiltter = this.data.tilteFiltter;

      this.typesForm = this.data.typesForm;
      this.typesFormFilter = this.data.typesFormFilter;

      this.formAdd = this.data.formAdd;
      this.formFilter = this.data.formFilter;

      this.filters = this.data.filters;
    } else {
      this.typeOfData = this.data.typeOfData;
      this.titleView = this.data.titleView;
      this.tableHeader = this.data.tableHeader;
      this.selectedItem = this.data.tableBody;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  addNewChristian() {
    console.log('NEW');
  }

  public insertNewFilter(id: string, name: string) {
    console.log(id, name);
    if (this.appliedFilters[id] === name) {
      this.appliedFilters[id] = undefined;
    } else {
      this.appliedFilters[id] = name;
    }
  }

  public applyFilters() {
    const f = this.appliedFilters.map((e) => {
      if (e !== undefined) {
        return { id: e.id, name: e.name };
      }
    });
    console.log(f);
  }
}
