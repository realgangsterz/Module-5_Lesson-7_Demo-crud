import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Array<IProduct> = [
    {
      id: 1, name: 'Chucks Taylor 1970s', brand: 'Converse', description: 'like new'
    },
    {
      id: 2, name: 'Ultraboost', brand: 'Adidas', description: 'Authentic'
    },
    {
      id: 3, name: 'Jordan Air 1', brand: 'Nike', description: 'Secondhand'
    },
    {
      id: 4, name: 'HunterStreet', brand: 'Bitis', description: 'Hypebeast'
    },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
