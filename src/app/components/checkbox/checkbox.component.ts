import { Component } from '@angular/core';
import {IconComponent, IconSize, IconWeight} from "../icon/icon.component";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  isChecked = false;
  text: string = "Value";

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  protected readonly IconWeight = IconWeight;
  protected readonly IconSize = IconSize;
}
