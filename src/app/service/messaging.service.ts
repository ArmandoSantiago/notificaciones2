import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      (fireMessaging: AngularFireMessaging) => {
        fireMessaging.onMessage = fireMessaging.onMessage.bind(fireMessaging);
        fireMessaging.onTokenRefresh = fireMessaging.onTokenRefresh.bind(fireMessaging);
      });
  }

  requestPermission = () => {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        // console.log(token);
        // TODO
        // Relacinar con el user
        localStorage.setItem('tokenNotification', token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage = () => {
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {
        alert(payload.notification.body);
        this.currentMessage.next(payload);
      });
  }
}
