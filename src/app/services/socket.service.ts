import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  readingsFeed(): Observable<any>{
    return new Observable (subscriber => {
      this.socket.on('StationsChange', (data)=>{
        subscriber.next(data);
        subscriber.complete();
      })
    })
  }
}
