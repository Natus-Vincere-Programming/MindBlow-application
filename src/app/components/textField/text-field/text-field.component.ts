import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css'
})
export class TextFieldComponent {
  @Input() value: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = 'Enter text';

  getStyle() {
    return this.type;
  }
}
export enum CssTextFiel {
  Warning = "FieldWarning",
  Error = "FieldError",
  Type7 = "FieldType7",
  Input = "FieldInput",
  Disable = "FieldDisable",
  GrayInput = "FieldGray",
  Default = "FieldDefault"
}

