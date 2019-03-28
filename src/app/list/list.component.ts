import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
// import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    constructor(
        private readonly meta: MetaService,
    ) {
        // setTimeout(() => {
        //     // this.meta.setTitle(`List of users`);
        //     // this.meta.setTag('og:image', 'https://bnetproduct-a.akamaihd.net//26/108f97e24b8b60b4c132e42c0ee956d8-WoW_Letters_Icon_optimized.png');
        // }, 300);
    }

    ngOnInit() {
    }

}
