import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {Subscription} from 'rxjs';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  subscription: Subscription;
  id: number;
  product: IProduct = {
    id: 0,
    name: '',
    brand: '',
    description: ''
  };
  constructor(private productService: ProductService,
              private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.product = this.productService.getProductById(this.id);
    });
  }
  updateProduct(): void {
    this.productService.editProduct(this.id, this.product);
  }
}
