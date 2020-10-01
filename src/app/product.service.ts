import { Injectable } from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  countId = 10;
  private products: Array<IProduct> = [
    {
      id: 1, name: 'Chucks Taylor 1970s', brand: 'Converse', description: 'like new'
    },
    {
      id: 2, name: 'Ultraboost', brand: 'Adidas', description: 'Authentic'
    },
    {
      id: 3, name: 'Jordan 1', brand: 'Nike', description: 'Secondhand'
    },
    {
      id: 4, name: 'HunterStreet', brand: 'Bitis', description: 'Hypebeast'
    },

  ];
  constructor() { }
  getProduct(): Array<IProduct>{
    return this.products;
  }
  getProductById(id: number): IProduct{
    return this.products.find(item => item.id === id);
  }
  editProduct(id: number, product: IProduct): void {
    let productTem = this.getProductById(id);
    productTem = product;
  }
  saveProduct(product: IProduct): void {
    this.countId++;
    product.id = this.countId;
    this.products.push(product);
  }
  deleteProduct(product: IProduct): void {
    this.products.forEach((item, index) => {
      if (item === product) {
        this.products.splice(index, 1);
      }
    });
    console.log(this.products);
  }
}
