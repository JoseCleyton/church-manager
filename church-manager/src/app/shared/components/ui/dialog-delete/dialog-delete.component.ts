import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
})
export class DialogDeleteComponent implements OnInit {
  public title: string;
  public type: string;
  public selected: any;
  public buttons: any[];

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.selected = this.data.selected;
    this.type = this.data.type;
    this.title = this.data.title;
    this.buttons = this.data.buttons;
  }

  public closeDialog() {
    this.dialogRef.close();
  }
  public delete() {
    console.log('DELETE');
  }
}
