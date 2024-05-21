import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavigationComponent} from "./components/side-navigation/side-navigation.component";
import {CssSN} from "./components/side-navigation/side-navigation.component";
import {CheckboxComponent} from "./components/checkbox/checkbox.component";
import {IconComponent, IconSize, IconWeight} from "./components/icon/icon.component";
import {HttpClientModule} from "@angular/common/http";
import {AvatarComponent} from "./components/avatar/avatar.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, CheckboxComponent, IconComponent, HttpClientModule, SideNavigationComponent, AvatarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
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



