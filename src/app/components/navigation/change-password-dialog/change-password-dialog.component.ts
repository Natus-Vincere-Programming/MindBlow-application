import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {Location} from "@angular/common";
import {CdkTrapFocus} from "@angular/cdk/a11y";
import {RouterLink} from "@angular/router";
import {UserResponse} from "../../../service/user/response/user.response";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-request-delete-confirm',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    CdkTrapFocus,
    RouterLink,
  ],
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.scss'
})
export class ChangePasswordDialogComponent implements OnInit{
  user?: UserResponse
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RequestDeleteConfirmData,
    private userService: UserService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
        this.userService.getUserById(this.data.user.id).then(response => {
          if (response === null) return;
          this.user = response;
        });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteUser() {
    this.userService.deleteUser(this.data.user).then(() => {
      this.dialogRef.close();
    });
  }
}

export interface RequestDeleteConfirmData {
  user: UserResponse;
}
