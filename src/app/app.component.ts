import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SideNavigationComponent} from "./components/side-navigation/side-navigation.component";
import {CssSN} from "./components/side-navigation/side-navigation.component";
import {CheckboxComponent} from "./components/checkbox/checkbox.component";
import {IconComponent, IconSize, IconWeight} from "./components/icon/icon.component";
import {LoginComponent} from "./page/login/login.component";

@Component({ selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CheckboxComponent, IconComponent, SideNavigationComponent, LoginComponent, RouterLink]
})
export class AppComponent {
  title = 'MindBlow-application';
  text="CssSN";
  protected readonly CssSN = CssSN;
  protected readonly IconSize = IconSize;
  protected readonly IconWeight = IconWeight;
}



