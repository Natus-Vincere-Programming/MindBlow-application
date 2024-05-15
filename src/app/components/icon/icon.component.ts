import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-icon',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.css'
})
export class IconComponent {
    @Input() iconName: string = "";
    @Input() size: IconSize = IconSize.LARGE;
    @Input() weight: IconWeight = IconWeight.REGULAR;

    getSource(): string {
        return `assets/icons/${"Type=" + this.iconName +", Weight=" + this.weight}.svg`;
    }

    getSize(): number {
        // TODO - Потрібно буде переробити при збільшенні к-сті розмірів
        return this.size === IconSize.LARGE ? 24 : 16;
    }
}

export enum IconSize {
    SMALL = "Small",
    LARGE = "Large"
}

export enum IconWeight {
    LIGHT = "Light",
    REGULAR = "Regular"
}
