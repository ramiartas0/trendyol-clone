import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../service/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  items: any[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.items = this.basketService.getItems();
  }

  updateQuantity(item: any, quantity: number) {
    if (quantity > 0) {
      this.basketService.updateQuantity(item, quantity);
      this.items = this.basketService.getItems();
    }
  }

  removeFromBasket(item: any) {
    this.basketService.removeFromBasket(item);
    this.items = this.basketService.getItems();
  }
}
