import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private previousId: string;

  constructor(private socket: Socket) { }

  stationFeed(): Observable<any>{
    return new Observable (subscriber => {
      this.socket.on('StationsChange', (data)=>{
        console.log(data);

        if(this.previousId != data.documentKey._id){
          subscriber.next(data);
          this.previousId = data.documentKey._id;
        }
      })
    })
  }
}
