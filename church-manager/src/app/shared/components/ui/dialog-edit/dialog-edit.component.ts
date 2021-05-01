import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponent implements OnInit {
  public title: string;
  public type: string;
  public selected: any;
  public formType: any[];
  public form: FormGroup;
  public buttons: any[];

  constructor(
    public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.selected = this.data.selected;
    this.type = this.data.type;
    this.title = this.data.title;
    this.formType = this.data.formType;
    this.form = this.data.form;
    this.buttons = this.data.buttons;

    if (this.type === 'christian') {
      this.form.get('name').setValue(this.selected.name);
      this.form.get('phone').setValue(this.selected.phone);
      this.form.get('email').setValue(this.selected.email);
      this.form.get('birthDate').setValue(this.selected.birthDate);
      this.form.get('city').setValue(this.selected.city);
      this.form.get('street').setValue(this.selected.street);
      this.form.get('number').setValue(this.selected.number);
      this.form.get('district').setValue(this.selected.district);
    }

    if (this.type === 'church') {
      this.form.get('name').setValue(this.selected.name);
      this.form.get('phone').setValue(this.selected.phone);
      this.form.get('email').setValue(this.selected.email);
      this.form.get('responsible').setValue(this.selected.responsible);
      this.form.get('login').setValue(this.selected.login);
      this.form.get('district').setValue(this.selected.district);
    }
  }

  public closeDialog() {
    this.dialogRef.close();
  }
  public edit() {
    console.log('EDIT')
  }
}
