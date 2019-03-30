import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IHeroe } from './user.model';


@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, OnDestroy {

    @Input() user: Subject<IHeroe>;

    // langKey: string;
    uid: string;

    private _destroyed$ = new Subject();

    constructor(
    ) {

    }

    ngOnInit() {
        this.user.asObservable()
            .pipe(takeUntil(this._destroyed$))
            .subscribe((user) => {
                this.uid = user._id;
            });
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

}
