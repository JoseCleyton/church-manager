import { DialogDeleteComponent } from '../shared/components/ui/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from '../shared/components/ui/dialog-edit/dialog-edit.component';
import { DialogComponent } from './../page-header/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-christians',
  templateUrl: './christians.component.html',
  styleUrls: ['./christians.component.scss'],
})
export class ChristiansComponent implements OnInit {
  public data = [];

  public title = 'Novo Dizimista';
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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
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

    this.data = [
      {
        id: '1',
        name: 'José',
        city: 'Passira',
        street: 'Av. Central',
        number: '12',
        district: 'Centro',
        email: 'teste1@123.com',
        phone: '(81) 9.9976-1256',
        birthDate: '12/06/2000',
      },
      {
        id: '2',
        name: 'João',
        city: 'Passira',
        street: 'Rua Quarenta e Cinco',
        number: '90',
        district: 'Alto da Esperança',
        email: 'teste2@123.com',
        phone: '(81) 9.9387-4578',
        birthDate: '30/10/1967',
      },
      {
        id: '3',
        name: 'Maria',
        city: 'Passira',
        street: 'Rua de Baixo',
        number: '567',
        district: 'Alto da Alegria',
        email: 'teste3@123.com',
        phone: '(81) 9.8790-4537',
        birthDate: '22/01/1956',
      },
      {
        id: '4',
        name: 'Josefa',
        city: 'Passira',
        street: 'Av. Mascarenhas',
        number: '009',
        district: 'Centro',
        email: 'teste4@123.com',
        phone: '(81) 9.7964-5678',
        birthDate: '18/10/2002',
      },
    ];
  }

  public selectChristian(christian: any) {
    this.dialog.open(DialogComponent, {
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

  public edit(christian: any) {
    this.dialog.open(DialogEditComponent, {
      width: '1100px',
      data: {
        title: 'Editar Dizimista',
        type: 'christian',
        selected: christian,
        formType: this.typesForm,
        form: this.formAddCristian,
        buttons: this.buttonsEdit,
      },
    });
  }
  public delete(christian: any) {
    this.dialog.open(DialogDeleteComponent, {
      width: '400px',
      data: {
        title: 'Deletar Dizimista',
        type: 'christian',
        selected: christian,
        buttons: this.buttonsDelete,
      },
    });
  }
}
