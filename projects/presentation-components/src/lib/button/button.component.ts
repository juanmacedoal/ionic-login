import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() id: string = 'button';
  @Input() shape: string;
  @Input() label: string = 'buton';
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit() {}
}
