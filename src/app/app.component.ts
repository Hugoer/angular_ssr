import { Component } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

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
    ) { }

    ngOnInit(): void {
        // add available languages & set default language
        // this.translate.addLangs(['en', 'tr']);
        // this.translate.setDefaultLang(defaultLanguage.code);

        // this.translate.use('en').subscribe(() => {
        this.meta.setTag('og:locale', 'en-US');
        // });
    }
}
