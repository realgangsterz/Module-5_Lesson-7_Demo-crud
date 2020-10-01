import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit, OnDestroy {
  product: IProduct;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.product = this.productService.getProductById(id);
    });
  }

  delete(): void{
    this.productService.deleteProduct(this.product);
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
