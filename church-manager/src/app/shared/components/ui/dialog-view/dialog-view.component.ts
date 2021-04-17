import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.scss'],
})
export class DialogViewComponent implements OnInit {
  public typeOfData: string;
  public titleView: string;
  public data: any;
  public selectedItem: any;
  public buttons: any[];
  public tableHeader: any[];

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any
  ) {}

  ngOnInit(): void {
    this.typeOfData = this.inputData.typeOfData;
    this.tableHeader = this.inputData.tableHeader;
    this.selectedItem = this.inputData.tableBody;
    this.data = this.inputData.data;
    this.titleView = this.inputData.titleView;
    this.buttons = this.inputData.buttonsDialog;
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
