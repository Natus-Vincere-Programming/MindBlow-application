import {Component, Input} from '@angular/core';
import {IconComponent, IconWeight} from "../icon/icon.component";

@Component({
  selector: 'app-side-navigation',
  standalone: true,
    imports: [
        IconComponent
    ],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css'
})
export class SideNavigationComponent {
  @Input() buttonText!: string;
  @Input() type: string="";
  @Input() size: string="";
  @Input() imgType1: string="3D";
  @Input() imgType2: string="3D";
  @Input() weight: IconWeight = IconWeight.REGULAR;





  getStyle() {
    return this.type+" "+this.size;
  }
}


export enum CssSN {
  On = "onBat",
  Of = "ofBat",
  Small = "small",
  Normal = "norm"

}
