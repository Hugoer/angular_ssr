import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, tap } from 'rxjs/operators';
import { IHeroe } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,
    ) {

    }

    // getUser(uid: string): Observable<firebase.firestore.DocumentSnapshot> {
    //     const userDoc: AngularFirestoreDocument<IUser> = this.afs.doc<IUser>(`user/${uid}`);
    //     return userDoc.get().pipe(take(1));
    // }
    getHeroe(id: number): Observable<IHeroe> {
        const _headers: HttpHeaders = new HttpHeaders().set('x-apikey', '5c9f51b3df5d634f46ecb09c');
        return this.http.get<IHeroe[]>('https://angulargdg-83ef.restdb.io/rest/heroe', { headers: _headers })
            .pipe(map((heroes: IHeroe[]) => {
                return heroes.filter((heroe: IHeroe) => {
                    return heroe.id === id;
                })[0];
            }))
            .pipe(map((heroe: IHeroe) => {
                switch (heroe.id) {
                    case 4:
                        heroe.imageUrl = `https://angulargdg-233dc.firebaseapp.com/assets/herovillain/spiderman.jpg`;
                        break;
                    case 5:
                        heroe.imageUrl = `https://angulargdg-233dc.firebaseapp.com/assets/herovillain/strange.jpg`;
                        break;
                    default:
                        break;
                }
                return heroe;
            }))
    }

}