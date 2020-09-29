import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listProduct: Array<IProduct>;
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listProduct = this.productService.getProduct();
  }
}
