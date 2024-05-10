import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {InputComponent} from "./input/input.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, CheckboxComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MindBlow-application';
}
