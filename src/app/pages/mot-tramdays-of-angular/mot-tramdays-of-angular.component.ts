import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-mot-tramdays-of-angular',
  templateUrl: './mot-tramdays-of-angular.component.html',
  styleUrls: ['./mot-tramdays-of-angular.component.less']
})
export class MotTramdaysOfAngularComponent {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
