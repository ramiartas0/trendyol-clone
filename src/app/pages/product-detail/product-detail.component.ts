import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BasketService } from '../../service/basket.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private basketService: BasketService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.productId = +id;
      }
      this.getProductById(this.productId);
    });
  }

  getProductById(id: number): void {
    this.http.get<any>('assets/data/products.json').subscribe(data => {
      const selectedProduct = data.result.find((item: any) => item.id === id);
      this.product = selectedProduct;
    });
  }

  addToBasket(product: any): void {
    this.basketService.addToBasket(product);
  }
}
