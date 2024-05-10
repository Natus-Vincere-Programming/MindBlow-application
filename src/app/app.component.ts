import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "./components/button/button.component";
import {CssButton} from "./components/button/button.component";
import {TextFieldComponent} from "./components/textField/text-field/text-field.component";
import {CssTextFiel} from "./components/textField/text-field/text-field.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent,TextFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})






export class AppComponent {
  title = 'MindBlow-application';
  text="Button";
  text2="CssTextField";
  protected readonly CssButton = CssButton;
  protected readonly CssTextField = CssTextFiel;
  protected readonly CssTextFiel = CssTextFiel;
}
