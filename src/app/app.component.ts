import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavigationComponent} from "./components/side-navigation/side-navigation.component";
import {CssSN} from "./components/side-navigation/side-navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MindBlow-application';
  text="CssSN";
  protected readonly CssSN = CssSN;
}



