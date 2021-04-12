import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.scss'],
})
export class DialogViewComponent implements OnInit {
  public titleView: string;
  public type: string;
  public data: any;
  public selectedItem: any;
  public buttons: any[];
  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any
  ) {}

  ngOnInit(): void {
    this.data = this.inputData.data;
    this.titleView = this.inputData.titleView;
    this.type = this.inputData.type;
  }

  public closeDialog() {}
}
