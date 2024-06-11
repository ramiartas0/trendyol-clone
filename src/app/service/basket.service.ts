import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private items: any[] = [];

  constructor() { 
    this.loadItems();
  }

  addToBasket(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.unitPrice * existingItem.quantity;
    } else {
      product.quantity = 1;
      product.unitPrice = product.price.sellingPrice;
      product.totalPrice = product.unitPrice;
      this.items.push(product);
    }
    this.saveItems();
  }

  removeFromBasket(product: any) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.saveItems();
    }
  }

updateQuantity(product: any, quantity: number) {
  const existingItem = this.items.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity = quantity;
    existingItem.totalPrice = existingItem.unitPrice * quantity;
    if (existingItem.quantity <= 0) {
      this.removeFromBasket(product);
    }
    this.saveItems();
  }
}

  getItems() {
    return this.items;
  }

  getItemCount() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  saveItems() {
    localStorage.setItem('basketItems', JSON.stringify(this.items));
  }

  loadItems() {
    const savedItems = localStorage.getItem('basketItems');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }
}
