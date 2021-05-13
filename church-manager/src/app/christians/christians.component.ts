import { DialogDeleteComponent } from '../shared/components/ui/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from '../shared/components/ui/dialog-edit/dialog-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogViewComponent } from '../shared/components/ui/dialog-view/dialog-view.component';
import { PayTithingComponent } from './pay-tithing/pay-tithing.component';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state';
import * as fromChristian from '../state/christian';
import { Subscription } from 'rxjs';
import { Christian } from '../shared/model/christian.model';
import { EditChristianComponent } from './edit-christian/edit-christian.component';
import { DeleteChristianComponent } from './delete-christian/delete-christian.component';
@Component({
  selector: 'app-christians',
  templateUrl: './christians.component.html',
  styleUrls: ['./christians.component.scss'],
})
export class ChristiansComponent implements OnInit, OnDestroy {
  public christians: Christian[] = [];
  public type = 'christian';
  public title = 'Novo Dizimista';
  public subTitle = 'Dados Pessoais';
  public titleFilter = 'Filtrar';

  public buttonsDialog = [
    { function: 'Cancelar', type: 'basic', justify: 'start' },
    { function: 'Adicionar', type: 'primary', justify: 'end' },
  ];

  public buttonsEdit = [
    { function: 'Cancelar', type: 'basic', justify: 'start' },
    { function: 'Editar', type: 'primary', justify: 'end' },
  ];

  public buttonsDelete = [
    { function: 'Cancelar', type: 'basic', justify: 'start' },
    { function: 'Deletar', type: 'primary', justify: 'end' },
  ];

  public buttonsFilter = [
    { function: 'Cancelar', type: 'basic', justify: 'start' },
    { function: 'Aplicar', type: 'primary', justify: 'end' },
  ];

  public buttonsView = [
    { function: 'Fechar', type: 'basic', justify: 'center' },
  ];

  public typesForm = [
    {
      label: 'Nome',
      formControlName: 'name',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 6,
    },
    {
      label: 'Telefone',
      formControlName: 'phone',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 6,
    },
    {
      label: 'E-mail',
      formControlName: 'email',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 6,
    },
    {
      label: 'Data de Nascimento',
      formControlName: 'birthDate',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 6,
    },
    {
      label: 'Cidade',
      formControlName: 'city',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 6,
    },
    {
      label: 'Rua',
      formControlName: 'street',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 12,
    },
    {
      label: 'Número',
      formControlName: 'number',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 12,
    },
    {
      label: 'Bairro',
      formControlName: 'district',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 12,
    },
  ];

  public typesFormFilter = [
    {
      label: 'Nome',
      formControlName: 'nameFilter',
      type: 'input',
      lenghtXl: 4,
      lenghtMd: 12,
      lenghtSm: 12,
    },
    {
      label: 'Mes de Nascimento',
      formControlName: 'monthBirthDateFilter',
      type: 'select',
      select: [
        { value: '1', name: 'Janeiro' },
        { value: '2', name: 'Fevereiro' },
        { value: '3', name: 'Março' },
        { value: '4', name: 'Abril' },
        { value: '5', name: 'Maio' },
        { value: '6', name: 'Junho' },
        { value: '7', name: 'Julho' },
        { value: '8', name: 'Agosto' },
        { value: '9', name: 'Setembro' },
        { value: '10', name: 'Outubro' },
        { value: '11', name: 'Novembro' },
        { value: '12', name: 'Dezembro' },
      ],
      lenghtXl: 4,
      lenghtMd: 12,
      lenghtSm: 12,
    },
    {
      label: 'Bairro',
      formControlName: 'districtFilter',
      type: 'select',
      select: [
        { value: '1', name: 'Alto da Esperança' },
        { value: '2', name: 'Alto Santa Inês' },
        { value: '3', name: 'Centro' },
      ],
      lenghtXl: 4,
      lenghtMd: 12,
      lenghtSm: 12,
    },
  ];

  public formAddCristian: FormGroup;
  public formFilter: FormGroup;
  public subscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.subscribeToChristians();
    this.store$.dispatch(new fromChristian.actions.ListChristians());

    this.formAddCristian = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null),
      email: new FormControl(null),
      birthDate: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
    });

    this.formFilter = new FormGroup({
      nameFilter: new FormControl(null),
      monthBirthDateFilter: new FormControl(null),
      districtFilter: new FormControl(null),
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public selectChristian(christian: any) {
    this.dialog.open(DialogViewComponent, {
      width: '1100px',
      data: {
        type: 'view',
        typeOfData: 'christian',
        titleView: 'Visualizar Dados',
        buttonsDialog: this.buttonsView,
        tableHeader: [
          { name: 'N.' },
          { name: 'Nome' },
          { name: 'Telefone' },
          { name: 'E-mail' },
          { name: 'Aniversário' },
          { name: 'Cidade' },
          { name: 'Rua' },
          { name: 'Número' },
          { name: 'Bairro' },
        ],
        tableBody: christian,
      },
    });
  }

  public preventDefault(event: Event) {
    event.stopPropagation();
  }

  public edit(christian: Christian) {
    this.store$.dispatch(new fromChristian.actions.SelectChristian(christian));
    this.dialog.open(EditChristianComponent, {
      width: '700px',
    });
  }
  public delete(christian: Christian) {
    this.store$.dispatch(new fromChristian.actions.SelectChristian(christian));
    this.dialog.open(DeleteChristianComponent, {
      width: '400px',
    });
  }
  public openModal(christian: any) {
    this.dialog.open(PayTithingComponent, {
      width: '600px',
      data: {
        selected: christian,
      },
    });
  }

  public subscribeToChristians() {
    this.subscription.add(
      this.store$
        .pipe(select(fromChristian.selectors.selectChristians))
        .subscribe((state) => {
          this.christians = state;
        })
    );
  }
}
