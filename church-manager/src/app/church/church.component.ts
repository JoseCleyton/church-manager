import { DialogEditComponent } from '../shared/components/ui/dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from '../shared/components/ui/dialog-delete/dialog-delete.component';
import { DialogComponent } from './../page-header/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss'],
})
export class ChurchComponent implements OnInit {
  public title = 'Nova Capela';
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

  public data: any[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
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

    this.data = [
      {
        name: 'Santa Inês',
        phone: '(81) 9.9976-1256',
        email: 'teste1@123.com',
        district: 'Alto Santa Inês',
        responsible: 'Mark',
        tithers: '250',
        money: '1000',
        login: '123456',
        password: '123456',
      },
      {
        name: 'Santa Ana',
        phone: '(81) 9.9976-6754',
        email: 'teste2@123.com',
        district: 'Caçatuba',
        responsible: 'José',
        tithers: '100',
        money: '500',
        login: '123456',
        password: '123456',
      },
      {
        name: 'Nossa Senhora do Rosário',
        phone: '(81) 9.9004-1234',
        email: 'teste3@123.com',
        district: 'Condique',
        responsible: 'Maria',
        tithers: '70',
        money: '410',
        login: '123456',
        password: '123456',
      },
      {
        name: 'São José',
        phone: '(81) 9.7890-4106',
        email: 'teste4@123.com',
        district: 'Cutias',
        responsible: 'josefa',
        tithers: '50',
        money: '258',
        login: '123456',
        password: '123456',
      },
    ];
  }

  public selectChurch(church: any) {
    this.dialog.open(DialogComponent, {
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
    this.dialog.open(DialogEditComponent, {
      width: '1100px',
      data: {
        title: 'Editar Capela',
        type: 'church',
        selected: church,
        formType: this.typesForm,
        form: this.formAddChurch,
        buttons: this.buttonsEdit,
      },
    });
  }
  public delete(church: any) {
    this.dialog.open(DialogDeleteComponent, {
      width: '400px',
      data: {
        title: 'Deletar Capela',
        type: 'church',
        selected: church,
        buttons: this.buttonsDelete,
      },
    });
  }
}
