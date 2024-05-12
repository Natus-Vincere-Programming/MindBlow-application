import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IconButtonComponent} from "./components/icon-button/icon-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, IconButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MindBlow-application';
}
