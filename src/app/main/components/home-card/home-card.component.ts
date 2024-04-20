import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public body!: string;
  @Input({ required: true }) public footer!: string;
}
