import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "./components/button/button.component";
import {CssButton} from "./components/button/button.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})






export class AppComponent {
  title = 'MindBlow-application';
  text="Button";
  protected readonly CssButton = CssButton;
}
