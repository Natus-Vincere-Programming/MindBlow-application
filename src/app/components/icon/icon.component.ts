import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import fs from "fs";
import {DomSanitizer} from "@angular/platform-browser";

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

    @Input() iconName: string = "3D";
    @Input() size: IconSize = IconSize.LARGE;
    @Input() weight: IconWeight = IconWeight.REGULAR;
    @Input() color: string = "accent";
    private svg: string = "";
    private sanitizer: DomSanitizer;

    constructor(sanitizer: DomSanitizer) {
        this.sanitizer = sanitizer;
    }

    getSource(): string {
        let path = `src/assets/icons/${"Type=" + this.iconName + ", Weight=" + this.weight}.svg`;
        let svgContent = fs.readFileSync(path, 'utf8');
        this.svg = this.sanitizer.bypassSecurityTrustHtml(svgContent) as string;
        return this.svg;
    }

    getSize(): number {
        // TODO - Потрібно буде переробити при збільшенні к-сті розмірів
        return this.size === IconSize.LARGE ? 24 : 16;
    }

    getColor(): string {
        return "var(--" + this.color + ")";
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
