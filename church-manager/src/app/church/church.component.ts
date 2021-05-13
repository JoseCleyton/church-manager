import { DialogEditComponent } from '../shared/components/ui/dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from '../shared/components/ui/dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogViewComponent } from '../shared/components/ui/dialog-view/dialog-view.component';
import * as fromChurch from '../state/church';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state';
import { Church } from '../shared/model/church.model';
import { DeleteChurchComponent } from './delete-church/delete-church.component';
import { EditChurchComponent } from './edit-church/edit-church.component';
@Component({
  selector: 'app-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss'],
})
export class ChurchComponent implements OnInit, OnDestroy {
  public type = 'church';
  public title = 'Nova Capela';
  public subTitle = 'Dados da Capela';
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
      lenghtSm: 12,
    },
    {
      label: 'Telefone',
      formControlName: 'phone',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 12,
    },
    {
      label: 'E-mail',
      formControlName: 'email',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 12,
    },
    {
      label: 'Responsavel',
      formControlName: 'responsible',
      lenghtXl: 3,
      lenghtMd: 6,
      lenghtSm: 12,
    },
    {
      label: 'Login',
      formControlName: 'login',
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
      label: 'Responsavel',
      formControlName: 'responsibleFilter',
      type: 'input',
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

  public formAddChurch: FormGroup;
  public formFilter: FormGroup;

  public churchs: Church[] = [];

  public subscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.createForms();
    this.store$.dispatch(new fromChurch.actions.ListChurchs());
    this.subscribeToChurchs();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  public selectChurch(church: any) {
    this.dialog.open(DialogViewComponent, {
      width: '1100px',
      data: {
        type: 'view',
        typeOfData: 'church',
        titleView: 'Visualizar Dados',
        buttonsDialog: this.buttonsView,
        tableHeader: [
          { name: 'Nome' },
          { name: 'Telefone' },
          { name: 'E-mail' },
          { name: 'Bairro' },
          { name: 'Responsavel' },
          { name: 'Dizimistas' },
          { name: 'Dízimos (Mês)' },
          { name: 'Login' },
        ],
        tableBody: church,
      },
    });
  }

  public preventDefault(event: Event) {
    event.stopPropagation();
  }

  public edit(church: any) {
    this.store$.dispatch(new fromChurch.actions.SelectChurch(church));
    this.dialog.open(EditChurchComponent, {
      width: '900px',
    });
  }
  public delete(church: Church) {
    this.store$.dispatch(new fromChurch.actions.SelectChurch(church));
    this.dialog.open(DeleteChurchComponent, {
      width: '450px',
    });
  }

  public subscribeToChurchs() {
    this.subscription.add(
      this.store$
        .pipe(select(fromChurch.selectors.selectChurchs))
        .subscribe((state) => {
          this.churchs = state;
        })
    );
  }

  private createForms() {
    this.formAddChurch = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null),
      email: new FormControl(null),
      district: new FormControl(null, [Validators.required]),
      responsible: new FormControl(null, [Validators.required]),
      login: new FormControl(null, [Validators.required]),
    });

    this.formFilter = new FormGroup({
      nameFilter: new FormControl(null),
      districtFilter: new FormControl(null),
      responsibleFilter: new FormControl(null),
    });
  }
}
