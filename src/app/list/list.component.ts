import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    constructor(
        private titleService: Title,
    ) {
        this.titleService.setTitle('Página correspondiente al listado de usuarios');
    }

    ngOnInit() {
    }

}
