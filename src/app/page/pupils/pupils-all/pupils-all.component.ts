import {Component} from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MatActionList,
  MatList,
  MatListItem,
  MatListItemAvatar,
  MatListItemIcon,
  MatListItemMeta,
  MatListItemTitle,
  MatListOption,
  MatSelectionList
} from "@angular/material/list";
import {MatGridList} from "@angular/material/grid-list";
import {NgForOf, NgIf} from "@angular/common";
import {ScrollNearEndDirective} from "../../../directive/scroll-near-end.directive";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pupils-all',
  standalone: true,
  imports: [
    MatDivider,
    MatCheckbox,
    MatButton,
    MatFormField,
    MatSelect,
    MatOption,
    MatIcon,
    MatLabel,
    MatListItemMeta,
    MatPrefix,
    MatInput,
    ReactiveFormsModule,
    FormsModule,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatGridList,
    MatActionList,
    MatListItemIcon,
    MatSelectionList,
    MatListOption,
    NgForOf,
    ScrollNearEndDirective,
    MatListItemAvatar,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    NgIf,
    RouterLink,
    MatIconButton
  ],
  templateUrl: './pupils-all.component.html',
  styleUrl: './pupils-all.component.scss'
})
export class PupilsAllComponent {

}
