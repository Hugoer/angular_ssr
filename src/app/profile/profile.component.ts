import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Subject } from 'rxjs';
import { IHeroe } from '../user/user.model';
import { MetaService } from '@ngx-meta/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    user$ = new Subject<IHeroe>();

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private readonly meta: MetaService,
    ) {
        const userUid = +this.route.snapshot.paramMap.get('id');
        this.userService.getHeroe(userUid)
            .pipe(take(1))
            .subscribe((heroe) => {
                this.meta.setTag('og:image', heroe.imageUrl);
                this.meta.setTag('og:description', heroe.name);
                this.meta.setTitle(`Página de ${heroe.name}`);
                this.user$.next(heroe);
            });
    }

    ngOnInit() {
    }

}
