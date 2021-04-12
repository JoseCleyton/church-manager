import { faEllipsisH, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../shared/components/ui/dialog-delete/dialog-delete.component';
import { DialogViewComponent } from '../shared/components/ui/dialog-view/dialog-view.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  public faEllipsis = faEllipsisH;
  public faMinusCircle = faMinusCircle;

  public data = [];

  public title = 'Nova Mensagem';
  public titleFilter = 'Filtrar';

  public buttonsDialog = [
    { function: 'Cancelar', type: 'basic', justify: 'start' },
    { function: 'Adicionar', type: 'primary', justify: 'end' },
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
      label: 'Destinatario',
      formControlName: 'to',
      type: 'input',
      lenghtXl: 4,
      lenghtMd: 6,
      lenghtSm: 6,
    },
    {
      label: 'Título',
      formControlName: 'subject',
      type: 'input',
      lenghtXl: 4,
      lenghtMd: 6,
      lenghtSm: 6,
    },
    {
      label: 'Mensagem',
      formControlName: 'message',
      type: 'text',
      lenghtXl: 4,
      lenghtMd: 6,
      lenghtSm: 6,
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
      label: 'Título',
      formControlName: 'titleFilter',
      type: 'input',
      lenghtXl: 4,
      lenghtMd: 12,
      lenghtSm: 12,
    },
    {
      label: 'Data',
      formControlName: 'dateFilter',
      type: 'input',
      lenghtXl: 4,
      lenghtMd: 12,
      lenghtSm: 12,
    },
  ];

  public formNewMessage: FormGroup;
  public formFilter: FormGroup;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.formNewMessage = new FormGroup({
      to: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
    });

    this.formFilter = new FormGroup({
      nameFilter: new FormControl(null),
      titleFilter: new FormControl(null),
      dateFilter: new FormControl(null),
    });

    this.data = [
      {
        id: '1',
        sender: 'José',
        title: 'Teste',
        message:
          'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        dateHour: '09/12/2020 09:58',
      },
      {
        id: '2',
        sender: 'Maria',
        title: 'Reunião',
        message:
          'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',

        dateHour: '05/04/2021 08:12',
      },
      {
        id: '3',
        sender: 'Afonso',
        title: 'Me ligue',
        message:
          'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',

        dateHour: '10/03/2021 12:00',
      },
      {
        id: '4',
        sender: 'João',
        title: 'Comprar toalhas',
        message:
          'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        dateHour: '30/02/2021 17:09',
      },
    ];
  }

  public selectMessage(message: any) {
    this.dialog.open(DialogViewComponent, {
      width: '1100px',
      data: {
        type: 'text',
        titleView: 'Visualizar Mensagem',
        title: message.title,
        data: message,
      },
    });
  }

  public preventDefault(event: Event) {
    event.stopPropagation();
  }
  public delete(message: any) {
    this.dialog.open(DialogDeleteComponent, {
      width: '400px',
      data: {
        title: 'Deletar Mensagem',
        type: 'message',
        selected: message,
        buttons: this.buttonsDelete,
      },
    });
  }
}
