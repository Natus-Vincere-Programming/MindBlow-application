import {Component, Input} from '@angular/core';
import {style} from "@angular/animations";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-button',
  standalone: true,
    imports: [
        IconComponent
    ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
    @Input() buttonText: string="TEXT";
    @Input() type: ButtonType=ButtonType.OutLine;
    @Input() size: ButtonSize=ButtonSize.Small;
    @Input() icon: string="";
    /**
    * Розташування іконки
    */
    @Input() iconPosition:string="none";

  getStyle() {
    return this.type+" "+this.size;
}


}
export enum ButtonType {
    Filled = "ButtonFilled",
    OutLine = "ButtonOutLine",
    Text = "ButtonText",

}
export enum ButtonSize {
    Big = "BigButton",
    Large = "LargeButton",
    Small = "SmallButton"

}
