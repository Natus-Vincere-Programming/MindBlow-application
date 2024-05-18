import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CheckboxComponent} from "./components/checkbox/checkbox.component";
import {IconComponent, IconSize, IconWeight} from "./components/icon/icon.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, CheckboxComponent, IconComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MindBlow-application';
  protected readonly IconSize = IconSize;
  protected readonly IconWeight = IconWeight;

  testConsole() {
    console.log("testConsole");
  }
}
