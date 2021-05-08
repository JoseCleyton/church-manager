import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Church } from 'src/app/shared/model/church.model';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.scss'],
})
export class DialogAddComponent implements OnInit {
  public type: string;
  public formAdd: FormGroup;
  public typesForm: any[];

  public buttons: any[];

  public titleDialog: string;
  public subTitle: string;

  constructor(
    public dialogRef: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.type = this.data.type;
    this.formAdd = this.data.formAdd;
    this.buttons = this.data.buttonsDialog;
    this.titleDialog = this.data.titleDialog;
    this.subTitle = this.data.subTitle;
    this.typesForm = this.data.typesForm;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  add() {
    if (this.type === 'christian') {
      console.log('ADD Christian');
    } else if (this.type === 'church') {
     
    }

    this.formAdd.reset();
  }
}
