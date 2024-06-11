import { Component, OnInit } from '@angular/core';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  basketCount: number = 0;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketCount = this.basketService.getItemCount();
  }
}
