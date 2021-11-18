import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, Observable } from 'rxjs';
import {error} from 'protractor';


@Component({
  selector: 'app-assignment-observables-home',
  templateUrl: './assignment-observables-home.component.html',
  styleUrls: ['./assignment-observables-home.component.css']
})
export class AssignmentObservablesHomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000)
    //   .subscribe(
    //     count => {
    //       console.log(count);
    //     }
    //   );
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 4) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .subscribe(
        data => {console.log(data);
                }, error => {
                console.log(error);
                alert(error.message);
                }, () => {console.log('Completed!')});
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
