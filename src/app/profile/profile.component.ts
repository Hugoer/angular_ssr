import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(
        private titleService: Title,
    ) {
        // this.titleService.setTitle('Página correspondiente al perfil del usuario');
    }

    ngOnInit() {
    }

}
