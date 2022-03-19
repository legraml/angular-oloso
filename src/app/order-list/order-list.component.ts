import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  from = 1;
  to = 2;
  orders: Array<Order> = [];
  selectedOrder: Order | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  search(): void {
    const url = 'http://virtserver.swaggerhub.com/legraml/oloso/1.0.0/order';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('from', this.from).set('to', this.to);

    this.http.get<Order[]>(url, { headers, params }).subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (err) => {
        console.error('Error', err);
      },
    });
  }

  select(o: Order) {
    this.selectedOrder = o;
  }
}
