import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pay-tithing',
  templateUrl: './pay-tithing.component.html',
  styleUrls: ['./pay-tithing.component.scss'],
})
export class PayTithingComponent implements OnInit {
  public title = 'Pagar Dízimo';
  public formTither: FormGroup;
  public selected: any;
  constructor(
    public dialogRef: MatDialogRef<PayTithingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.selected = this.data.selected;
    this.formTither = new FormGroup({
      christian: new FormControl(
        { value: this.selected.name, disabled: true },
        [Validators.required]
      ),
      value: new FormControl(null, [Validators.required, Validators.min(1)]),
    });

    this.formTither.get('christian').setValue(this.selected.name);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
