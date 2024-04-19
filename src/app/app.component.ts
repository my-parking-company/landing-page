import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyMatModule } from './mat/my-mat.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyMatModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';
}
