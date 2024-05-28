import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavigationComponent} from "./components/side-navigation/side-navigation.component";
import {CssSN} from "./components/side-navigation/side-navigation.component";
import {CheckboxComponent} from "./components/checkbox/checkbox.component";
import {IconComponent, IconSize, IconWeight} from "./components/icon/icon.component";

@Component({ selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css', imports: [RouterOutlet, CheckboxComponent, IconComponent, SideNavigationComponent] })
export class AppComponent {
  title = 'MindBlow-application';
  text="CssSN";
  protected readonly CssSN = CssSN;
  protected readonly IconSize = IconSize;
  protected readonly IconWeight = IconWeight;

  testConsole() {
    console.log("testConsole");
  }
}



