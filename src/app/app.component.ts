import { Component } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';

interface IMetaTags {
    title: string;
    description: string;
    'og:image': string;
    'og:type': string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ssr';
    constructor(
        // private readonly translate: TranslateService,
        private readonly meta: MetaService,
        private router: Router,
    ) { }

    ngOnInit(): void {

        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         const metaParams = this.getMetaParams(this.router.routerState.snapshot.root);
        //         Object.keys(metaParams).forEach((param) => {
        //             if (param === 'title') {
        //                 this.meta.setTitle(metaParams[param]);
        //             } else {
        //                 this.meta.setTag(param, metaParams[param]);
        //             }
        //         });
        //     }
        // });

        // this.meta.setTag('og:locale', 'en-US');
        // this.meta.setTag('og:test', 'en-US');
    }

    private getMetaParams(routeSnapshot: ActivatedRouteSnapshot): IMetaTags {
        let params: IMetaTags = (routeSnapshot.data && routeSnapshot.data['meta']) ? routeSnapshot.data['meta'] : {};
        if (routeSnapshot.firstChild) {
            params = <IMetaTags>this.getMetaParams(routeSnapshot.firstChild) || params;
        }
        return params;
    }
}
