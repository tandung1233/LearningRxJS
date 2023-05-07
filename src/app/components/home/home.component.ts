import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  ngOnInit(): void {
    // Tự tạo Observable bằng operator interval
    const ob = interval(1000);
    // observer hay sử dụng đi sử dụng lại nên viết riêng object
    const observer = {
      next(res: any) {
        console.log(res);
      },
      error(err: any) {
        console.error(err);
      },
      complete() {
        console.log('complete');
      },
    };
    // Khi tạo tạo cái Observable kia thì nó sẽ chưa chạy khi ta subscribe nó mới chạy
    const subscription = ob.subscribe(observer);
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
