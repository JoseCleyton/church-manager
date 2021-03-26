import { faEllipsisH, faEdit, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-christians',
  templateUrl: './christians.component.html',
  styleUrls: ['./christians.component.scss']
})
export class ChristiansComponent implements OnInit {
  public faEllipsis = faEllipsisH;
  public faEdit = faEdit;
  public faMinusCircle = faMinusCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
