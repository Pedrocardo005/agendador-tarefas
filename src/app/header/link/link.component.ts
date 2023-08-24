import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit{
  @Input() referencia: string | undefined;
  @Input() texto: string | undefined;

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
