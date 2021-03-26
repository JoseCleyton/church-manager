import { faEllipsisH, faEdit, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public faEllipsis = faEllipsisH;
  public faMinusCircle = faMinusCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
