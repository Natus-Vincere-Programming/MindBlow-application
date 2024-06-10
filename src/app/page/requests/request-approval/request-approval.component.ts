import {Component, OnInit} from '@angular/core';
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {MatButton, MatIconButton} from "@angular/material/button";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {Location, NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../../service/user/users-response";
import {UserService} from "../../../service/user/user.service";

@Component({
    selector: 'app-request-approval',
    standalone: true,
    imports: [
        MatTabNav,
        MatTabLink,
        MatTabNavPanel,
        MatButton,
        RouterOutlet,
        MatIcon,
        MatIconButton,
        MatToolbar,
        NgOptimizedImage,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './request-approval.component.html',
    styleUrl: './request-approval.component.scss'
})
export class RequestApprovalComponent implements OnInit {
    private user?: User

    constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) {
    }

    returnBackPage() {
        this.location.back();
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id === null) return;
        this.userService.getUserById(id).then(user => {
            if (user === null) return;
            this.user = user;
        });
    }
}
