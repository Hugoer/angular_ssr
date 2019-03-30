import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard, MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';

// https://github.com/fulls1z3/ngx-meta/tree/master/packages/%40ngx-meta/core

// export function metaFactory(translate: TranslateService): MetaLoader {
export function metaFactory(): MetaLoader {
    return new MetaStaticLoader({
        pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
        pageTitleSeparator: ' - ',
        applicationName: 'APP_NAME',
        defaults: {
            'title': 'DEFAULT_TITLE',
            'description': 'DEFAULT_DESC',
            'og:image': 'https://...jpg',
            'og:type': 'website',
            'og:locale': 'en_US',
            'og:locale:alternate': 'en_US,nl_NL,tr_TR'
        }
    });
}

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [MetaGuard],
    },
    {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [MetaGuard],
    },
    {
        path: 'list',
        component: ListComponent,
        canActivate: [MetaGuard],
        data: {
            meta: {
                title: 'Listado de usuarios',
                description: 'Descripción listado de usuarios',
                'og:image': 'https://bnetproduct-a.akamaihd.net//26/108f97e24b8b60b4c132e42c0ee956d8-WoW_Letters_Icon_optimized.png',
                'og:type': 'website',
            }
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        MetaModule.forRoot({
            provide: MetaLoader,
            useFactory: (metaFactory)
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
