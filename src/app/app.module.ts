import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';

// export function metaFactory(translate: TranslateService): MetaLoader {
export function metaFactory(): MetaLoader {
    return new MetaStaticLoader({
        // callback: (key: string) => translate.get(key),
        callback: (key: string) => '',
        pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
        pageTitleSeparator: ' - ',
        applicationName: 'APP_NAME',
        defaults: {
            title: 'DEFAULT_TITLE',
            description: 'DEFAULT_DESC',
            'og:image': 'https://...jpg',
            'og:type': 'website',
            'og:locale': 'en_US',
            'og:locale:alternate': 'en_US,nl_NL,tr_TR'
        }
    });
}

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        ListComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        MetaModule.forRoot({
            provide: MetaLoader,
            useFactory: (metaFactory)
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
