import { Component } from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {
    MatActionList,
    MatList,
    MatListItem,
    MatListItemIcon,
    MatListItemMeta,
    MatListItemTitle, MatListOption, MatSelectionList
} from "@angular/material/list";
import {MatInput} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridList} from "@angular/material/grid-list";

@Component({
  selector: 'app-requests',
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
        MatListOption
    ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent {

}
